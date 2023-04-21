
const usersObj = {
    "0": "Kolya",
    "1": "Petya",
    "2": "Vasya",
    "3": "Misha",
    "4": "Vanya"
}

type UsersType = {
    [key: string]: { id: number, name: string }

}
const users: UsersType = {
    "101": {id: 101, name: "Kolya"},
    "1212": {id: 1212, name: "Petya"},
    "2683": {id: 2683, name: "Vasya"},
    "50705": {id: 50705, name: "Misha"},
    "88686": {id: 88686, name: "Vanya"}
}
/*// users["101"] найти елемент сложность - О(1)
let user = {id: 100500, name: "Igor"}
// users[user.id] = user // добавление пользователя
// delete users.id удаление
//users[user.id].name='Vitya' // update of data*/


export const usersArray = [
    {id: 101, name: "Kolya"},
    {id: 1212, name: "Petya"},
    {id: 2683, name: "Vasya"},
    {id: 50705, name: "Misha"},
    {id: 88686, name: "Vanya"}
]

// usersArray.find(el=> el.id===101) поиск в массиве, O(n)
// let newCopy=[...usersArray, user] -добавление
// usersArray.filter(el => el.id !== user.id) - удаление