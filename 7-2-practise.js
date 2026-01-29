// odd sum
let oddSum = 0;
for (let i = 91; i <= 129; i++) {
  if (i % 2 === 1) {
    oddSum += i;
  }
}
console.log(oddSum);

// even sum
let evenSum = 0;
for (let i = 51; i <= 85; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  }
}
console.log(evenSum);

// multiplication table of 9
let num = 9;
for (let i = 1; i <= 10; i++) {
    console.log(num ,'*', i ,'=', num * i);
}


// countdown timer
let countdown = 81;
while (countdown >= 65) {
    console.log(countdown);
    countdown--;
}
