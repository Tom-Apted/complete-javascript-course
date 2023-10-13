/*
console.log(40+50);
let firstName = 'bob';

console.log(firstName);

let myFirstJob = 'team member';
let myCurrentJob = 'programmer';
console.log(country)
console.log(continent)
console.log(population)

let javascriptIsFun = true;
console.log(javascriptIsFun)
// console.log(typeof true)
console.log(typeof javascriptIsFun)
// console.log(typeof 45)
// console.log(typeof 'test');

javascriptIsFun = 'yes!';
console.log(typeof javascriptIsFun);
let year;
console.log(year);
console.log(typeof year);
year = 2002;
console.log(typeof year);
let age = 30;
age = 31;

const birthYear = 2002;
const now = 2037;
const ageTom = now - 2002;
const ageSarah = now - 2003;
console.log(ageTom, ageSarah);
console.log(ageTom * 2, ageTom / 10, 2 ** 3);
const firstName = 'tom';
const lastName = 'apted';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x ++;
x --;
console.log(x);

console.log(ageTom > ageSarah);


const country = 'England';
let finlandPop = 600;
let averagepop = 32;
const continent = 'Europe';
let population = 100;
const isisland = true;
let language;
language = 'english';
let halfPop = population / 2;
population ++;
console.log(population)
finlandPop > population
averagepop > population

const now = 2037;
const ageTom = now - 2002;
const ageSarah = now - 2003;
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
const averageAge = (ageTom + ageSarah) / 2;
console.log(ageTom, ageSarah, averageAge);

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;
const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

const firstName = 'tom';
const job = 'teacher';
const birthYear = 2002;
const year = 2023;

const tom = "i'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(tom)

const tomNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(tomNew)

console.log(`string
with multiple
lines`);

const age = 15;

if(age >=18) {
  console.log('Sarah can start driving license 🚗')
} else {
  const yearsLeft = 18 - age
  console.log(`Sarah is too young. wait another ${yearsLeft} years`)
}

const birthYear = 2000;
let centuary;
if(birthYear <= 2000){
  centuary = 20;
} else {
  centuary = 21;
}
console.log(centuary)

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;
const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);
const markHigherBMI = markBMI > johnBMI;
if(markHigherBMI == true) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's ${johnBMI}`)
} else {
  console.log(`John's ${johnBMI} BMI is higher than Mark's ${markBMI}`)
}


const inputYear = '1991'
console.log(Number(inputYear))
console.log(Number(inputYear) + 18)
console.log(String(23))
console.log(5 + 6 + '4' + 9 - 4 - 2)

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas'))
console.log(Boolean({}))
console.log(Boolean(''))

const money = 100
if(money) {
  console.log("don't spent it all")
} else {
  console.log("you should get a job")
}

let hight = 12;
if(hight) {
  console.log('hight is defined')
} else {
  console.log('hight is not defined')
}


const age = 18
if(age === 18) console.log('you just became an adult')

const favourite = Number(prompt("whats your favourute number"))
console.log(favourite)
console.log(typeof favourite)

if(favourite === 23) {
  console.log("beep boop")
} else if(favourite === 7) {
  console.log("meeep moop")
} else if(favourite === 9) {
  console.log("meeep moop jhsriohn")
} else {
  console.log("bad pick")
}

if(favourite !== 23) console.log("why")

const numNeighbours = Number(prompt("how many neibhours does your country have"))
if (numNeighbours === 1) {
  console.log("only one border")
} else if (numNeighbours > 1){
  console.log("greater than 1")
} else {
  console.log("no borders")
}

const hasDriversLiscence = true;
const hasGoodVision = true;
console.log(hasDriversLiscence && hasGoodVision)
console.log(hasDriversLiscence || hasGoodVision)
console.log(!hasDriversLiscence)

const isTired = false
console.log(hasDriversLiscence && hasGoodVision && isTired)
const shouldDrive = hasDriversLiscence && hasGoodVision && !isTired


if(shouldDrive) {
  console.log('Sarah is able to drive')
} else {
  console.log('someone else should drive')
}

const country = 'England';
let finlandPop = 600;
let averagepop = 32;
const continent = 'Europe';
let population = 51;
const isIsland = false;
let language;
language = 'english';
let halfPop = population / 2;
population ++;
console.log(population)
finlandPop > population
averagepop > population
let description = `${country} is in ${continent}, and it's ${population} million people speak ${language}`;
console.log(description)
if(population > averagepop) {
  console.log(`${country}'s population is above average`)
} else {
  console.log(`${country}'s population is ${averagepop - population} below average`)
}

if(population > 50 && !isIsland && language === 'english') {
  console.log(`you should live in ${country}`)
} else {
  console.log(`${country} does not meet your criteria`)
}

const dolphinsAvg = (99 + 99 + 99) / 3
const koalasAvg = (99 + 98 + 99) / 3
if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
  console.log("dolphins win")
} else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
  console.log("koalas win")
} else if (koalasAvg === dolphinsAvg && dolphinsAvg >= 100) {
  console.log("draw")
} else {
  console.log("no winner")
}

 const day = 'saturday';

 switch(day) {
  case 'monday':
    console.log('plan course structure');
    console.log('go to coding meetup');
    break;
  case 'tuesday':
    console.log('prepare theory videos')
    break
  case 'wednesday':
  case 'thursday':
    console.log('write code examples')
    break
  case 'friday':
    console.log('record videos')
    break
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend')
    break
  default:
    console.log('not a valid day')
}

const language = 'arrbwhc'
switch(language) {
  case 'chinese':
  case 'mandarin':
    console.log('most number of native speakers')
    break
  case 'spanish':
    console.log('second place number of native speakers')
    break
  case 'english':
    console.log('third place')
    break
  case 'hindi':
    console.log('number 4')
    break
  case 'arabic':
    console.log('5th most spoken language')
    break
  default:
    console.log('Great language too')
}

const age = 23;
age >= 18 ? console.log('I like to dring wine') : console.log('i like to dring water')

const drink = age >= 18 ? 'wine' : 'water'
console.log(drink)

let drink2;

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)
*/
const population = 22;

console.log(
  `portugals population is ${population > 33 ? "above" : "below"} average`
);
