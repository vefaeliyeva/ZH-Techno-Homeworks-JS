const inp = document.querySelector("#inp");
const btn = document.querySelector("#btn");
const box = document.querySelector("#box");
const del = document.querySelector("#del");

function getRandomColor(){
    var colorCode = '0123456789ABCDEF'
    var color = '#'
    for(var i=0; i<6; i++){
        color+= colorCode[Math.floor(Math.random() * colorCode.length)]
    }
    return color
}

btn.addEventListener("click", () => {
if(inp.value !==""){
    box.innerHTML += `
    <li style="background-color: ${getRandomColor()}">
        <p>${inp.value}</p>
        <button id="li-btn" onclick="delItems(this)" >DEL</button>
    </li>`
}
inp.value = ""
})
function delItems(e){
    e.parentNode.remove()
}

del.addEventListener("click",()=>{
    while(box.firstElementChild != null){
        box.removeChild(box.firstElementChild)
    }
})