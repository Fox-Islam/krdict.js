const mapKey = {
    alphabetical: 'dict',
    dict: 'dict',
    popular: 'popular',
};
type SortMethod = 'alphabetical' | 'dict' | 'popular';

function mapSortMethod(input: SortMethod): string {
    return mapKey[input];
}

export { SortMethod, mapSortMethod };
