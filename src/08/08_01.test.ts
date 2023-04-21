import {

} from "./08_01";
type UsersType = {
    [key: string]: { id: number, name: string }
}
let users: UsersType

beforeEach(() => {
    users = {
        "101": {id: 101, name: "Kolya"},
        "1212": {id: 1212, name: "Petya"},
        "2683": {id: 2683, name: "Vasya"},
        "50705": {id: 50705, name: "Misha"},
        "88686": {id: 88686, name: "Vanya"}
    }
})
test("should update corresponding user ", () => {
    users["88686"].name="Ivan"
    expect(users["88686"].name).toBe("Ivan")
    expect(users["88686"]).toEqual({id: 88686, name: "Ivan"})
})

test("should delete corresponding user", ()=>{
    delete users["88686"]

    expect(users["88686"]).toBeUndefined()
})