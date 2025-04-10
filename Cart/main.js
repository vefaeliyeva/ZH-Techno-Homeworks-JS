const addButton = document.getElementById("btn");

const burgerButton = document.getElementById("burger");
const itemName = document.getElementById("itemName");
const itemPrice = document.getElementById("itemPrice");

const menuDiv = document.getElementById("menuDiv")

// menuDiv.style.visibility = "hidden";


burgerButton.addEventListener("click", () => {
    if( menuDiv.style.visibility === "visible"){
        menuDiv.style.visibility = "hidden";
    }else{
        menuDiv.style.visibility = "visible"
    }
})


addButton.addEventListener("click", () => {
    menuDiv.innerHTML += `
        <div id="menuElement">
          <div id="elementLine">
            <div id="itemName">NAME</div>
            <div id="itemPrice">$50</div>    
          </div>
          <button id="remove">
            Delete
          </button>
        </div>
`
})