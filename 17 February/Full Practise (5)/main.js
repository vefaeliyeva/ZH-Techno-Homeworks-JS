let newPhrase ="";
 
let letters = function(str){
    for (let i = 0; i < str.length; i++) {         
            if(str[i] != "a" && str[i] != "e" && str[i] != "u" && str[i] != "i" && str[i] != "o"){
                newPhrase +=str[i];
            }
        }
        return newPhrase;
}
console.log(letters("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, alias. Sed modi ut officia"));