test('man age should be changed', () => {
    let man = {
        name: 'John',
        age: 28
    };

    let manFullCopy = {...man}
    manFullCopy.name = "Fill"

    expect(man.name).not.toBe(manFullCopy.name)
})
test('number should be changed', () => {
    let numbers = [1, 2, 3];
    let copyNumber = [...numbers]
    copyNumber[0] = 5
    copyNumber.push(6)
    expect(numbers[0]).not.toBe(copyNumber[0])
    expect(copyNumber.length).toBe(4)
})

test('age mother should be changed', () => {
    let man1 = {
        name: 'John',
        age: 28,
        mother: {
            name: 'Kate',
            age: 50
        }
    };
    let man1FullCopy = {...man1, mother: {...man1.mother, age: 51}}

    expect(man1FullCopy).not.toBe(man1)
    expect(man1.mother.age).not.toBe(man1FullCopy.mother.age)
    expect(man1.mother.name).toBe(man1FullCopy.mother.name)
    expect(man1FullCopy.mother.age).toBe(51)
})

test('04 add name friends should be changed', () => {
    let man2 = {
        name: 'John',
        age: 28,
        friends: ["Peter", "Steven", "William"]
    };

    let man2FullCopy = {...man2, friends: [...man2.friends, 'Bob']}

    expect(man2).not.toBe(man2FullCopy)
    expect(man2FullCopy.friends.length).toBe(4)
    expect(man2.name).toBe(man2FullCopy.name)
    expect(man2FullCopy.friends[3]).toBe('Bob')
})

test('05 age Steven should be changed', () => {
    let people = [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ];
    let peopleFullCopy = people.map(p => p.name === "Steven"
        ? {...p, age: 33} : p)

    expect(people).not.toBe(peopleFullCopy)
    expect(people[0].name).toBe(peopleFullCopy[0].name)
    expect(peopleFullCopy[1].age).toBe(33)
    expect(peopleFullCopy[2].name).toBe(people[2].name)
})

test('06 age Steven should be changed', () => {
    let man3 = {
        name: 'John',
        age: 28,
        friends: [
            {name: "Peter", age: 30},
            {name: "Steven", age: 32},
            {name: "William", age: 28}
        ]
    };
    let man3FullCopy = {
        ...man3, friends: man3.friends.map(f => f.name === "Steven"
            ? {...f, age: 33} : f)
    }

    expect(man3).not.toBe(man3FullCopy)
    expect(man3.name).toBe(man3FullCopy.name)
    expect(man3FullCopy.friends[1].age).toBe(33)
    expect(man3.friends[2].name).toBe(man3FullCopy.friends[2].name)
})

test('07 mother\'s experience and age should be increased', () => {
    let man4 = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            }
        }
    };
    let man4WithInc = {...man4, mother: {...man4.mother, age: 51, work: {...man4.mother.work, experience: 16}}}

    expect(man4).not.toBe(man4WithInc)
    expect(man4.name).toBe(man4WithInc.name)
    expect(man4.mother.name).toBe(man4WithInc.mother.name)
    expect(man4.mother.age).not.toBe(man4WithInc.mother.age)
    expect(man4.mother.work.position).toBe(man4WithInc.mother.work.position)
    expect(man4.mother.work.experience).not.toBe(man4WithInc.mother.work.experience)
})

test('08 Kevin\'s age should be increased', () => {
    let man5 = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            },
            parents: [
                {name: "Kevin", age: 80},
                {name: "Jennifer", age: 78},
            ]
        }
    };
    let man5DadInc = {
        ...man5,
        mother: {
            ...man5.mother,
            parents: man5.mother.parents.map(p => p.name === "Kevin"
                ? {...p, age: 81} : p)
        }
    }

    expect(man5).not.toBe(man5DadInc)
    expect(man5.name).toBe(man5DadInc.name)
    expect(man5.mother.name).toBe(man5DadInc.mother.name)
    expect(man5.mother.work.position).toBe(man5DadInc.mother.work.position)
    expect(man5.mother.parents.length).toBe(2)
    expect(man5.mother.parents[0].name).toBe(man5DadInc.mother.parents[0].name)
    expect(man5.mother.parents[0].age).not.toBe(man5DadInc.mother.parents[0].age)
})

test('09 Jennifer\'s favoriteDish should be fish', () => {
    let man6 = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            },
            parents: [
                {
                    name: "Kevin",
                    age: 80,
                    favoriteDish: {
                        title: "borscht"
                    }
                },
                {
                    name: "Jennifer",
                    age: 78,
                    favoriteDish: {
                        title: "sushi"
                    }
                },
            ]
        }
    };

    let man6GrannyFD = {
        ...man6,
        mother: {
            ...man6.mother,
            parents: man6.mother.parents.map(p => p.name === "Jennifer"
                ? {...p, favoriteDish: {...p.favoriteDish, title: 'fish'}} : p)
        }
    }

    expect(man6.name).toBe(man6GrannyFD.name)
    expect(man6.mother.name).toBe(man6GrannyFD.mother.name)
    expect(man6.mother.work).toBe(man6GrannyFD.mother.work)
    expect(man6.mother.parents[1].name).toBe(man6GrannyFD.mother.parents[1].name)
    expect(man6.mother.parents[1].favoriteDish.title).not.toBe(man6GrannyFD.mother.parents[1].favoriteDish.title)
    expect(man6GrannyFD.mother.parents[1].favoriteDish.title).toBe('fish')

})

test('10 should be add meat into borscht', () => {
    let man7 = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            },
            parents: [
                {
                    name: "Kevin",
                    age: 80,
                    favoriteDish: {
                        title: "borscht",
                        ingredients: [
                            {title: "beet", amount: 3},
                            {title: "potatoes", amount: 5},
                            {title: "carrot", amount: 1},
                        ]
                    }
                },
                {
                    name: "Jennifer",
                    age: 78,
                    favoriteDish: {
                        title: "sushi",
                        ingredients: [
                            {title: "fish", amount: 1},
                            {title: "rise", amount: 0.5}
                        ]
                    }
                },
            ]
        }
    };

    let man7WithMeat = {
        ...man7,
        mother: {...man7.mother,
            parents: man7.mother.parents.map(p=> p.name==="Kevin"
            ? {...p, favoriteDish: {...p.favoriteDish, ingredients: [{title: "meat", amount: 1}, ...p.favoriteDish.ingredients]}}
                : p)}
    }

    expect(man7).not.toBe(man7WithMeat)
    expect(man7.name).toBe(man7WithMeat.name)
    expect(man7.mother.name).toBe(man7WithMeat.mother.name)
    expect(man7.mother.parents.length).toBe(man7WithMeat.mother.parents.length)
    expect(man7.mother.parents[0].name).toBe(man7WithMeat.mother.parents[0].name)
    expect(man7.mother.parents[0].favoriteDish.title).toBe(man7WithMeat.mother.parents[0].favoriteDish.title)
    expect(man7.mother.parents[0].favoriteDish.ingredients.length).not.toBe(man7WithMeat.mother.parents[0].favoriteDish.ingredients.length)
    expect(man7WithMeat.mother.parents[0].favoriteDish.ingredients[0].title).toBe('meat')

})