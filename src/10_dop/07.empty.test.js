import {fixTheMeerkat, updateLight} from "./07.empty";

test ('next Light should be show', ()=> {

    const startState = {
        green: "green",
        yellow: "yellow",
        red: "red"
    }

    expect(updateLight(startState.green)).toBe('yellow')
    expect(updateLight(startState.red)).toBe('green')
    expect(updateLight(startState.yellow)).toBe('red')
})

test('should be change parts', ()=>{
    const startState1 = ["tail", "body", "head"]
    const startState2 = ["tails", "body", "heads"]
    const startState3 = ["bottom", "middle", "top"]



    let result1 = fixTheMeerkat (startState1)
    let result2 = fixTheMeerkat (startState2)
    let result3= fixTheMeerkat (startState3)

    expect(startState1.length).toBe(result1.length)
    expect(startState1[0]).toBe(result1[result1.length-1])
    expect(startState2.length).toBe(result2.length)
    expect(startState2[0]).toBe(result2[result2.length-1])
    expect(startState3.length).toBe(result3.length)
    expect(startState3[0]).toBe(result3[result3.length-1])
})