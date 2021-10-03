const mapKey = {
    all: 'all',
    level1: 'level1',
    level2: 'level2',
    level3: 'level3',
    beginner: 'level1',
    intermediate: 'level2',
    advanced: 'level3',
};

type VocabularyGrade = 'all' | 'level1' | 'level2' | 'level3' | 'beginner' | 'intermediate' | 'advanced';

function mapVocabularyGrade(input: VocabularyGrade | VocabularyGrade[]): string {
    if (typeof input === 'string') {
        return mapKey[input];
    }
    return input.map((grade) => {
        return mapKey[grade];
    }).join(',');
}

export { VocabularyGrade, mapVocabularyGrade };
