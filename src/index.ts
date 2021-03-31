import axios from 'axios';
import * as xmlParser from 'xml2js';

import { parameterMapper, Parameters, ParametersValues } from './parameters';

const API_URL = 'https://krdict.korean.go.kr/api/search';
let API_KEY: string | null = null;
const keyRemaps: Record<string, string> = {
    sup_no: 'homomorphicNumber',
    sense: 'meaning',
    sense_order: 'meaningOrder',
    pos: 'partOfSpeech',
    word_grade: 'vocabularyGrade',
    trans_lang: 'language',
    trans_word: 'word',
    trans_dfn: 'definition'
};

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

function getCleanJsonData(json: any): object {
    const stack = [[json, null]];
    const rename = [];

    while (stack.length > 0) {
        let [elem, key] = stack.pop()!;

        // check key for renaming & value trimming
        if (key !== null) {
            const container = elem;
            elem = container[key];

            // handle the tab and newline characters
            if (Array.isArray(elem) && elem.length === 1 && typeof elem[0] === 'string') {
                // this branch can be removed when explicitArray option is used
                elem[0] = elem[0].trim();
            } else if (typeof elem === 'string') {
                elem = elem.trim();
                container[key] = elem;
            }

            if (keyRemaps[key]) {
                const oldKey = key;
                key = keyRemaps[key];

                rename.push([container, oldKey, key]);
            } else if (key.indexOf('_') !== -1) {
                // convert snake case to camel case
                const oldKey = key;
                for (let i = key.indexOf('_'); i !== -1; i = key.indexOf('_')) {
                    const before = key.substring(0, i);
                    const after = key.substring(i + 1, i + 2).toUpperCase() + key.substring(i + 2);
                    key = before + after;
                }

                rename.push([container, oldKey, key]);
            }
        }


        // push nested elements to the stack
        if (Array.isArray(elem)) {
            for (let i = 0; i < elem.length; i++) {
                stack.push([elem[i], null]);
            }
        } else if (typeof elem === 'object') {
            for (const key in elem) {
                if (!elem.hasOwnProperty(key)) {
                    continue;
                }

                stack.push([elem, key])
            }
        }
    }

    for (let i = 0; i < rename.length; i++) {
        const [container, oldKey, newKey] = rename[i];

        container[newKey] = container[oldKey];
        delete container[oldKey];
    }

    return json;
}

export { dictionarySearch, setKey };
