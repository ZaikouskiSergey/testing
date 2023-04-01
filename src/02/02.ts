export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: {
        streetTitle: string
        city: {
            title: string
            countryTitle: string
        }
    }
    technologies:Array<TechType>
}
export type TechType={
    id: number
    title:string
}

export const student: StudentType= {
    id: 1,
    name: "Sergey",
    age: 36,
    isActive: false,
    address: {
        streetTitle: "Shugaeva, 17B",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        },
    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[2].title)


