import {GoverType, HouseType} from "../02/02_02";

export const getStreetsTitlesGovermentsBuildings = (build: Array<GoverType>) =>{
    return build.map(b => b.address.street.title)
}

export function getStreetsTitlesOfHouses(houses: Array<HouseType>){
    return houses.map(h => h.address.street.title)
}

export const createMessages = (houses: Array<HouseType>)=>{
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}