const mapKey = {
    word: 'word',
    idiom: 'ip',
    proverb: 'ip',
    definition: 'dfn',
    example: 'exam',
};

type SearchTarget = 'word' | 'idiom' | 'proverb' | 'definition' | 'example';

function mapSearchTarget(input: SearchTarget): string {
    return mapKey[input];
}

export { SearchTarget, mapSearchTarget };
