// Знайти елемент із найбільшою частотою повторень

function countEntries(arr) {
    let counts = [];

    arr.forEach(element => {
        counts[element] = counts[element] ? counts[element] + 1 : 1
    });

    counts = Object.entries(counts).sort(([, a], [, b]) => b - a);

    return counts;
}

let arr = [1, 1, 6, 4, 5, 4, 5, 5];

console.log(arr, countEntries(arr)[0])
