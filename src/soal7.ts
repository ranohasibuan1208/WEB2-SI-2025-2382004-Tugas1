function plusMinus(arr: number[]): void {
    const n = arr.length;
    const positive = arr.filter(x => x > 0).length / n;
    const negative = arr.filter(x => x < 0).length / n;
    const zero = arr.filter(x => x === 0).length / n;
    console.log(positive.toFixed(6));
    console.log(negative.toFixed(6));
    console.log(zero.toFixed(6));
}


const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);
