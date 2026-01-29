let n = 10;
while (n > 5) {
    if (n < 7) {
        break;
    }
    console.log(n);
     n--;
}


for(let i = 1; i < 10; i++){
    if (i % 2 ===1) {
        continue;
    }
    console.log(i);
}