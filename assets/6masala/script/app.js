let cholarship = prompt("Bahoingizni kiritng va men sizga qancha stipendiya chiqqanini chiqarib beraman: ");

switch (cholarship) {
    case "1":
        document.write("Sizning bahoingiz yomon va sizga 100,000 so'm stipendiya chiqdi");
        break;
    case "2":
        document.write("Sizning bahoingiz qonoqarsiz va sizga 200,000 so'm stipendiya chiqdi");
        break;
    case "3":
        document.write("Sizning bahoingiz qoniqarli va sizga 300,000 so'm stipendiya chiqdi");
        break;
    case "4":
        document.write("Sizning bahoingiz yaxshi va sizga 400,000 so'm stipendiya chiqdi");
        break;
    case "5":
        document.write("Sizning bahoingiz ajoyib va sizga 600,000 so'm stipendiya chiqdi");
        break;
    default:
        document.write("Siz bahoingizni noto'g'ri kiritdingiz");
}