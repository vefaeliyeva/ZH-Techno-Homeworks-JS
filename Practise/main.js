let phrase = prompt("Cümlənizi daxil edin:");
let letter = prompt("Hərfi daxil edin");
let s = 0;
let j = 0;

let letterCount = function(){
    for (let i = 0; i < phrase.length; i++) {
        s++
        if(phrase[i] == letter){
            j++
        }
    }
    console.log(s);
    alert("Axtarılan hərfin sayı: " + j);}
letterCount()


