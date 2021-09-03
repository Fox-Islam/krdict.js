import axios from 'axios';
import * as xmlParser from 'xml2js';

import { parameterMapper, Parameters, ParametersValues, ViewParameters } from './parameters';

const API_URL = 'https://krdict.korean.go.kr/api/search';
const VIEW_URL = 'https://krdict.korean.go.kr/api/view';
let API_KEY: string | null = null;
const KEY_REMAPS: Record<string, string> = {
    conju_info: 'conjugations',
    der_info: 'derivativeInfo',
    ref_info: 'referenceInfo',
    rel_info: 'relatedInfo',
    sup_no: 'homomorphicNumber',
    sense: 'meaning',
    sense_info: 'meaningInfo',
    sense_order: 'meaningOrder',
    subsense_info: 'submeaningInfo',
    pos: 'partOfSpeech',
    word_grade: 'vocabularyGrade',
    trans_lang: 'language',
    trans_word: 'word',
    trans_dfn: 'definition',
};

function setKey(key: string) {
    API_KEY = key;
}

function dictionarySearch(parameters: Parameters) {
    return sendRequest(createKrdictApiParameters(parameters));
}

function dictionaryView(parameters: ViewParameters) {
    return sendRequest(createKrdictApiParameters(transformViewParameters(parameters)), VIEW_URL);
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

function transformViewParameters(parameters: ViewParameters): Parameters {
    if (!parameters.hasOwnProperty('viewMethod')) {
        return parameters as Parameters;
    }

    if (parameters.viewMethod === 'word_info') {
        if (parameters.hasOwnProperty('query')) {
            const homomorphNum = parameters.homomorphicNumber !== undefined ? parameters.homomorphicNumber : 0;
            parameters.query += homomorphNum;
        }
    } else if (parameters.hasOwnProperty('targetCode')) {
        parameters.query = parameters.targetCode.toString()
    }

    return parameters as Parameters;
}

function getMappedParameterValue(sensiblePropertyName: string, parameterValue: ParametersValues) {
    const mapperFunction = parameterMapper[sensiblePropertyName].mapperFunction;
    if (mapperFunction !== undefined && parameterValue !== undefined) {
        return mapperFunction(parameterValue);
    }
    return parameterValue;
}

function sendRequest(parameters: any, apiUrl: string = API_URL) {
    return axios(apiUrl, {
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
    if (KEY_REMAPS[key] !== undefined) {
        return;
    }

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
            for (const value of elem) {
                stack.push([value, null]);
            }
        } else if (typeof elem === 'object') {
            for (const elementKey in elem) {
                if (!elem.hasOwnProperty(elementKey)) {
                    continue;
                }

                stack.push([elem, elementKey]);
            }
        }
    }

    for (const renamed of rename) {
        const [container, oldKey, newKey] = renamed;

        container[newKey] = container[oldKey];
        delete container[oldKey];
    }

    return json;
}

export { dictionarySearch, dictionaryView, setKey };
