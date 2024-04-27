let week = prompt("1-7 gacha son kiriting biz sizga hafta kunlarini chiqarib beramiz: ");

switch (week) {
    case "1":
        document.write("Dushanba");
        break;
    case "2":
        document.write("Seshanba");
        break;
    case "3":
        document.write("Chorshanba");
        break;
    case "4":
        document.write("Payshanba");
        break;
    case "5":
        document.write("Juma");
        break;
    case "6":
        document.write("Shanba");
        break;
    case "7":
        document.write("Yakshanba");
        break;
    default:
        document.write("Bunday hafta kuni mavjud emas");
}