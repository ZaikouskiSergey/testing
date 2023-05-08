import {hairdresser, moveUser, upgradeUserLaptop, UserType, UserWithLaptopType} from "./10_01";


test("reference type test", () => {
    let user: UserType = {
        name: "sergey",
        hair: 50,
        address: {
            city: "Minsk",
            street: "Shugaeva"
        }
    }
    hairdresser(user, 2)
    expect(user.hair).toBe(50)
})

test("change address", () => {
    let user: UserWithLaptopType = {
        name: "sergey",
        hair: 50,
        address: {
            city: "Minsk",
            street: "Shugaeva"
        },
        laptop: {
            title: "hp"
        }
    }
    const movedUser = moveUser(user, "Kiev")
    expect(movedUser.address.city).toBe("Kiev")
    expect(user).not.toBe(movedUser)
    expect(user.address.city).not.toBe(movedUser.address.city)
    expect(user.laptop.title).toBe(movedUser.laptop.title)
})

test("update laptop to macbook", () => {
    let user: UserWithLaptopType = {
        name: "sergey",
        hair: 50,
        address: {
            city: "Minsk",
            street: "Shugaeva"
        },
        laptop: {
            title: "hp"
        }
    }
    const userCopy = upgradeUserLaptop(user, "Macbook")
    expect(userCopy.laptop.title).toBe("Macbook")
    expect(userCopy.laptop).not.toBe(user.laptop)
    expect(userCopy.address).toBe(user.address)

})



