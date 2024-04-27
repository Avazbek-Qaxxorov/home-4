let price = prompt("Bahoni kiriting va biz sizga natijangiz qanday ekanligini chiqarib beramiz: ");

switch (price) {
    case "1":
        document.write("Sizning bahoingiz yomon");
        break;
    case "2":
        document.write("Sizning bahoingiz qonoqarsiz");
        break;
    case "3":
        document.write("Sizning bahoingiz qoniqarli");
        break;
    case "4":
        document.write("Sizning bahoingiz yaxshi");
        break;
    case "5":
        document.write("Sizning bahoingiz ajoyib");
        break;
    default:
        document.write("Siz bahoingizni noto'g'ri kiritdingiz");

}