const mapKey = {
    all: 0,
    'human> all': 1,
    'human> human type': 2,
    'human> body part': 3,
    'human> physical state': 4,
    'human> physiological phenomenon': 5,
    'human> sense': 6,
    'human> emotion': 7,
    'human> personality': 8,
    'human> attitude': 9,
    'human> appearance': 10,
    'human> ability': 11,
    'human> body change': 12,
    'human> physical behavior': 13,
    'human> action on the body': 14,
    'human> cognitive action': 15,
    'human> sound': 16,
    'human> internal composition of the body': 17,
    'life> all': 18,
    'life> state of life': 19,
    'life> life actions': 20,
    'life> daily activities': 21,
    'life> kinship': 22,
    'life> family events': 23,
    'life> leisure tools': 24,
    'life> leisure facilities': 25,
    'life> leisure activity': 26,
    'life> symptoms': 27,
    'life> treatment behavior': 28,
    'life> treatment facility': 29,
    'life> medicines': 30,
    'dietary life> all': 31,
    'dietary life> food': 32,
    'dietary life> vegetables': 33,
    'dietary life> grain': 34,
    'dietary life> fruit': 35,
    'dietary life> beverage': 36,
    'dietary life> ingredients': 37,
    'dietary life> cooking utensils': 38,
    'dietary life> places related to dietary life': 39,
    'dietary life> taste': 40,
    'dietary life> meal and cooking behavior': 41,
    'clothing> all': 42,
    'clothing> clothing type': 43,
    'clothing> cloth': 44,
    'clothing> clothing part of': 45,
    'clothing> hats, shoes, accessories': 46,
    'clothing> clothing life-related places': 47,
    'clothing life> wearing state of clothing': 48,
    'clothing life> wearing clothing': 49,
    'clothing life> beauty activity': 50,
    'home life> all': 51,
    'home life> building type': 52,
    'home life> housing type': 53,
    'home life> residential area': 54,
    'home life> household goods': 55,
    'home life> housing composition': 56,
    'home life> housing condition': 57,
    'home life> housing behavior': 58,
    'home life> housework': 59,
    'social life> all': 60,
    'social life> human relations': 61,
    'social life> communication means': 62,
    'social life> transportation': 63,
    'social life> media': 65,
    'social life> work': 66,
    'social life> position': 67,
    'social life> occupation': 68,
    'social life> social event': 69,
    'social life> social life status': 70,
    'social life> social activity': 71,
    'social life> traffic use behavior': 72,
    'social life> work life': 73,
    'social life> language behavior': 74,
    'social life> communication action': 75,
    'social life> speech': 76,
    'economic life> all': 77,
    'economic life> economic action subject': 78,
    'economic life> economic action place': 79,
    'economic life> economic means': 80,
    'economic life> economic product': 81,
    'economic life> economic status': 82,
    'economic life> economic activity': 83,
    'education> all': 84,
    'education> teaching and learning subject': 85,
    'education> majors': 86,
    'education> educational institutions': 87,
    'education> school facilities': 88,
    'education> learning-related objects': 89,
    'education> academic terms': 90,
    'education> teaching and learning behavior': 91,
    'education> academic behavior': 92,
    'religion> all': 93,
    'religion> type of religion': 94,
    'religion> place of religious activity': 95,
    'religion> religious person': 96,
    'religion> religious language': 97,
    'religion> object of faith': 98,
    'religion> religious activity tools': 99,
    'religion> religious action': 100,
    'culture> all': 101,
    'culture> cultural activity subject': 102,
    'culture> music': 103,
    'culture> art': 104,
    'culture> literature': 105,
    'culture> arts': 106,
    'culture> popular culture': 107,
    'culture> traditional culture': 108,
    'culture> cultural living place': 109,
    'culture> cultural activities': 110,
    'politics and administration> all': 111,
    'politics and administration> public institutions': 112,
    'politics and administration> judicial and public security entities': 113,
    'politics and administration> weapons': 114,
    'politics and administration> politics and public security': 115,
    'politics and administration> politics and administrative actions': 116,
    'politics and administration> judicial and public security acts': 117,
    'politics and administration> political and administrative subjects': 118,
    'nature> all': 119,
    'nature> topography': 120,
    'nature> surface objects': 121,
    'nature> celestial body': 122,
    'nature> resources': 123,
    'nature> disaster': 124,
    'nature> meteorology and climate': 125,
    'animals and plants> all': 126,
    'animals and plants> animals': 127,
    'animals and plants> insects': 128,
    'animals and plants> plants': 129,
    'animals and plants> animal parts': 130,
    'animals and plants> plant parts': 131,
    'animals and plants> animals and plants behavior': 132,
    'animals and plants> animal sounds': 133,
    'concept> whole': 134,
    'concept> shape': 135,
    'concept> property': 136,
    'concept> speed': 137,
    'concept> brightness': 138,
    'concept> temperature': 139,
    'concept> color': 140,
    'concept> number': 141,
    'concept> count': 142,
    'concept> quantity': 143,
    'concept> degree': 144,
    'concept> order': 145,
    'concept> frequency': 146,
    'concept> time': 147,
    'concept> position and direction': 148,
    'concept> region': 149,
    'concept> instruction': 150,
    'concept> connection': 151,
    'concept> question': 152,
    'concept> person': 153,
    area: 149,
};

type MeaningCategory =
    | 'all'
    | 'human> all'
    | 'human> human type'
    | 'human> body part'
    | 'human> physical state'
    | 'human> physiological phenomenon'
    | 'human> sense'
    | 'human> emotion'
    | 'human> personality'
    | 'human> attitude'
    | 'human> appearance'
    | 'human> ability'
    | 'human> body change'
    | 'human> physical behavior'
    | 'human> action on the body'
    | 'human> cognitive action'
    | 'human> sound'
    | 'human> internal composition of the body'
    | 'life> all'
    | 'life> state of life'
    | 'life> life actions'
    | 'life> daily activities'
    | 'life> kinship'
    | 'life> family events'
    | 'life> leisure tools'
    | 'life> leisure facilities'
    | 'life> leisure activity'
    | 'life> symptoms'
    | 'life> treatment behavior'
    | 'life> treatment facility'
    | 'life> medicines'
    | 'dietary life> all'
    | 'dietary life> food'
    | 'dietary life> vegetables'
    | 'dietary life> grain'
    | 'dietary life> fruit'
    | 'dietary life> beverage'
    | 'dietary life> ingredients'
    | 'dietary life> cooking utensils'
    | 'dietary life> places related to dietary life'
    | 'dietary life> taste'
    | 'dietary life> meal and cooking behavior'
    | 'clothing> all'
    | 'clothing> clothing type'
    | 'clothing> cloth'
    | 'clothing> clothing part of'
    | 'clothing> hats, shoes, accessories'
    | 'clothing> clothing life-related places'
    | 'clothing life> wearing state of clothing'
    | 'clothing life> wearing clothing'
    | 'clothing life> beauty activity'
    | 'home life> all'
    | 'home life> building type'
    | 'home life> housing type'
    | 'home life> residential area'
    | 'home life> household goods'
    | 'home life> housing composition'
    | 'home life> housing condition'
    | 'home life> housing behavior'
    | 'home life> housework'
    | 'social life> all'
    | 'social life> human relations'
    | 'social life> communication means'
    | 'social life> transportation'
    | 'social life> media'
    | 'social life> work'
    | 'social life> position'
    | 'social life> occupation'
    | 'social life> social event'
    | 'social life> social life status'
    | 'social life> social activity'
    | 'social life> traffic use behavior'
    | 'social life> work life'
    | 'social life> language behavior'
    | 'social life> communication action'
    | 'social life> speech'
    | 'economic life> all'
    | 'economic life> economic action subject'
    | 'economic life> economic action place'
    | 'economic life> economic means'
    | 'economic life> economic product'
    | 'economic life> economic status'
    | 'economic life> economic activity'
    | 'education> all'
    | 'education> teaching and learning subject'
    | 'education> majors'
    | 'education> educational institutions'
    | 'education> school facilities'
    | 'education> learning-related objects'
    | 'education> academic terms'
    | 'education> teaching and learning behavior'
    | 'education> academic behavior'
    | 'religion> all'
    | 'religion> type of religion'
    | 'religion> place of religious activity'
    | 'religion> religious person'
    | 'religion> religious language'
    | 'religion> object of faith'
    | 'religion> religious activity tools'
    | 'religion> religious action'
    | 'culture> all'
    | 'culture> cultural activity subject'
    | 'culture> music'
    | 'culture> art'
    | 'culture> literature'
    | 'culture> arts'
    | 'culture> popular culture'
    | 'culture> traditional culture'
    | 'culture> cultural living place'
    | 'culture> cultural activities'
    | 'politics and administration> all'
    | 'politics and administration> public institutions'
    | 'politics and administration> judicial and public security entities'
    | 'politics and administration> weapons'
    | 'politics and administration> politics and public security'
    | 'politics and administration> politics and administrative actions'
    | 'politics and administration> judicial and public security acts'
    | 'politics and administration> political and administrative subjects'
    | 'nature> all'
    | 'nature> topography'
    | 'nature> surface objects'
    | 'nature> celestial body'
    | 'nature> resources'
    | 'nature> disaster'
    | 'nature> meteorology and climate'
    | 'animals and plants> all'
    | 'animals and plants> animals'
    | 'animals and plants> insects'
    | 'animals and plants> plants'
    | 'animals and plants> animal parts'
    | 'animals and plants> plant parts'
    | 'animals and plants> animals and plants behavior'
    | 'animals and plants> animal sounds'
    | 'concept> whole'
    | 'concept> shape'
    | 'concept> property'
    | 'concept> speed'
    | 'concept> brightness'
    | 'concept> temperature'
    | 'concept> color'
    | 'concept> number'
    | 'concept> count'
    | 'concept> quantity'
    | 'concept> degree'
    | 'concept> order'
    | 'concept> frequency'
    | 'concept> time'
    | 'concept> position and direction'
    | 'concept> region'
    | 'concept> instruction'
    | 'concept> connection'
    | 'concept> question'
    | 'concept> person'
    | 'area';

function mapMeaningCategory(input: MeaningCategory[]): number | string {
    if (typeof input === 'string') {
        return mapKey[input];
    }
    return input.map((transLang) => {
        return mapKey[transLang];
    }).join(',');
}

export { MeaningCategory, mapMeaningCategory };
