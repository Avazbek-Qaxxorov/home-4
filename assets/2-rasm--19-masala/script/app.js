let num = prompt("Istalgan son kiriting: ");


if (num > 0) {
    if (num % 2 === 0) {
        document.write("Musbat juft son");
    } else {
        document.write("Musbat toq son");
    }
} else if (num < 0) {

    if (num % 2 === 0) {
        document.write("Manfiy juft son");
    } else {
        document.write("Manfiy toq son");
    }
} else {
    document.write("Son 0 ga teng");
}