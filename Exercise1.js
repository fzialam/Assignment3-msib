// Fauzi Maulana Alam

function isArithmeticProgression(numbers) {
    const first = numbers[0];
    const second =numbers[1];
    const plus = second - first;

    for (let i = 1; i < (numbers.length - 1); i++) {
        if (numbers[i+1] - numbers[i] !== plus) return false;
    }
    return true
}

console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])) // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])) // false
console.log(isArithmeticProgression([2, 4, 6, 8])) // true
console.log(isArithmeticProgression([2, 6, 10, 54])) // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7])) // false