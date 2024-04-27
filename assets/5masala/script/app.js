
let a = promt("A son kiriting") ;
let b = promt("B son kiriting") ;
let c = promt("+ - / *");

switch (c) {
    case '+':
        document.write("a + b =", a + b);
        break;
    case '-':
        document.write("a - b =", a - b);
        break;
    case '*':
        document.write("a * b =", a * b);
        break;
    case '/':
        document.write("a / b =", a / b);
        break;
    default:
        document.write("Noto'g'ri amal belgisi!");
}
