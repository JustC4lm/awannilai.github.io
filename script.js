let nilaisiswa = parseInt(prompt('Masukkan nilai ujian mu'))
let grade = "";
let error = "";

if (isNaN(nilaisiswa)) {
    alert("Nilai yang di masukkan harus berupa angka!");
    grade = "Nilai error"
}if (nilaisiswa < 0 || nilaisiswa > 99) {
    alert("Nilai yang dimasukkan harus dari 0-99");
    grade = "Nilai salah"
}else if (nilaisiswa >= 94){
    grade = "A";
}else if (nilaisiswa >=90){
    grade = "B";
}else if (nilaisiswa >=84){
    grade = "C";
}else if (nilaisiswa >=81){
    grade = "D";
}else if (nilaisiswa >=75){
    grade = "E";
}else if (nilaisiswa >=65){
    grade = "F";
}else if (nilaisiswa <=65){
    grade = "F-";
}

document.write(`<h2>Nilai anda : ${nilaisiswa} dan grade anda : ${grade}<h2>`)