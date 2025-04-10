const container = document.getElementById("container")
const btn = document.getElementById("btn");

function getRandomColor() {
    var colorCode = '0123456789ABCDEF'
    var color = '#'
    for (var i = 1; i <= 6; i++) {
        color += colorCode[Math.floor(Math.random() * colorCode.length)]
    }
    return color
}

const box = document.getElementById("box");

btn.addEventListener("click", () => {
    let newElement = document.createElement("div");
    newElement.id = "newEl";
    newElement.class = "yeniElement";
    newElement.style.height = Math.floor(Math.random()*90+1)+"px";
    newElement.style.width = Math.floor(Math.random()*90+1)+"px";
    newElement.style.backgroundColor = getRandomColor();
    newElement.style.borderRadius = Math.floor(Math.random()*90+1)+"%";
    container.appendChild(newElement);

    newElement.style.position = "absolute";
    newElement.style.left = Math.floor(Math.random()*90+1)+"%";
    newElement.style.top = Math.floor(Math.random()*90+1)+"%";
    newElement.onclick = function () {
        this.remove();
    }

})
