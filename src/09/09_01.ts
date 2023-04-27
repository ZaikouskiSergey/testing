type UserType = {
    name: string
    age: number
}
let user = {
    name: "sergey",
    age: 37
}

export function increaseAge(user:UserType) {
    user.age++
}