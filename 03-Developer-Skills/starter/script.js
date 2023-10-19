// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
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

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees celsius")),
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
*/

const printForecast = function (arr) {
  let test = "...";
  for (let i = 0; i < arr.length; i++) {
    test = test + `${arr[i]} in ${i + 1} days ... `;
  }
  return test;
};

console.log(printForecast([12, 5, -5, 0, 4]));
