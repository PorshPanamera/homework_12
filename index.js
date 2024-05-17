let numbers = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];
let result = 0;
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    result += numbers[i];
  }
}
console.log(result);

const minimum = Math.min(...numbers);
console.log(minimum);
const maximum = Math.max(...numbers);
console.log(maximum);

function negativeNumbers(numbers) {
  let result1 = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      result1++;
    }
  }
  return result1;
}
let sum = negativeNumbers(numbers);
console.log(sum);

function positiveUnpairedNumbers(numbers) {
  let result2 = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0 && numbers[i] % 2 !== 0) {
      result2++;
    }
  }
  return result2;
}
let sum1 = positiveUnpairedNumbers(numbers);
console.log(sum1);

function positivePairedNumbers(numbers) {
  let result3 = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0 && numbers[i] % 2 === 0) {
      result3++;
    }
  }
  return result3;
}
let sum2 = positivePairedNumbers(numbers);
console.log(sum2);

function sumPositiveUnpairedNumbers(numbers) {
  let result4 = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0 && numbers[i] % 2 !== 0) {
      result4 += numbers[i];
    }
  }
  return result4;
}
let sum3 = sumPositiveUnpairedNumbers(numbers);
console.log(sum3);

function sumPositiveNumbers(numbers) {
  let result5 = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0 && numbers[i] % 2 === 0) {
      result5 += numbers[i];
    }
  }
  return result5;
}
let sum4 = sumPositiveNumbers(numbers);
console.log(sum4);

function sumNegativeNumbers(numbers) {
  let result6 = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      result6 += numbers[i];
    }
  }
  return result6;
}
let sum5 = sumNegativeNumbers(numbers);
console.log(sum5);

function positiveNumbers(numbers) {
  let result7 = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0 && numbers[i] * 2) {
      result7 += numbers[i];
    }
  }
  return result7;
}
let sum6 = positiveNumbers(numbers);
console.log(sum6);

function ZeroNumbers(numbers) {
  let max = numbers[0];
  let maxIndex = 0;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
      maxIndex = i;
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    if (i !== maxIndex) {
      numbers[i] = 0;
    }
  }

  return max;
}

let largestNumber = ZeroNumbers(numbers);
console.log(largestNumber);
console.log(numbers);
