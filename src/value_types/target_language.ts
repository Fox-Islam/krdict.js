const mapKey = {
    all: 0,
    'native language': 1,
    chinese: 2,
    'chinese (simplified)': 2,
    unclear: 3,
    english: 4,
    greek: 5,
    dutch: 6,
    norwegian: 7,
    german: 8,
    latin: 9,
    russian: 10,
    romanian: 11,
    maori: 12,
    malay: 13,
    mongolian: 14,
    basque: 15,
    burmese: 16,
    vietnamese: 17,
    bulgarian: 18,
    sanskrit: 19,
    servo: 20,
    croat: 20,
    swahili: 21,
    swedish: 22,
    arabic: 23,
    irish: 24,
    spanish: 25,
    uzbek: 26,
    ukrainian: 27,
    italian: 28,
    indonesian: 29,
    japanese: 30,
    'chinese (traditional)': 31,
    czech: 32,
    cambodian: 33,
    quechua: 34,
    tagalog: 35,
    thai: 36,
    turkish: 37,
    tibetan: 38,
    persian: 39,
    portuguese: 40,
    polish: 41,
    french: 42,
    provencal: 43,
    finnish: 44,
    hungarian: 45,
    hebrew: 46,
    hindi: 47,
    other: 48,
    danish: 49,
};

type TargetLanguage =
    | 'all'
    | 'native language'
    | 'chinese'
    | 'chinese (simplified)'
    | 'unclear'
    | 'english'
    | 'greek'
    | 'dutch'
    | 'norwegian'
    | 'german'
    | 'latin'
    | 'russian'
    | 'romanian'
    | 'maori'
    | 'malay'
    | 'mongolian'
    | 'basque'
    | 'burmese'
    | 'vietnamese'
    | 'bulgarian'
    | 'sanskrit'
    | 'servo'
    | 'croat'
    | 'swahili'
    | 'swedish'
    | 'arabic'
    | 'irish'
    | 'spanish'
    | 'uzbek'
    | 'ukrainian'
    | 'italian'
    | 'indonesian'
    | 'japanese'
    | 'chinese (traditional)'
    | 'czech'
    | 'cambodian'
    | 'quechua'
    | 'tagalog'
    | 'thai'
    | 'turkish'
    | 'tibetan'
    | 'persian'
    | 'portuguese'
    | 'polish'
    | 'french'
    | 'provencal'
    | 'finnish'
    | 'hungarian'
    | 'hebrew'
    | 'hindi'
    | 'other'
    | 'danish';

function mapTargetLanguage(input: TargetLanguage): number {
    return mapKey[input];
}

export { TargetLanguage, mapTargetLanguage };
