import {student, StudentType} from "../02/02";

export const sum = (a: number, b: number) => {
    return a + b
}
const res = sum(sum(2, 4), sum(4, 5))

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(st: StudentType) {
    st.isActive = true;
}

export function doesStudentLiveIn(st: StudentType, city: string) {
    return st.address.city.title === city
}