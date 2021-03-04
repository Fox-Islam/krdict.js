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

function mapMultimediaInformation(input: MultimediaInformation[]): number[] {
    return input.map((transLang) => {
        return mapKey[transLang];
    });
}

export { MultimediaInformation, mapMultimediaInformation };
