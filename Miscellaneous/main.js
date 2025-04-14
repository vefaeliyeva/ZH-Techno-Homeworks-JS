const basketBtn = document.getElementById("basket-btn");
const menuDiv = document.getElementById("menuDiv");
const totalAmountEl = document.getElementById("totalAmount");

const addButton1 = document.getElementById("addButton1");
const addButton2 = document.getElementById("addButton2");
const addButton3 = document.getElementById("addButton3");
const addButton4 = document.getElementById("addButton4");
const addButton5 = document.getElementById("addButton5");
const addButton6 = document.getElementById("addButton6");

let totalAmount = 0;

basketBtn.addEventListener("click", () => {
  menuDiv.style.visibility = menuDiv.style.visibility === "visible" ? "hidden" : "visible";
});

function addItem(name, price) {
  const numericPrice = parseInt(price.replace("$", ""));
  totalAmount += numericPrice;
  totalAmountEl.textContent = totalAmount;

  menuDiv.innerHTML += `
    <div class="menuElement">
      <div class="elementLine">
        <div class="itemName">${name}</div>
        <div class="itemPrice">${price}</div>    
      </div>
      <button class="removeBtn" data-price="${numericPrice}">Delete</button>
    </div>
  `;
}

addButton1.addEventListener("click", () => addItem("Front-End Development", "$500"));
addButton2.addEventListener("click", () => addItem("Back-End Development", "$200"));
addButton3.addEventListener("click", () => addItem("Full-Stack Development", "$1000"));
addButton4.addEventListener("click", () => addItem("CyberSecurity", "$800"));
addButton5.addEventListener("click", () => addItem("Data Analytics", "$700"));
addButton6.addEventListener("click", () => addItem("Help-Desk", "$330"));

menuDiv.addEventListener("click", function (e) {
  if (e.target.classList.contains("removeBtn")) {
    const priceToRemove = parseInt(e.target.getAttribute("data-price"));
    totalAmount -= priceToRemove;
    totalAmountEl.textContent = totalAmount;

    e.target.closest(".menuElement").remove();
  }
});
