const { calcAvg, fullName } = require('../src/index');

test('Should return fullname with a space between firstname and lastname', () => {

    const firstName = 'Mohamed';
    const lastName = 'Elshafeay';
    
    const result = fullName(firstName, lastName);
    
    expect(result).toBe('Mohamed Elshafeay')
})


test('Calculate Average', () => {

    const array1 = [1, 4, 5, 6, 4]  // integer average case
    const array2 = [1, 3, 5, 6, 4]  // float average case
    const array3 = [-1, -2, -5, -6]  // negative average case
    const array4 = [-1, 3, -4, 8]  // negative and positive numbers case
    const array5 = []  // empty array case

    const result1 = calcAvg(...array1);
    const result2 = calcAvg(...array2);
    const result3 = calcAvg(...array3);
    const result4 = calcAvg(...array4);
    const result5 = calcAvg(...array5);
    
    expect(result1).toBe(4)
    expect(result2).toBe(3.8)
    expect(result3).toBe(-3.5)
    expect(result4).toBe(1.5)
    expect(result5).toBe(0)
})
