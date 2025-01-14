// 4/ 
// alis qiymeti 100 manatdan yuxari olduqda 20 faiz endirim,
// 200 + olduqda 30,
// 500+ olduqda ise 50 faiz endirim tetbiq edilsin

let price = prompt("Alis-verisin umumi meblegini daxil edin")
if (price>1 && price<100) {
    alert(`Mehsul ucun ${price} manat odemelisiniz`)
} else if(price>100 && price<200){
    let twentyPercentDiscount
    twentyPercentDiscount = (1-0.2)*price
    alert(
    `Mehsulun qiymeti ${price} manat oldu. 
    100 manatdan yuxari alis-veris etdiyiniz ucun, 
    20 faiz endirim qazandiniz ${twentyPercentDiscount} manatdir`)
} else if(price>200 && price<500){
    let thirtyPercentDiscount
    thirtyPercentDiscount = (1-0.3)*price
    alert(
    `Mehsulun qiymeti ${price} manat oldu. 
    200 manatdan yuxari alis-veris etdiyiniz ucun, 
    30 faiz endirim qazandiniz ${thirtyPercentDiscount} manatdir`)
}   else if(price>500 ){
    let fiftyPercentDiscount
    fiftyPercentDiscount = (1-0.5)*price
    alert(
    `Mehsulun qiymeti ${price} manat oldu. 
    500 manatdan yuxari alis-veris etdiyiniz ucun, 
    50 faiz endirim qazandiniz ${fiftyPercentDiscount} manatdir`)
}
