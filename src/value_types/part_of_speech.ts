const mapKey = {
    all: 0,
    noun: 1,
    pronoun: 2,
    numeral: 3,
    'postpositional particle': 4,
    verb: 5,
    adjective: 6,
    determiner: 7,
    adverb: 8,
    interjection: 9,
    affix: 10,
    'bound noun': 11,
    'auxiliary verb': 12,
    'auxiliary adjective': 13,
    ending: 14,
    none: 15,
};
type PartOfSpeech =
    | 'all'
    | 'noun'
    | 'pronoun'
    | 'numeral'
    | 'postpositional particle'
    | 'verb'
    | 'adjective'
    | 'determiner'
    | 'adverb'
    | 'interjection'
    | 'affix'
    | 'bound noun'
    | 'auxiliary verb'
    | 'auxiliary adjective'
    | 'ending'
    | 'none';

function mapPartOfSpeech(input: PartOfSpeech | PartOfSpeech[]): number | string {
    if (typeof input === 'string') {
        return mapKey[input];
    }
    return input.map((transLang) => {
        return mapKey[transLang];
    }).join(',');
}

export { PartOfSpeech, mapPartOfSpeech };
