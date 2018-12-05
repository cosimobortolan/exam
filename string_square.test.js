const s = require('./string_square').string_square

test('integer', () => {
    expect(s(23)).toBe(-1);
});

test('null', () => {
    expect(s(null)).toBe(-1);
});

test('ok', () => {
    expect(s("ciao")).toBe(16);
});
