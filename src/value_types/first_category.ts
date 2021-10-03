type FirstCategory = 'all' | 'word' | 'phrase' | 'expression';

function mapFirstCategory(input: FirstCategory | FirstCategory[]): string {
    if (typeof input === 'string') {
        return input;
    }
    return input.join(',');
}

export { FirstCategory, mapFirstCategory };
