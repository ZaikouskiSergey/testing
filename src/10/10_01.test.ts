import {
    addNewBooksToUser,
    hairdresser,
    moveUser, removeBooksToUser,
    updateBooksToUser, updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";


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
test("add new book to user", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "sergey",
        hair: 50,
        address: {
            city: "Minsk",
            street: "Shugaeva"
        },
        laptop: {
            title: "hp"
        },
        books: ['css', 'html', 'react', 'js']
    }
    const userCopy = addNewBooksToUser(user, ["ts", "rest api"])

    expect(userCopy.laptop.title).toBe("hp")
    expect(userCopy.books).not.toBe(user.books)
    expect(userCopy.address).toBe(user.address)
    expect(userCopy.books[4]).toBe("ts")

})
test("update js to ts to user", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "sergey",
        hair: 50,
        address: {
            city: "Minsk",
            street: "Shugaeva"
        },
        laptop: {
            title: "hp"
        },
        books: ['css', 'html', 'react', 'js']
    }
    const userCopy = updateBooksToUser(user, 'js', "ts")

    expect(userCopy.laptop.title).toBe("hp")
    expect(userCopy.books).not.toBe(user.books)
    expect(userCopy.address).toBe(user.address)
    expect(userCopy.books[3]).toBe("ts")

})
test("remove js book", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "sergey",
        hair: 50,
        address: {
            city: "Minsk",
            street: "Shugaeva"
        },
        laptop: {
            title: "hp"
        },
        books: ['css', 'html', 'react', 'js']
    }
    const userCopy = removeBooksToUser(user, 'js')

    expect(userCopy.laptop.title).toBe("hp")
    expect(userCopy.books).not.toBe(user.books)
    expect(userCopy.address).toBe(user.address)
    expect(userCopy.books.length).toBe(3)

})
test("add company", () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: "sergey",
        hair: 50,
        address: {
            city: "Minsk",
            street: "Shugaeva"
        },
        laptop: {
            title: "hp"
        },
        companies: [{id: 1, title: 'епам'}, {id: 2, title: "it-incubator"}]
    }
    const userCopy = updateCompanyTitle(user, 1, 'EPAM') as UserWithLaptopType & WithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('EPAM')
})
test("update company", () => {

    let companies = {
        "Sergey": [
            {id: 1, title: 'епам'}, {id: 2, title: "it-incubator"}
        ],
        "Artem" : [{id: 2, title: "it-incubator"}]
    }
    const copy = updateCompanyTitle2(companies, "Sergey", 1, "EPAM")

    expect(copy['Sergey']).not.toBe(companies['Sergey'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy["Sergey"][0].title).toBe("EPAM")





})

