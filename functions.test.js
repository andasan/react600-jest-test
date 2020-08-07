const functions = require('./functions');

//toBe
test('Adds 2 + 2 to equal 4', ()=> {
    expect(functions.add(2,2)).toBe(4);
});

//not
test('Adds 2 + 2 to equal 5', ()=> {
    expect(functions.add(2,2)).not.toBe(5);
});

//toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy();
});

//toBeNull
test('Should be falsy', () => {
    expect(functions.isNull(0)).toBeNull();
});

//toEqual
test('User should be Maki Zushi object', () => {
    expect(functions.createUser()).toEqual({
        firstName:'Maki',
        lastName:'Zushi'
    })
});

//async/await
test('User fetched name should be Leanne Graham', async() => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham')
});