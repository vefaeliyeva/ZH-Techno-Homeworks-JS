let button = document.getElementById("promptBtn");
let result = document.getElementById("netice");


button.addEventListener("click", (event) => {
    event.preventDefault();
    let point = document.getElementById("pointInput").value;
    if (point >= 1 && point <= 100) {
        if (point >= 91 && point <= 100) {
            grade = "A";
            console.log("İmtahan neticeniz: `A` ");
        }
        else if (point >= 81 && point <= 90) {
            grade = "B";
            console.log("İmtahan neticeniz: `B` ");
        }
        else if (point >= 71 && point <= 80) {
            grade = "C";
            console.log("İmtahan neticeniz: `C` ");
        }
        else if (point >= 61 && point <= 70) {
            grade = "D";
            console.log("İmtahan neticeniz: `D` ");
        }
        else if (point >= 51 && point <= 60) {
            grade = "E";
            console.log("İmtahan neticeniz: `E` ");
        }
        else {
            grade = "Imtahandan kesilmisiniz"
            console.log("Imtahandan kesilmisiniz");
        }
        result.innerHTML = `<p>İmtahan nəticəniz: ${grade}</p>`;
        console.log(`İmtahan nəticəniz: ${grade}`);
    }
    else {
        console.log("Duzgun qiymet daxil edin");
    }
})