import axios from 'axios';
import * as xmlParser from 'xml2js';

import { parameterMapper, Parameters, ParametersValues } from './parameters';

const API_URL = 'https://krdict.korean.go.kr/api/search';

function dictionarySearch(parameters: Parameters) {
    return sendRequest(createKrdictApiParameters(parameters));
}

function createKrdictApiParameters(parameters: Parameters) {
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
    // I have no idea why there are so many '\t's '\r's and '\n's in the response
    // text (specifically in the trans_lang value), but I'm getting rid of them
    return JSON.parse(JSON.stringify(json).replace(/(\\t)*(\\r)*(\\n)*/g, ''));
}

export { dictionarySearch };
