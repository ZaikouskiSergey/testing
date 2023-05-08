export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        street: string
    }
}

export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: string[]
}
type CompanyType = { id: number, title: string };
export type WithCompaniesType = {
    companies: Array<CompanyType>
}


export function hairdresser(h: UserType, power: number) {
    const copy = {
        ...h,
        hair: h.hair / power
    }
    return copy
}

export const moveUser = (u: UserWithLaptopType, city: string) => {
    return {
        ...u,
        address: {...u.address, city},
    }
}

export const upgradeUserLaptop = (u: UserWithLaptopType, model: string) => {
    return {
        ...u,
        laptop: {...u.laptop, title: model}
    }
}

export const addNewBooksToUser =
    (u: UserWithLaptopType & UserWithBooksType, newBooks: string[]) => {
        return {
            ...u,
            books: [...u.books, ...newBooks]
        }
    }

export const updateBooksToUser =
    (u: UserWithLaptopType & UserWithBooksType, book: string, changeBook: string) => ({
        ...u,
        books: u.books.map(b => b === book ? changeBook : b)
    })

export const removeBooksToUser =
    (u: UserWithLaptopType & UserWithBooksType, removeBook: string) => ({
        ...u, books: u.books.filter(b => b !== removeBook)
    })


export const updateCompanyTitle =
    (u: WithCompaniesType, id: number, newTitle: string) => ({
        ...u,
        companies: u.companies.map(c => c.id === id
            ? {...c, title: newTitle}
            : c)
    })

export const updateCompanyTitle2 = (companies: {[key:string]: Array<CompanyType>},
                                    userName: string,
                                    companyId: number,
                                    newTitle: string) => {
    let companyCopy = {...companies}

    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId
        ? {...c, title: newTitle}
        : c)
    return companyCopy

}