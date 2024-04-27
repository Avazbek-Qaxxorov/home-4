let a = prompt("Istalgan a-son kiriting: ");
let b = prompt("Istalgan b-son kiriting: ");
let c = prompt("Istalgan c-son kiriting: ");

if ((a < b && b < c) || (c < b && b < a)) {
    document.write("b soni a va c sonlari orasida yotadi.");
} else {
    document.write("b soni a va c sonlari orasida yotmaydi.");
}