let age = prompt("Tug'ilgan yilingizni kiriting: ");

let result = new Date().getFullYear() - age;

if (result - age) {
    document.write("Sizning yoshingiz: " + result + "da");
}

else {
    document.write("Siz noto'g'ri yil kiritdingiz: ");
}