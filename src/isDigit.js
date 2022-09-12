function solution(symbol) {
    return /^[0-9]$/.test(symbol);
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test isDigit

// alternative solution
