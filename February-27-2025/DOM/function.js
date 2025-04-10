let emptyArray = [];

function addingWord() {
    function getRandomWord(length) {
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        let word = "";

        for (let i = 0; i < length; i++) {
            word += alphabet[Math.floor(Math.random() * alphabet.length)];
        }

        return word;
    }

    let wordCount = Math.floor(Math.random() * 10) + 1;

    for (let i = 0; i < wordCount; i++) {
        let wordLength = Math.floor(Math.random() * 8) + 3;
        emptyArray.push(getRandomWord(wordLength));
    }
}
addingWord();

function getRandomColor() {
    let colorCode = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += colorCode[Math.floor(Math.random() * colorCode.length)];
    }
    return color;
}

console.log(getRandomColor());

let words = emptyArray.toString();
console.log(words);

let click = document.getElementById("clickBtn");
let paragraph = document.getElementById("myText");

click.addEventListener("click", () => {
    let newParagraph = document.createElement("p");
    newParagraph.textContent = words;
    newParagraph.style.color = getRandomColor(); 
    paragraph.appendChild(newParagraph);
});
