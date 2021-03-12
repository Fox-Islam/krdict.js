const mapKey = {
    all: 0,
    greetings: 1,
    'introducing (self-introduction)': 2,
    'introducing (family)': 3,
    'exchanging personal information': 4,
    'describing location': 5,
    directions: 6,
    'using transportation': 7,
    'purchasing goods': 8,
    'ordering food': 9,
    'describing cooking': 10,
    'expressing time': 11,
    'expressing dates': 12,
    'expressing days of the week': 13,
    'weather and season': 14,
    'daily life': 15,
    'school life': 16,
    'life in korea': 17,
    'making a promise': 18,
    'making a call': 19,
    'expressing gratitude': 20,
    apologizing: 21,
    travel: 22,
    'weekends and holidays': 23,
    hobbies: 24,
    'family events': 25,
    health: 26,
    'using hospitals': 27,
    'using pharmacies': 28,
    'using public institutions (library)': 29,
    'using public institutions (post office)': 30,
    'using public institutions (immigration office)': 31,
    'inviting and visiting': 32,
    'finding a house': 33,
    housework: 34,
    'expressing emotions and feelings': 35,
    'describing personality': 36,
    'describing clothes': 37,
    'describing physical features': 38,
    'watching movies': 39,
    'exchanging personal information (intermediate)': 40,
    'using transportation (intermediate)': 41,
    'geographic information': 42,
    'purchasing goods (intermediate)': 43,
    'describing food': 44,
    'describing cooking (intermediate)': 45,
    'weather and season (intermediate)': 46,
    'school life (intermediate)': 47,
    'life in korea (intermediate)': 48,
    'occupation and future path': 49,
    'life in the workplace': 50,
    'travel (intermediate)': 51,
    'weekends and holidays (intermediate)': 52,
    'hobbies (intermediate)': 53,
    'family events (intermediate)': 54,
    'family events (holidays)': 55,
    'health (intermediate)': 56,
    'using public institutions': 57,
    'inviting and visiting (intermediate)': 58,
    'finding a house (intermediate)': 59,
    'housework (intermediate)': 60,
    'expressing emotions and feelings (intermediate)': 61,
    'describing personality (intermediate)': 62,
    'describing clothes (intermediate)': 63,
    'describing physical features (intermediate)': 64,
    'performances and appreciation': 65,
    'mass media': 66,
    'computers and the internet': 67,
    'describing incidents and disasters': 68,
    'environmental issues': 69,
    'comparing cultures': 70,
    'human relationships': 71,
    'korean literature': 72,
    'solving problems (loss and malfunction)': 73,
    'talking about mistakes': 74,
    'dating and marriage': 75,
    language: 76,
    'geographic information (advanced)': 77,
    'economy and business': 78,
    'dietary culture': 79,
    climate: 80,
    education: 81,
    'occupation and future path (advanced)': 82,
    'life in the workplace (advanced)': 83,
    leisure: 84,
    'health and medical treatment': 85,
    'residential life': 86,
    psychology: 87,
    appearance: 88,
    'popular culture': 89,
    'computers and the internet (advanced)': 90,
    'social issues': 91,
    'environmental issues (advanced)': 92,
    'social system': 93,
    'cultural differences': 94,
    'human relationships (advanced)': 95,
    art: 96,
    architecture: 97,
    'science and technology': 98,
    law: 99,
    sports: 100,
    press: 101,
    'language (advanced)': 102,
    history: 103,
    politics: 104,
    religion: 105,
    'philosophy and ethics': 106,
};

type SubjectCategory =
    | 'all'
    | 'greetings'
    | 'introducing (self-introduction)'
    | 'introducing (family)'
    | 'exchanging personal information'
    | 'describing location'
    | 'directions'
    | 'using transportation'
    | 'purchasing goods'
    | 'ordering food'
    | 'describing cooking'
    | 'expressing time'
    | 'expressing dates'
    | 'expressing days of the week'
    | 'weather and season'
    | 'daily life'
    | 'school life'
    | 'life in korea'
    | 'making a promise'
    | 'making a call'
    | 'expressing gratitude'
    | 'apologizing'
    | 'travel'
    | 'weekends and holidays'
    | 'hobbies'
    | 'family events'
    | 'health'
    | 'using hospitals'
    | 'using pharmacies'
    | 'using public institutions (library)'
    | 'using public institutions (post office)'
    | 'using public institutions (immigration office)'
    | 'inviting and visiting'
    | 'finding a house'
    | 'housework'
    | 'expressing emotions and feelings'
    | 'describing personality'
    | 'describing clothes'
    | 'describing physical features'
    | 'watching movies'
    | 'exchanging personal information (intermediate)'
    | 'using transportation (intermediate)'
    | 'geographic information'
    | 'purchasing goods (intermediate)'
    | 'describing food'
    | 'describing cooking (intermediate)'
    | 'weather and season (intermediate)'
    | 'school life (intermediate)'
    | 'life in korea (intermediate)'
    | 'occupation and future path'
    | 'life in the workplace'
    | 'travel (intermediate)'
    | 'weekends and holidays (intermediate)'
    | 'hobbies (intermediate)'
    | 'family events (intermediate)'
    | 'family events (holidays)'
    | 'health (intermediate)'
    | 'using public institutions'
    | 'inviting and visiting (intermediate)'
    | 'finding a house (intermediate)'
    | 'housework (intermediate)'
    | 'expressing emotions and feelings (intermediate)'
    | 'describing personality (intermediate)'
    | 'describing clothes (intermediate)'
    | 'describing physical features (intermediate)'
    | 'performances and appreciation'
    | 'mass media'
    | 'computers and the internet'
    | 'describing incidents and disasters'
    | 'environmental issues'
    | 'comparing cultures'
    | 'human relationships'
    | 'korean literature'
    | 'solving problems (loss and malfunction)'
    | 'talking about mistakes'
    | 'dating and marriage'
    | 'language'
    | 'geographic information (advanced)'
    | 'economy and business'
    | 'dietary culture'
    | 'climate'
    | 'occupation and future path (advanced)'
    | 'life in the workplace (advanced)'
    | 'education'
    | 'leisure'
    | 'health and medical treatment'
    | 'residential life'
    | 'psychology'
    | 'appearance'
    | 'popular culture'
    | 'computers and the internet (advanced)'
    | 'social issues'
    | 'environmental issues (advanced)'
    | 'social system'
    | 'cultural differences'
    | 'human relationships (advanced)'
    | 'art'
    | 'architecture'
    | 'science and technology'
    | 'law'
    | 'sports'
    | 'press'
    | 'language (advanced)'
    | 'history'
    | 'politics'
    | 'religion'
    | 'philosophy and ethics';

function mapSubjectCategory(input: SubjectCategory[]): number[] {
    return input.map((transLang) => {
        return mapKey[transLang];
    });
}
export { SubjectCategory, mapSubjectCategory };
