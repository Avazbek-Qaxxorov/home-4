
let a = prompt("Istalgan a son kiriting: "); 
let b = prompt("Istalgan b son kiriting: ");

if (a % 2 !== b % 2) {
    if (a % 2 === 1) {
        document.write(a + " toq son.");
    } else {
        document.write(b + " toq son.");
    }
} else {
    document.write("Ikkala son ham toq son yoki ikkala son ham juft son!");
}