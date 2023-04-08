import {createGreetingMessage, ManType} from "./05_01";

let people: ManType[] = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexandr Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 33},
]

beforeEach(()=>{
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexandr Petrov", age: 24},
        {name: "Dmitry Sidorov", age: 33},
    ]
})
test("Should get array of greeting messages", ()=>{
    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello Andrew! Welcome');
    expect(messages[1]).toBe('Hello Alexandr! Welcome');
    expect(messages[2]).toBe('Hello Dmitry! Welcome');
})