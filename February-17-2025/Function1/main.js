const numberArr = [2, false, "5", "true", 9, 0, "i"];
const firstFunction = function () {
    let typeOfNumber = 0
    for (let i = 0; i < numberArr.length; i++) {
        if (typeof numberArr[i] === "number") {
            typeOfNumber++;
        }
    }
    console.log(typeOfNumber);
}
firstFunction()