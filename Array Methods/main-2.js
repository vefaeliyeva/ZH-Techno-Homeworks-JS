// function random() {
//     let a, b;
//     a = Math.floor(Math.random() * 20 + 1);
//     b = Math.floor(Math.random() * 20 + 1);
//     let c = [a, b]
//     return c
// }

// function kv(e) {
//     console.log(e[0] * e[1]);
//     console.log(e[0]);
//     console.log(e[1]);
// }
// kv(random())


function random() {
    let a;
    a = Math.floor(Math.random() * 20 + 1);
    return a
}

let b = random()
let c = random()
console.log(b, c);



let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
let compare = document.getElementById("compare")

box1.innerHTML = `
<p>${b}</>
` 
box2.innerHTML = `
<p>${c}</>
` 
function muqayise() {
    if (b > c) {
        console.log(b);
        compare.innerHTML = `
        <p>&#62;</p>
        `
    }
    else if(c>b) {
        console.log(c);
        compare.innerHTML = `
        <p>&#60;</p>
        `
    }
    else{
        compare.innerHTML = `
        <p>&#61;</p>
        `
    }
}

muqayise();