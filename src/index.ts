import axios from 'axios';
import * as xmlParser from 'xml2js';

import { parameterMapper, Parameters, ParametersValues } from './parameters';

const API_URL = 'https://krdict.korean.go.kr/api/search';
let API_KEY: string | null = null;

function setKey(key: string) {
    API_KEY = key;
}

function dictionarySearch(parameters: Parameters) {
    return sendRequest(createKrdictApiParameters(parameters));
}

function createKrdictApiParameters(parameters: Parameters) {
    parameters.key = API_KEY ? API_KEY : parameters.key;
    const krdictParameters: any = parameters;
    for (const inputParamPropertyName in parameters) {
        if (!parameters.hasOwnProperty(inputParamPropertyName)) {
            continue;
        }
        if (!parameterMapper.hasOwnProperty(inputParamPropertyName)) {
            continue;
        }

        const krdictPropertyName = parameterMapper[inputParamPropertyName].name;
        krdictParameters[krdictPropertyName] = getMappedParameterValue(
            inputParamPropertyName,
            parameters[inputParamPropertyName],
        );
        delete krdictParameters[inputParamPropertyName];
    }
    return krdictParameters;
}

function getMappedParameterValue(sensiblePropertyName: string, parameterValue: ParametersValues) {
    const mapperFunction = parameterMapper[sensiblePropertyName].mapperFunction;
    if (mapperFunction !== undefined && parameterValue !== undefined) {
        return mapperFunction(parameterValue);
    }
    return parameterValue;
}

function sendRequest(parameters: any) {
    return axios(API_URL, {
        params: parameters,
    })
        .then((response) => {
            const data = response.data.trim();
            let jsonFromXml = {};
            xmlParser.parseString(data, (xmlParseError, parsedData) => {
                if (xmlParseError) {
                    throw xmlParseError.message;
                }
                jsonFromXml = parsedData;
            });
            return {
                requestParameters: parameters,
                data: getCleanJsonData(jsonFromXml),
            };
        })
        .catch((error) => {
            throw error;
        });
}

function getCleanJsonData(json: object): object {
    const jsonString = JSON.stringify(json)
        // I have no idea why there are so many '\t's '\r's and '\n's in the response
        // text (specifically in the trans_lang value), but I'm getting rid of them:
        .replace(/(\\t)*(\\r)*(\\n)*/g, '')
        // Only changing these for consistency, not sure that they're all that useful:
        .replace(/\"sup_no\"/g, '"homomorphicNumber"')
        .replace(/\"target_code\"/g, '"targetCode"')
        // Bringing these in line with the names of the input parameters:
        .replace(/\"sense\"/g, '"meaning"')
        .replace(/\"sense_order\"/g, '"meaningOrder"')
        .replace(/\"pos\"/g, '"partOfSpeech"')
        .replace(/\"word_grade\"/g, '"vocabularyGrade"')
        // These are all in a "translation" property, the preceding 'trans_' isn't useful:
        .replace(/\"trans_lang\"/g, '"language"')
        .replace(/\"trans_word\"/g, '"word"')
        .replace(/\"trans_dfn\"/g, '"definition"');
    return JSON.parse(jsonString);
}

export { dictionarySearch, setKey };
