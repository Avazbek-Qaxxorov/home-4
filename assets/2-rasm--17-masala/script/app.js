document.getElementById("submitButton").onclick = function() {
     var gender = document.querySelector('input[name="gender"]:checked');
     var imageContainer = document.getElementById("imageContainer");
     
     if (gender) {
       var genderValue = gender.value;
       if (genderValue === "male") {
         imageContainer.innerHTML = '<img src="./imges/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsb2ZmaWNlOF9ib3lfdmVjdG9yX2lsbHVzdHJhdGlvbl9kZXNpZ25faW5fdGhlX3N0eWxlX29mX18xNmFjZjk3YS03ZTM0LTRjNDktOTFmOC1jNzgzNGMxMzI5ZjgucG5n.webp" alt="Erkak rasmi">';
       } else if (genderValue === "female") {
         imageContainer.innerHTML = '<img src="./imges/good-advice-from-beautiful-woman_329181-3527.avif" alt="Ayol rasmi">';
       }
     } else {
       alert("Iltimos, jinsni tanlang!");
     }
   };