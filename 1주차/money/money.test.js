const Dollar = require('./money');

test('test multiplication', ()=> {
    const five = new Dollar(5);
    let product = five.times(2);

    expect(product).toBe(10);

    product = five.times(3);
    expect(product).toBe(15);
})

