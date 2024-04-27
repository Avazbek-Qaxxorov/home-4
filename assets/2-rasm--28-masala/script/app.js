let numbers = [12, 7, 15, 9, 23, 8];
let complexNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  let isComplex = false;
  for (let j = 2; j <= Math.sqrt(numbers[i]); j++) {
    if (numbers[i] % j === 0) {
      isComplex = true;
      break;
    }
  }
  if (isComplex) {
    complexNumbers.push(numbers[i]);
  }
}

document.write("Murakkab sonlar: " + complexNumbers.join(", "));