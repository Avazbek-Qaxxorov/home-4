// let a = prompt("Istalgan a-son kiriting: ");
// let b = prompt("Istalgan b-son kiriting: ");
// let c = prompt("Istalgan c-son kiriting: ");

// if (a > b) {
//     document.write(a + "son katta");
// }

// else if (a >= b) {
//     document.write(b + "son katta");
// }
// else if (a < c) {
//     document.write(c + "son katta");
// }
// // else if (a > c) {
// //     document.write(a + "son katta");
// // }
// else if (b < c) {
//     document.write(c + "son katta");
// }
// else if (c > b) {
//     document.write(b + "son katta");
// }

// else if (a == b || b == c || a == c) {
//     document.write("sonlar teng");
// }
// else {
//     document.write("Noto'g'ri");
// }




let num = prompt("Istalgan a son kiriting: ");
let son = prompt("Istalgan b son kiriting: ");
let number = prompt("Istalgan c son kiriting: ");

let raqam;

if (num >= son && num >= number) {
    raqam = num;
} else if (son >= num && son >= number) {
    raqam = son;
} else {
    raqam = number;
}

document.write("Eng katta son:", raqam);