const basketBtn = document.getElementById("basket-btn");
const menuDiv = document.getElementById("menuDiv");
const totalAmountEl = document.getElementById("totalAmount");

let totalAmount = 0;

// Toggle basket görünürlüğü
basketBtn.addEventListener("click", () => {
  menuDiv.style.visibility = menuDiv.style.visibility === "visible" ? "hidden" : "visible";
});

// Ümumi məhsul əlavəetmə funksiyası  
function addItem(name, price) {
  const numericPrice = parseInt(price.replace("$", ""));
  totalAmount += numericPrice;
  totalAmountEl.textContent = totalAmount;

  // Yeni elementin HTML-i
  const itemElement = document.createElement("div");
  itemElement.classList.add("menuElement");
  itemElement.innerHTML = `
    <div class="elementLine">
      <div class="itemName">${name}</div>
      <div class="itemPrice">${price}</div>    
    </div>
    <button class="removeBtn" data-price="${numericPrice}">Delete</button>
  `;

  // Sil düyməsinin funksiyası
  const removeBtn = itemElement.querySelector(".removeBtn");
  removeBtn.addEventListener("click", () => {
    totalAmount -= numericPrice;
    totalAmountEl.textContent = totalAmount;
    itemElement.remove();
  });

  menuDiv.appendChild(itemElement);
}

// Buttonlara event listener əlavə edirik
document.getElementById("addButton1").addEventListener("click", () => addItem("Front-End Development", "$500"));
document.getElementById("addButton2").addEventListener("click", () => addItem("Back-End Development", "$600"));
document.getElementById("addButton3").addEventListener("click", () => addItem("Full-Stack Development", "$1000"));
document.getElementById("addButton4").addEventListener("click", () => addItem("CyberSecurity", "$800"));
document.getElementById("addButton5").addEventListener("click", () => addItem("Data Analytics", "$700"));
document.getElementById("addButton6").addEventListener("click", () => addItem("Help-Desk", "$330"));
