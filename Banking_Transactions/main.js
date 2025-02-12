let deposit = 1000;
const password = 1993;

let pinCode = Number(prompt(`Parolu daxil edin: `))
if (pinCode === password ) {
    let your_transactions = prompt(`Kartdan vəsait nağdlaşdırmaq üçün "-" , Karta vəsait əlavə etmək üçün "+" düymələrindən birini klikləyin`)
    if (your_transactions === "-") {
        let amount = Number(prompt(`Nağdlaşdırmaq istədiyiniz vəsaiti daxil edin`))
        if (amount <= deposit & amount > 0) {
            let afterTransactionsYourDeposit = deposit - amount;
            console.log("Bank əməliyyatından öncə balans: ", deposit);
            console.log("Çıxarmaq istədiyiniz məbləğ: ", amount);
            console.log("Bank əməliyyatından sonra balans: ", afterTransactionsYourDeposit);
        }
        else {
            console.log("Balansda kifayət qədər məbləğ yoxdur");
        }
    }
    else if (your_transactions === "+") {
        let income = Number(prompt(`Balansınıza əlavə etmək istədiyiniz məbləği daxil edin`));
        if (income > 0) {
            let afterTransactionsYourDeposit2;
            afterTransactionsYourDeposit2 = deposit + income;
            console.log("Bank əməliyyatından öncə balans: ", deposit);
            console.log("Balansa əlavə edilən məbləğ ", income);
            console.log("Bank əməliyyatından sonra balans: ", afterTransactionsYourDeposit2);
        }
        else {
            console.log("Təyin edilməmiş əməliyyat");

        }
    }
    else {
        console.log("Təyin edilməmiş əməliyyat");
    }
}
else {
    console.log("Parol düzgün daxil edilməyib");
}