let sum = 0;
for(let i = 0; i <= 200; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
        sum =+ i;
    }
}

console.log('sum:',sum);