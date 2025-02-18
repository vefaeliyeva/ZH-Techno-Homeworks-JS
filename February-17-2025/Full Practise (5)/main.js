let letters = function(str){
    let newPhrase ="";
    for (let i = 0; i < str.length; i++) {         
            if(str[i] != "a" && str[i] != "e" && str[i] != "u" && str[i] != "i" && str[i] != "o" &&
                str[i] != "A" && str[i] != "E" && str[i] != "U" && str[i] != "I" && str[i] != "O"
            ){
                newPhrase +=str[i];
            }
        }
        return newPhrase;
}
console.log(letters("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, alias. Sed modi ut officia"));
console.log(letters("salam salamlar salamlarda"));