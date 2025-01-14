// 3/
// 12 yasdan kicik sexsler ucun bilet qiymeti 5 manat,
// 12-18 yas arasi sexsler ucun 10 manat,
// 18+ yuxari ucun 15 manat olsun

let age = prompt("Yasinizi daxil edin")

if (age>1 && age<12){
    alert("Biletinizin qiymeti 5 manat teskil etdi")
} else if (age>12 && age<18){
    alert("Biletinizin qiymeti 10 manat teskil etdi")
} else if (age>18){
    alert("Biletinizin qiymeti 15 manat teskil etdi")
} else {
    alert("Melumat duzgun daxil edilmeyib")
}
