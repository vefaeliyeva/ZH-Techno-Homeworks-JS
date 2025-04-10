let emptyArr = [];
let evenNumbers = [];
let oddNumbers = [];

for (let i = 1; i <= 25; i++) {
    emptyArr.push(i);
}

for (let j = 0; j < emptyArr.length; j++) {
    if(j%2 == 0){
        evenNumbers.push(j)
    }
    else{
        oddNumbers.push(j)
    }
    
}
console.log(emptyArr);
console.log(evenNumbers);
console.log(oddNumbers);