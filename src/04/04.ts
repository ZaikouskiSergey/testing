import {CityType, GoverType, HouseType} from "../02/02_02";

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export const getHousesTheStreet = (house: Array<HouseType>, street: string)=>{
return house.filter(h => h.address.street.title === street)
}

export function getBuildingsWithStaffCountGreaterThen(build: Array<GoverType>, st: number){
    return build.filter(b => b.staffCount > st)
}