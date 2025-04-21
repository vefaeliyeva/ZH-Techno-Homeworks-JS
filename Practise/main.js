const menuBarButton = document.getElementById("menuBarButton");
const menuBar = document.getElementById("menuBar");
const leftPanel = document.getElementById("leftPanel");
const addingPanelOpening = document.getElementById("addingPanelOpening");
const rightPanel = document.getElementById("rightPanel");
const addingItemButton = document.getElementById("addingItemButton");
const itemCard = document.getElementById("itemCard");
const imgLink = document.getElementById("imgLink")
const name = document.getElementById("name")
const price = document.getElementById("price")
const discount = document.getElementById("discount")
const stock = document.getElementById("stock")

menuBarButton.addEventListener("click", () => {
    if (leftPanel.style.visibility === "visible") {
        leftPanel.style.visibility = "hidden";
        rightPanel.style.visibility = "hidden";
        itemCard.style.visibility = "hidden";
    } else {
        leftPanel.style.visibility = "visible"
    }
})
addingPanelOpening.addEventListener("click", () => {
    if (rightPanel.style.visibility === "visible") {
        rightPanel.style.visibility = "hidden";
    } else {
        rightPanel.style.visibility = "visible"
    }
})
addingItemButton.addEventListener("click", (e) => {
    e.preventDefault();
    itemCard.innerHTML = `
                    <div id="itemImage">
                    <img src="${imgLink.value}" alt="">
                </div>
                <div id="itemContent">
                    <div id="itemNameBox">${name.value}</div>
                    <div id="itemPriceBox">${(price.value-((price.value*discount.value)/100))}</div>
                    <div id="itemDiscountBox">${discount.value}</div>
                    <div id="itemStockBox">${stock.value}</div>
                </div>    
    `
})


