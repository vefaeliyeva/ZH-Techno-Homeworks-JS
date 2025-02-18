let numbers = [56, 234, 6543, 123, 75, 36, 85];
let max = numbers[0]
let min = numbers[0]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i]
    }
}
console.log(max);

for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] > max) {
        max = numbers[j]
    }
}
console.log(min);

let sum = 0

for (let a = 0; a < numbers.length; a++) {
    sum += numbers[a]
}
console.log(sum);