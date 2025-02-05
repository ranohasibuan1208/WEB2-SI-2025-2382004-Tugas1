"use strict";
function birthdayCakeCandles(candles) {
    const maxHeight = Math.max(...candles);
    return candles.filter(candle => candle === maxHeight).length;
}
const candles = [4, 4, 1, 3];
console.log(birthdayCakeCandles(candles));
