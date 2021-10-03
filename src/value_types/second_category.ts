type SecondCategory = 'all' | 'native' | 'chinese' | 'loanword' | 'hybrid';

function mapSecondCategory(input: SecondCategory | SecondCategory[]): string {
    if (typeof input === 'string') {
        return input;
    }
    return input.join(',');
}

export { SecondCategory, mapSecondCategory };
