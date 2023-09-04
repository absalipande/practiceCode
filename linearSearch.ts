const numbers: number[] = [4, 7, 1, 9, 8, 3, 5, 0];

for (const num of numbers) {
    if (num === 8) {
        console.log(`-> ${num} <-`);
        break;
    }
    console.log(`${num}, `)
}
