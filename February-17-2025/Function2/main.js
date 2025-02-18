let text = "How is it going?";
let newText="";
let letterCheck = function(){
    for (let i = 0; i < text.length; i++) {
        if(text[i] != "i"){
            newText += text[i];            
        }
    }
    console.log(newText);
}
letterCheck()