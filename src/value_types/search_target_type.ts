const mapKey = {
    vocabulary: 1,
    headword: 1,
    meaning: 2,
    examples: 3,
    'original language': 4,
    pronunciation: 5,
    utilization: 6,
    'utilization shorthand': 7,
    idiom: 8,
    proverb: 9,
    'reference information': 10,
};

type SearchTargetType =
    | 'vocabulary'
    | 'headword'
    | 'meaning'
    | 'examples'
    | 'original language'
    | 'pronunciation'
    | 'utilization'
    | 'utilization shorthand'
    | 'idiom'
    | 'proverb'
    | 'reference information';

function mapSearchTargetType(input: SearchTargetType): number {
    return mapKey[input];
}

export { SearchTargetType, mapSearchTargetType };
