'use strict';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise

// Data needed for first part of the section
const restaurant = {
  names: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`here pasta ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients, otherIngredients);
  },
};

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '*' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}

/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const test = text.split('\n');
  for (const item of test) {
    const newItem = item.trim().toLowerCase();
    const newArr = newItem.split('_');
    console.log(
      `${newArr[0]}${newArr[1][0].toUpperCase()}${newArr[1].slice(1)}`
    );
  }
});

console.log('a+nice+string'.split('+'));
console.log('tom apted'.split(' '));
const [first, last] = 'tom apted'.split(' ');

const newName = ['Mr.', first, last.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('tom apted');

const message = 'go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(239756982375983));
console.log(maskCreditCard('83786857573053'));

const message2 = 'Bad weather... all departures delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'*'.repeat(n)}`);
};

planesInLine(3);
planesInLine(4);
planesInLine(5);
const airline = 'TAP air portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const email = 'hello@test.io';
const loginEmail = '  Hello@Test.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
const normalizedEmail = loginEmail.toLowerCase().trim();

const priceGB = '£288,97';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);
const announcemnet = 'test door door';
console.log(announcemnet.replace('door', 'gate'));
console.log(announcemnet.replace(/door/g, 'gate'));

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('test'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('test 123');
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('no board');
  } else {
    console.log('board');
  }
};

checkBaggage('i have a laptop, some food nad a pocket Knife');
checkBaggage('socks and camera');
checkBaggage('got snacks and gun');
const plane = 'A320';
console.log(plane[0]);
console.log('B737'[1]);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'b' || s === 'e') {
    console.log('middle seat');
  } else {
    console.log('not middle');
  }
};
checkMiddleSeat('11b');
checkMiddleSeat('23c');
checkMiddleSeat('3e');

console.log(new String('jonas'));

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);
console.log(gameEvents);
const avg = 90 / gameEvents.size;
console.log(`An event happened, on average, every ${avg} minutes`);
for (const [min, event] of gameEvents) {
  if (min <= 45) {
    console.log(`[FIRST HALF] ${min}: ${event}`);
  } else {
    console.log(`[SECOND HALF] ${min}: ${event}`);
  }
}

const question = new Map([
  ['question', 'best language'],
  [1, 'c'],
  [2, 'java'],
  [3, 'js'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'try again'],
]);

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

const answer = Number(prompt('your answer'));

console.log(question.get(question.get('correct') === answer));

console.log([...question]);

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'firenze italy');

console.log(rest.set(2, 'lizbon portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest.get(arr));
console.log(rest);

const ordersSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);

console.log(new Set('tom'));
console.log(ordersSet);
console.log(ordersSet.size);
ordersSet.add('garlic bread');
ordersSet.delete('risotto');
console.log(ordersSet.has('pizza'));

for (const order of ordersSet) {
  console.log(order);
}
const staff = ['waiter', 'chef', 'waiter', 'Manager'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(['waiter', 'chef', 'waiter', 'Manager']).size);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...goals) {
    for (let i = 0; i < goals.length; i++) {
      console.log(goals[i]);
    }
    console.log(goals.length);
  },
};

const scorers = {};

for (const [i, goal] of game.scored.entries()) {
  console.log(`goal ${i + 1}: ${goal}`);
}

let avg = 0;
for (const odd of Object.values(game.odds)) {
  avg += odd;
}
console.log(avg / Object.values(game.odds).length);

for (const [team, odd] of Object.entries(game.odds)) {
  if (team === 'x') {
    console.log(`odd of draw ${odd}`);
  } else {
    console.log(`odd of ${game[team]} win ${odd}`);
  }
}

for (const goal of game.scored) {
  if (Object.keys(scorers).includes(goal)) {
    scorers[goal] += 1;
  } else {
    scorers[goal] = 1;
  }
}

console.log(scorers);

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = ` we are open ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}

console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Pizza',
  owner: 'Giovanni Rossi',
};

if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon).open;
}

console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day}, we are open ${open}`);
}

console.log(restaurant.order?.(0, 1));

const user = [
  {
    name: 'jonas',
    email: 'hello@test.io',
  },
];

console.log(user[0]?.name) ?? 'user array empty';

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log([...menu.entries()]);

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

game.printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests = rest1.numGuests || 10;

rest1.owner &&= 'annon';
rest2.owner &&= 'annon';

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1, rest2);

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

console.log(0 && 'test');
console.log(7 && 'test');

console.log('hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('test1', 'test2');
}

restaurant.orderPizza && restaurant.orderPizza('test3', 'test4');

console.log(3 || 'jonas');
console.log('' || 'test');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'hello' || 23 || null);

restaurant.numGuests = 23;
const guests2 = restaurant.numGuests || 10;
restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');

const arr = [1, 2, ...[3, 4]];
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

const ingredients = [
  prompt("Let's make pasta Ingredient 1"),
  prompt("Let's make pasta Ingredient 2"),
  prompt("Let's make pasta Ingredient 3"),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients);

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.names = 'test';
console.log(restaurantCopy.names);
console.log(restaurant.names);



const arr = [7, 8, 9];
const newarray = [1, 2, ...arr];
console.log(newarray);

console.log(...newarray);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const mainMeunCopy = [...restaurant.mainMenu];

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

const str = 'jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

restaurant.orderDelivery({
  time: '22:30',
  address: 'via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

const { names, openingHours, categories } = restaurant;
console.log(names, openingHours, categories);

const {
  names: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);
*/
