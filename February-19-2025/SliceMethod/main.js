let fruits = ["apple","banana","orange","pear","strawberry","blackberry","grape","mango"];
let newFruits = fruits.slice(1,4)

console.log(newFruits);
console.log(fruits);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let newNumbers = function (numbers, startIndex, endIndex) {
    return numbers.slice(startIndex, endIndex)
}

console.log(newNumbers(numbers, 2, numbers.length-2));





