const mapKey = {
    all: 0,
    greetings: 1,
    'introducing (self-introduction)': 2,
    'introducing (family)': 3,
    'exchanging personal information': 4,
    'expressing location': 5,
    directions: 6,
    'using transportation': 7,
    'buying goods': 8,
    'ordering food': 9,
    'explaining dishes': 10,
    'expressing time': 11,
    'expressing dates': 12,
    'expressing days of the week': 13,
    'weather and season': 14,
    'daily life': 15,
    'school life': 16,
    'korean life': 17,
    promise: 18,
    call: 19,
    'thank you': 20,
    apology: 21,
    travel: 22,
    'weekends & vacations': 23,
    hobbies: 24,
    'family events': 25,
    health: 26,
    'using hospitals': 27,
    'using pharmacies': 28,
    'using public institutions (library)': 29,
    'using public institutions (post office)': 30,
    'using public institutions (immigration office)': 31,
    'invitations and visits': 32,
    'finding a house': 33,
    housework: 34,
    'expressing emotions and feelings': 35,
    'expressing personality': 36,
    'expressing dress': 37,
    'expressing appearance': 38,
    'watching movies': 39,
    'geographic information': 42,
    'explaining food': 44,
    'explaining cooking': 45,
    'life in korea': 48,
    'career and career': 49,
    'work life': 50,
    'weekends and holidays': 52,
    'family events(holidays)': 55,
    'using public institutions': 57,
    'invitations and visiting': 58,
    'expressing emotions and moods': 61,
    'performances and appreciation': 65,
    'mass media': 66,
    'computers and the internet': 67,
    'describe disasters': 68,
    'environmental issues': 69,
    'compare cultures': 70,
    'human relations': 71,
    'korean literature': 72,
    'solve problems (lost and breakdown)': 73,
    'tell mistakes': 74,
    'dating and marriage': 75,
    language: 76,
    'economy and business': 78,
    'food culture': 79,
    climate: 80,
    education: 81,
    leisure: 84,
    'health and medical': 85,
    residential: 86,
    psychology: 87,
    appearance: 88,
    'popular culture': 89,
    'computer and internet': 90,
    'social issues': 91,
    'social institutions': 93,
    'cultural differences': 94,
    art: 96,
    architecture: 97,
    'science and technology': 98,
    law: 99,
    sports: 100,
    press: 101,
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
    | 'expressing location'
    | 'directions'
    | 'using transportation'
    | 'buying goods'
    | 'ordering food'
    | 'explaining dishes'
    | 'expressing time'
    | 'expressing dates'
    | 'expressing days of the week'
    | 'weather and season'
    | 'daily life'
    | 'school life'
    | 'korean life'
    | 'promise'
    | 'call'
    | 'thank you'
    | 'apology'
    | 'travel'
    | 'weekends & vacations'
    | 'hobbies'
    | 'family events'
    | 'health'
    | 'using hospitals'
    | 'using pharmacies'
    | 'using public institutions (library)'
    | 'using public institutions (post office)'
    | 'using public institutions (immigration office)'
    | 'invitations and visits'
    | 'finding a house'
    | 'housework'
    | 'expressing emotions and feelings'
    | 'expressing personality'
    | 'expressing dress'
    | 'expressing appearance'
    | 'watching movies'
    | 'geographic information'
    | 'explaining food'
    | 'explaining cooking'
    | 'life in korea'
    | 'career and career'
    | 'work life'
    | 'weekends and holidays'
    | 'family events(holidays)'
    | 'using public institutions'
    | 'invitations and visiting'
    | 'expressing emotions and moods'
    | 'performances and appreciation'
    | 'mass media'
    | 'computers and the internet'
    | 'describe disasters'
    | 'environmental issues'
    | 'compare cultures'
    | 'human relations'
    | 'korean literature'
    | 'solve problems (lost and breakdown)'
    | 'tell mistakes'
    | 'dating and marriage'
    | 'language'
    | 'economy and business'
    | 'food culture'
    | 'climate'
    | 'education'
    | 'leisure'
    | 'health and medical'
    | 'residential'
    | 'psychology'
    | 'appearance'
    | 'popular culture'
    | 'computer and internet'
    | 'social issues'
    | 'social institutions'
    | 'cultural differences'
    | 'art'
    | 'architecture'
    | 'science and technology'
    | 'law'
    | 'sports'
    | 'press'
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
