"use strict";

let cylinder = {
    R: 5,
    H: 6,
    S: function ({R, H} = cylinder) {
        console.log(2 * Math.PI * R * (R + H));
    },
    V: function ({R, H} = cylinder) {
        console.log(Math.PI * (R ** 2) * H);
    }
}

cylinder.S();
cylinder.V();

function calc(num1, num2, sign) {
    switch (sign) {
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "/":
            return num1 / num2
        case "*":
            return num1 * num2
    }
}

console.log(calc(1, 2, "/"));

function isCharPresent(string, symbol) {
    for (let i = 0; i <= string.length; i++) {
        if (string[i] === symbol) {
            return true;
        }
    }

    return false
}

console.log(isCharPresent("Hello", "e"));