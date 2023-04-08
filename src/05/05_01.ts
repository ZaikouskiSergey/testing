export type ManType = {
    name: string
    age: number
}
const people: ManType[] = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexandr Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 33},
]

const dimychTransformator = (man: ManType) => {
    return {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(" ")[1]
    }
}
const devs1 = [
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Andrew",
        lastName: "Ivanov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Alexandr",
        lastName: "Petrov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Dmitry",
        lastName: "Sidorov"
    },

]
const devs2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]

const devs3 = people.map(m => {
    return {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: m.name.split(' ')[0],
        lastName: m.name.split(" ")[1]
    }
})

const messages = people.map(man => `Hello ${man.name.split(' ')[0]} ! Welcome`)

export const createGreetingMessage =(people:ManType[]) =>{
return  people.map(man => `Hello ${man.name.split(' ')[0]}! Welcome`)
}