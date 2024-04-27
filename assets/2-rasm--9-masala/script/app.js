let a = prompt("Istalgan a-son kiriting: ");
let b = prompt("Istalgan b-son kiriting: ");
let c = prompt("Istalgan c-son kiriting: ");

if (a >= 0 && b >= 0 && c <= 0){
    document.write("To'g'ri");
}

else if (a >= 0 && b <= 0 && c >= 0){
    document.write("To'g'ri");
}

else if (a <= 0 && b >= 0 && c >= 0){
    document.write("To'g'ri");
}
else {
    document.write("Noto'g'ri");
}