export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        street: string
    }
}

export type LaptopType = {
    title:string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export function hairdresser(h: UserType, power: number) {
    const copy={
        ...h,
        hair : h.hair/ power
    }
    return copy
}

export const moveUser = (u: UserWithLaptopType, city: string)=> {
     return {
        ...u,
         address: {...u.address, city},
    }
}

export const upgradeUserLaptop =(u:UserWithLaptopType, model: string)=>{
    return{
        ...u,
        laptop: {...u.laptop, title: model}
    }
}