// 2 - imtahan qiymeti esasinda A, B, C, D,E,F olmasini yazin

let examMark = prompt("Imtahan balinizi daxil edin")

if (examMark >= 91 && examMark <= 100) {
    alert("İmtahan nəticəsində A aldiniz");
} else if (examMark >= 81 && examMark <= 90) {
    alert("İmtahan nəticəsində B aldiniz");
} else if (examMark >= 71 && examMark <= 80) {
    alert("İmtahan nəticəsində C aldiniz");
} else if (examMark >= 61 && examMark <= 70) {
    alert("İmtahan nəticəsində D aldiniz");
} else if (examMark >= 51 && examMark <= 60) {
    alert("İmtahan nəticəsində E aldiniz");
} else if (examMark >= 0 && examMark <= 50) {
    alert("İmtahandan F aldiniz. İmtahandan kəsildiniz.");
} else {
    alert("Düzgün qiymət daxil etmədiniz");
}