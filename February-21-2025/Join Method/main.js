let myFunc = function(myArr, target){
    let count = 0
    for (let i = 0; i < myArr.length; i++) {
        if(myArr[i] === target){
            count++
        }          
    }
    return count
}
console.log(myFunc([1,2,4,5,2,2,3,5,4,1,2,4,5], 4));