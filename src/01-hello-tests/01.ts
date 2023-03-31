export function sum(a: number, b: number) {
    return a + b
}

export function mult(a: number, b: number) {
    return a * b;
}

export function splitIntoWords(sentense: string) {

    let array = sentense.toLowerCase().split(' ');

    return array.filter(w=> w!=='' && w!=='-')
        .map(value => value.replace('.', ''))
}
