// let value = null;
// console.log(value === 0);
// console.log(value >= 0);
// console.log(value <= 0);

let boxColor = document.getElementById("boxColor");
let boxWidth = document.getElementById("boxWidth");
let boxHeight = document.getElementById("boxHeight");
let boxBorderRadius = document.getElementById("boxBorderRadius");
let btn = document.getElementById("btn")
let box = document.getElementById("box")

btn.addEventListener("click",()=>{
    box.style.width = boxWidth.value+"px";
    box.style.height = boxHeight.value +"px";
    box.style.backgroundColor = boxColor.value;
    box.style.borderRadius = boxBorderRadius.value+"%";
    console.log(box) 
})
