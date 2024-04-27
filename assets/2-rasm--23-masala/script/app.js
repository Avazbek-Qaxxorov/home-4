let a = prompt("Istalgan a-son kiriting: ");
let b = prompt("Istalgan b-son kiriting: ");
let c = prompt("Istalgan c-son kiriting: ");


if (a >= 0 && b >= 0 && c >= 0) {
    document.write("a, b, c sonlari musbat");
}

else if (a < 0) {
    document.write("a  soni manfiy");
}

else if (b < 0) {
    document.write("b  soni manfiy");
}

else if (c < 0) {
    document.write("c  soni manfiy");
}
else {
    document.write("a, b, c sonlari manfiy");
}