let myFunc = function(arr){
    let maksimum = arr[0]
    for (let i = 1; i < arr.length; i++) {
     if(arr[i]>maksimum){
    maksimum = arr[i]
   }
}
return maksimum;
}

console.log(myFunc([8, 54, 23, 71, 36, 65, 11, 47, 82]));
console.log(myFunc([5, 29, 84, 16, 77, 42, 63, 38, 50]));
console.log(myFunc([12, 87, 45, 9, 73, 31, 56, 98, 24, 67]));



function arr(massiv) {
   return Math.max(...massiv);

}
console.log(arr([12, 73, 31, 56, 24, 67]));


