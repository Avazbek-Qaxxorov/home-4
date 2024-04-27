let a = prompt("Istalgan a-son kiriting: ");
let b = prompt("Istalgan b-son kiriting: ");

if (a > b) {
    document.write(a + "son katta");
}

else if (a < b) {
    document.write(b + "son katta");
}

else if (a == b) {
    document.write("sonlar teng");
}
else {
    document.write("Noto'g'ri");
}