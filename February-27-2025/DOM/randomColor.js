function getRandomColor() {
    let colorCode = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += colorCode[Math.floor(Math.random() * colorCode.length)];
    }
    return color;
}
console.log(getRandomColor());

let button = document.getElementById("changeColor")
let boxx = document.getElementById("divBox");

button.addEventListener("click",()=>{
    boxx.style.backgroundColor = getRandomColor();
})