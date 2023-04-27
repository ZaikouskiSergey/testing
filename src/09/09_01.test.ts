type UserType = {
    name: string
    age: number
    address: {
        title: string
    }
}

function increaseAge(u: UserType) {
    u.age++
}
test("reference type test", () => {
    let user1: UserType= {
        name: "sergey",
        age: 37,
        address: {
            title: "Minsk"
        }
    }

    //let addr = user.address

    let user2: UserType = {
        name: "katya",
        age:20,
        address: user1.address
    }

    user2.address.title = "Vilnius"

    expect(user1.address.title).toBe("Vilnius")


})
test("array reference test", () => {
    let users = [
        {
            name: "sergey",
            age: 37
        },
        {
            name: "petya",
            age: 42
        }]

    let admins = users
    admins.push({name: "Valya", age: 12})
    expect(users[2].name).toBe("Valya")
    expect(users[2]).toEqual({name: "Valya", age: 12})
})

test("value type test", ()=>{
    let usersCount = 100
    let adminsCount = usersCount

    adminsCount= adminsCount+1

})