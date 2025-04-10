const cont = document.getElementById("container")
const btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    let nevElement = document.createElement("div")
    nevElement.id = "newEl"
    nevElement.class = "yeniElement"
    nevElement.style.height = "100px"
    nevElement.style.width = "100px"
    nevElement.style.backgroundColor = "lime"
    cont.appendChild(nevElement)
})