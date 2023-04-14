type ManType = {
    name: string
    age: number
    lessons: LessonType[]
    address: AddrType
}

type LessonType = {
    title: number
    name?: string
}
type AddrType = {
    street: {
        title: string
    }
}

let props: ManType;
beforeEach(() => {
    props = {
        name: "Sergey",
        age: 36,
        lessons: [{title: 1}, {title: 2}, {title: 3, name: 'react'}],
        address: {
            street: {
                title: "shugaeva street"
            }
        }
    }
})
test("", () => {

    // const age = man.age
    // const lessons = man.lessons

    const {age, lessons} = props
  /*  const {age: a, lessons: l} = props // находит 'age' в 'props' и создает переменную 'a', которой присваивает это значение*/


    const {title} = props.address.street

    expect(age).toBe(36)
    expect(lessons.length).toBe(3)
    expect(title).toBe("shugaeva street")
})

test("", ()=>{
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    const[ls1, ls2,  ...restLessons]=props.lessons

    expect(l1.title).toBe(1);
    expect(ls1.title).toBe(1);
    expect(restLessons[0]).toStrictEqual({title: 3, name: 'react'})
})

