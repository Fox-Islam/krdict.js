const mapKey = {
    all: 0,
    english: 1,
    japanese: 2,
    french: 3,
    spanish: 4,
    arabic: 5,
    mongolian: 6,
    vietnamese: 7,
    thai: 8,
    indonesian: 9,
    russian: 10,
};

type TranslationLanguage =
    | 'all'
    | 'english'
    | 'japanese'
    | 'french'
    | 'spanish'
    | 'arabic'
    | 'mongolian'
    | 'vietnamese'
    | 'thai'
    | 'indonesian'
    | 'russian';

function mapTranslationLanguage(input: TranslationLanguage | TranslationLanguage[]): number | number[] {
    if (typeof input === 'string') {
        return mapKey[input];
    }
    return input.map((transLang) => {
        return mapKey[transLang];
    });
}

export { TranslationLanguage, mapTranslationLanguage };
