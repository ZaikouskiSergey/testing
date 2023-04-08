import {student, StudentType} from "../02/02";
import {CityType, GoverType, HouseType} from "../02/02_02";
import {findAllByDisplayValue} from "@testing-library/react";

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

export const addMoneyToBudget = (gover: GoverType, money: number) => {
    return gover.budget += money
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true;
}

export function toFireStaff(staff: GoverType, quantity: number) {
    staff.staffCount -= quantity
}

export const toHireStaff = (quantityStaff: GoverType, quantityHire: number) => {
    quantityStaff.staffCount+=quantityHire
}

export function createMessage(city: CityType){
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} men!`

}
