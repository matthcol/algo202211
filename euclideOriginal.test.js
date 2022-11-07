const gcd=require('./euclideOriginal')

test('gcd(1,1) to equal 1', () =>
    expect(gcd(1,1)).toBe(1)
)

test('gcd(21,15) to equal 3', () =>
    expect(gcd(21, 15)).toBe(3)
)

test('gcd(15,21) to equal 3', () =>
    expect(gcd(15, 21)).toBe(3)
)