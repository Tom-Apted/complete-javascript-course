'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `${firstName}`;
      console.log(str);
    }
  }

  printAge();
  return age;
}

const firstName = 'tom';
calcAge(1991);

console.log(me);

var me = 'tom';
let job = 'ehhhh';
const year = 2002;

console.log(addDecl(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrox = (a, b) => a + b;

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('all productis deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(2002);

const jonas = {
  year: 2002,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const jonas = {
  firstName: 'jonas',
  year: 2002,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: function () {
    console.log(`hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'tom',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log(friend);
console.log(me);
*/
let lastName = 'williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'davis';
console.log(jessica);
console.log(marriedJessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'williams',
  age: 27,
  family: ['alice', 'bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'davis';

jessicaCopy.family.push('mary');
jessicaCopy.family.push('john');

console.log(jessica2);
console.log(jessicaCopy);
