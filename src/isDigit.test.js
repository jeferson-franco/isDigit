const solution = require('./isDigit.js');

test('test 1', () => {
    expect(solution("0")).toBe(true);
});

test('test 2', () => {
    expect(solution("-")).toBe(false);
});

test('test 3', () => {
    expect(solution("O")).toBe(false);
});

test('test 4', () => {
    expect(solution("1")).toBe(true);
});

test('test 5', () => {
    expect(solution("2")).toBe(true);
});

test('test 6', () => {
    expect(solution("!")).toBe(false);
});

test('test 7', () => {
    expect(solution("@")).toBe(false);
});

test('test 8', () => {
    expect(solution("+")).toBe(false);
});

test('test 9', () => {
    expect(solution("6")).toBe(true);
});

test('test 10', () => {
    expect(solution("(")).toBe(false);
});

test('test 11', () => {
    expect(solution(")")).toBe(false);
});
