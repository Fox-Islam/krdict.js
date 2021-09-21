function arrayConverter(container: any, key: string) {
    if (Array.isArray(container[key])) {
        return;
    }

    container[key] = [container[key]];
}

function numberConverter(container: any, key: string) {
    container[key] = parseInt(container[key]);
}

function stringConverter(container: any, key: string) {
    if (!Array.isArray(container[key])) {
        return;
    }

    container[key] = container[key][0];
}

export { arrayConverter, numberConverter, stringConverter };
