// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15];
const beepboop = [14, 9, 5];

const calcTempAmplitude = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

const amp = calcTempAmplitude(temperatures, beepboop);
console.log(amp);
