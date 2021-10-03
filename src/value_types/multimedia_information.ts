const mapKey = {
    all: 0,
    photo: 1,
    illustration: 2,
    video: 3,
    animation: 4,
    sound: 5,
    none: 6,
};

type MultimediaInformation = 'all' | 'photo' | 'illustration' | 'video' | 'animation' | 'sound' | 'none';

function mapMultimediaInformation(input: MultimediaInformation | MultimediaInformation[]): number | string {
    if (typeof input === 'string') {
        return mapKey[input];
    }
    return input.map((transLang) => {
        return mapKey[transLang];
    }).join(',');
}

export { MultimediaInformation, mapMultimediaInformation };
