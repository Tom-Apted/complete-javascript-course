"use strict";
/*
let hasDriversLisence = false;
const passTest = true;
if (passTest === true) {
  hasDriversLisence = true
}
if (hasDriversLisence) console.log('I can drive :D');
function logger() {
  console.log('my name is tom');
}
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(2002);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(2002);

console.log(age1, age2);

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and it's capital city is ${capitalCity}`
}

const country1 = describeCountry('beep', 4, 'boop')
const country2 = describeCountry('ping', 16, 'pong')
const country3 = describeCountry('boom', 32, 'bam')
console.log (country1)
console.log (country2)
console.log (country3)



console.log(percentageOfWorld1(1441))


const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(2002);
console.log(age3);

console.log(yearsUntilRetirement(2002, 'tom'))

const percentageOfWorkd3 = (population) => {
  return((population/7900)*100);
}


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples)
  const orangePieces = cutFruitPieces(oranges)
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(2,3));


function percentageOfWorld1(population1) {
  return((population1/7900)*100);
 }

function describePopuation(country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which us about ${percentage}% og the world`;
}

console.log(describePopuation('china', 1441));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear)
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${retirement} years until retirement`)
    return retirement;
  } else {
    console.log('you have already retired')
    return -1;
  }

}

console.log(yearsUntilRetirement(1991, 'Jonas'))
console.log(yearsUntilRetirement(1950, 'Mike'))

const calcAverage = (score1, score2, score3) => {
  const average = (score1 + score2 + score3) / 3
  return average
}
const scoreDolphins = calcAverage(44,23,71)
const scoreKoalas = calcAverage(65,54,49)


const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas*2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
  } else if (avgKoalas >= avgDolphins*2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
  } else {
    console.log('no team wins ...')
  }
}

checkWinner(scoreDolphins, scoreKoalas)
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';
const friends = ['michael', 'steven','peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'jay';
console.log(friends);

const firstName = 'jonas';
const jonas = [firstName, 'shmit', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const years = [1990 ,1967 , 2002, 2010, 2018];

const age1 = calcAge2(years[0]);
const age2 = calcAge2(years[1]);
const age3 = calcAge2(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge2(years[0]), calcAge2(years[1]), calcAge2(years[years.length - 1])];
console.log(ages);

const friends = ['michael', 'steven','peter'];
const newLength = friends.push('jay');
console.log(friends);
console.log(newLength)

friends.unshift('john');
console.log(friends);

friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf('steven'));

console.log(friends.includes('steven'));

const calcTip = (amount) => {
  if (amount > 50 && amount < 300) {
    const tip = amount*0.15
    return tip
  } else {
    const tip = amount*0.2
    return tip
  }
}

const bills = [125 ,555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(bills, tips, totals)

const jonas = {
  firstName: 'jonas',
  lastName: 'shmit',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['michael', 'peter', 'steven']
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const instrestedIn = prompt('what do you want to know about jonas?');

if (jonas[instrestedIn]) {
  console.log(jonas[instrestedIn]);
} else {
  console.log('error');
}

jonas.location = 'portugal';
jonas['twitter'] = '@jonasshmit';
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best
friend is called ${jonas.friends[0]}`)

const jonas = {
  firstName: 'jonas',
  lastName: 'shmit',
  birthYear: 1991,
  job: 'teacher',
  friends: ['michael', 'peter', 'steven'],
  hasDriversLicence: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he ${this.hasDriversLicence ? 'has a drivers license' : 'does not have a drivers license'}`
  },
}

console.log(jonas.calcAge());

console.log(jonas.getSummary());
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI
  }
}

mark.calcBMI()
john.calcBMI()

john.BMI > mark.BMI ? console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})`)
: console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})`);


for (let x = 1; x <= 10; x++) {
  console.log(`lifting weights repetion ${x}`)
}
const jonas = ['jonas', 'shmit', 2037 - 1991, 'teacher', ['michael', 'peter', 'steven'], true];
const types = [];

for(let i = 0; i < jonas.length ; i++ ) {
  if (typeof jonas[i] !== 'string') continue;
  console.log(jonas[i]);
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969.,2020];
const ages = [];

for (let i = 0; i < years.length ; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);
const jonas = ['jonas', 'shmit', 2037 - 1991, 'teacher', ['michael', 'peter', 'steven'], true];

for(let i = jonas.length - 1; i >= 0 ; i--) {
  console.log(jonas[i]);
}

for (let exercise = 1 ; exercise < 4 ; exercise++) {
  console.log(`---------- starting exercise ${exercise}`)

  for (let rep = 1; rep < 6 ; rep++) {
    console.log(`lifting weight reppetiotion ${rep}`)
  }
}
for (let x = 1; x <= 10; x++) {
  console.log(`lifting weights repetion ${x}`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`while ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while(dice !== 6) {
  console.log(`you rolled a ${dice}`)
  dice = Math.trunc(Math.random() * 6) + 1;
}
*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
