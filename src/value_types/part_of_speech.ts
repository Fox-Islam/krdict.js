const mapKey = {
    whole: 0,
    noun: 1,
    pronoun: 2,
    rhetoric: 3,
    investigation: 4,
    verb: 5,
    adjective: 6,
    'tube sentence': 7,
    adverb: 8,
    interjection: 9,
    affix: 10,
    'dependent noun': 11,
    'auxiliary verb': 12,
    'auxiliary adjective': 13,
    ending: 14,
    none: 15,
};
type PartOfSpeech =
    | 'whole'
    | 'noun'
    | 'pronoun'
    | 'rhetoric'
    | 'investigation'
    | 'verb'
    | 'adjective'
    | 'tube sentence'
    | 'adverb'
    | 'interjection'
    | 'affix'
    | 'dependent noun'
    | 'auxiliary verb'
    | 'auxiliary adjective'
    | 'ending'
    | 'none';

function mapPartOfSpeech(input: PartOfSpeech[]): number[] {
    return input.map((transLang) => {
        return mapKey[transLang];
    });
}

export { PartOfSpeech, mapPartOfSpeech };
