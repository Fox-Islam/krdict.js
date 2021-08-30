import axios from 'axios';
import * as xmlParser from 'xml2js';

import { parameterMapper, Parameters, ParametersValues } from './parameters';

const API_URL = 'https://krdict.korean.go.kr/api/search';
let API_KEY: string | null = null;
const KEY_REMAPS: Record<string, string> = {
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

function handleTabAndNewline(container: any, key: string) {
    const elem = container[key];

    if (Array.isArray(elem) && elem.length === 1 && typeof elem[0] === 'string') {
        // this branch can be removed when explicitArray option is used
        elem[0] = elem[0].trim();
    } else if (typeof elem === 'string') {
        container[key] = elem.trim();
    }
}

function handleRemaps(container: any, key: string, rename: any[][]) {
    if (KEY_REMAPS[key] === undefined) {
        return;
    }

    rename.push([container, key, KEY_REMAPS[key]]);
}

function handleSnakeCase(container: any, key: string, rename: any[][]) {
    let i = key.indexOf('_');
    if (i === -1) {
        return;
    }

    const oldKey = key;
    do {
        const before = key.substring(0, i);
        const after = key.substring(i + 1, i + 2).toUpperCase() + key.substring(i + 2);
        key = before + after;
        i = key.indexOf('_');
    } while (i !== -1);

    rename.push([container, oldKey, key]);
}

function getCleanJsonData(json: any): object {
    const stack = [[json, null]];
    const rename: any[][] = [];

    while (stack.length > 0) {
        // tslint:disable-next-line
        let [elem, key] = stack.pop()!;

        if (key !== null) {
            handleTabAndNewline(elem, key);
            handleRemaps(elem, key, rename);
            handleSnakeCase(elem, key, rename);

            elem = elem[key];
        }


        // push nested elements to the stack
        if (Array.isArray(elem)) {
            for (const index of elem) {
                stack.push([elem[index], null]);
            }
        } else if (typeof elem === 'object') {
            for (const elementKey in elem) {
                if (!elem.hasOwnProperty(elementKey)) {
                    continue;
                }

                stack.push([elem, elementKey])
            }
        }
    }

    // tslint:disable-next-line
    for (let i = 0; i < rename.length; i++) {
        const [container, oldKey, newKey] = rename[i];

        container[newKey] = container[oldKey];
        delete container[oldKey];
    }

    return json;
}

export { dictionarySearch, setKey };
