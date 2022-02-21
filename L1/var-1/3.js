// Написати функцію, яка порахує факторіал натурального числа

function factorial(n) {

    if (n < 0) {
        n = Math.abs(n);
    }

    let res = 1;
    while (n > 0) {
        res *= n--;
    }

    return res;
}

var n = 5;
console.log(`${n}! = `, factorial(n))