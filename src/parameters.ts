import { FirstCategory } from './value_types/first_category';
import { mapSearchTarget, SearchTarget } from './value_types/search_target';
import { mapSortMethod, SortMethod } from './value_types/sort_method';
import { MeaningCategory, mapMeaningCategory } from './value_types/meaning_category';
import { MultimediaInformation, mapMultimediaInformation } from './value_types/multimedia_information';
import { PartOfSpeech, mapPartOfSpeech } from './value_types/part_of_speech';
import { TargetLanguage, mapTargetLanguage } from './value_types/target_language';
import { SearchMethod } from './value_types/search_method';
import { SearchTargetType, mapSearchTargetType } from './value_types/search_target_type';
import { SecondCategory } from './value_types/second_category';
import { SubjectCategory, mapSubjectCategory } from './value_types/subject_category';
import { TranslationLanguage, mapTranslationLanguage } from './value_types/translation_language';
import { VocabularyGrade, mapVocabularyGrade } from './value_types/vocabulary_grade';

type ParametersValues = string | number | boolean | number[] | string[] | undefined;

interface ParametersProperties {
    [property: string]: ParametersValues;
}

interface Parameters extends ParametersProperties {
    key: string;
    query: string;
    searchStartIndex?: number;
    numberOfResults?: number;
    sortMethod?: SortMethod;
    searchTarget?: SearchTarget;
    shouldTranslate?: boolean;
    translationLanguage?: TranslationLanguage | TranslationLanguage[];
    detailedSearch?: boolean;
    searchTargetType?: SearchTargetType;
    targetLanguage?: TargetLanguage;
    searchMethod?: SearchMethod;
    firstCategory?: FirstCategory[];
    secondCategory?: SecondCategory[];
    vocabularyGrade?: VocabularyGrade[];
    partOfSpeech?: PartOfSpeech[];
    multimediaInformation?: MultimediaInformation[];
    minNumberOfSyllables?: number;
    maxNumberOfSyllables?: number;
    meaningCategory?: MeaningCategory[];
    subjectCategory?: SubjectCategory[];
}

interface ParameterMapperProperties {
    [property: string]: {
        name: string;
        mapperFunction?: any;
    };
}

const parameterMapper: ParameterMapperProperties = {
    query: {
        name: 'q',
    },
    searchStartIndex: {
        name: 'start',
    },
    numberOfResults: {
        name: 'num',
    },
    sortMethod: {
        name: 'sort',
        mapperFunction: mapSortMethod,
    },
    searchTarget: {
        name: 'part',
        mapperFunction: mapSearchTarget,
    },
    shouldTranslate: {
        name: 'translated',
        mapperFunction: booleanMapper,
    },
    translationLanguage: {
        name: 'trans_lang',
        mapperFunction: mapTranslationLanguage,
    },
    detailedSearch: {
        name: 'advanced',
        mapperFunction: booleanMapper,
    },
    searchTargetType: {
        name: 'target',
        mapperFunction: mapSearchTargetType,
    },
    targetLanguage: {
        name: 'lang',
        mapperFunction: mapTargetLanguage,
    },
    searchMethod: {
        name: 'method',
    },
    firstCategory: {
        name: 'type1',
    },
    secondCategory: {
        name: 'type2',
    },
    vocabularyGrade: {
        name: 'level',
        mapperFunction: mapVocabularyGrade,
    },
    partOfSpeech: {
        name: 'pos',
        mapperFunction: mapPartOfSpeech,
    },
    multimediaInformation: {
        name: 'multimedia',
        mapperFunction: mapMultimediaInformation,
    },
    minNumberOfSyllables: {
        name: 'letter_s',
    },
    maxNumberOfSyllables: {
        name: 'letter_e',
    },
    meaningCategory: {
        name: 'sense_cat',
        mapperFunction: mapMeaningCategory,
    },
    subjectCategory: {
        name: 'subject_cat',
        mapperFunction: mapSubjectCategory,
    },
};

function booleanMapper(booleanValue: boolean) {
    return booleanValue ? 'y' : 'n';
}

export { Parameters, ParametersValues, parameterMapper };
