// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    //console.log(nums)
    //console.log(arguments)

    return nums.reduce((acc, el) => acc + el, 0)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    let sides = [a, b, c]
    let sortSides = sides.sort((x, y) => x - y)
    if (sortSides[2] >= sortSides[0] + sortSides[1]) {
        return "00"
    }
    if (sortSides[2] === sortSides[0]) {
        return "10"
    }
    if (sortSides[0] === sortSides[1] || sortSides[2] === sortSides[1]) {
        return "01"
    } else {
        return "11"
    }

}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    let sum = 0;
    while (number > 0) {
        const rest = number % 10
        sum += rest
        number = (number-rest )/ 10
    }
    return sum
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let sumEven = 0
    let sumOdd = 0

    arr.forEach((el, index) => {
        index % 2 === 0 ? sumEven += el : sumOdd += el
    })
    return sumEven > sumOdd
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {

    let result = array.filter(el => el > 0 && Number.isInteger(el)).map(el => el ** 2)

    return result
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    if (N === 0) {
        return 0
    }
    let result = (1 + N) / 2 * (N);

    return result

  /*  if (N === 0) {
        return 0
    }
    return N + sumFirstNumbers(N-1)*/
}



// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let result: Array<number> = [];
    for (let i = 0; i < banknotes.length; i++) {
        if (amountOfMoney / banknotes[i] > 0) {
            let count = Math.floor(amountOfMoney / banknotes[i])
            result = result.concat(Array(count).fill(banknotes[i]))
            amountOfMoney = amountOfMoney - (banknotes[i] * count)
        }
    }
    return result
}