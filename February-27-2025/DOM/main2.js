let ad = document.getElementById("name")
let soyad = document.getElementById("surname")
let yash = document.getElementById("age")
let button = document.getElementById("btn")

btn.addEventListener("click",()=>{
    let newAccount = document.createElement("div");
    let nameBox = document.createElement("p");
    let surnameBox = document.createElement("p");
    let ageBox = document.createElement("p");
    // let deleteBtn = document.createElement("button");
    
    document.bottomSide.append(newAccount);
    newAccount.append(nameBox);
    newAccount.append(surnameBox);
    newAccount.append(ageBox);
    newAccount.append(deleteBtn);

    nameBox = ad.value;
    surnameBox = soyad.value;
    ageBox = yash.value;

    
    
    console.log(ad.value, soyad.value, yash.value);    
})