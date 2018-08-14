// ***************************************
//  Object Restructuring
// ***************************************

// const person = {
//   name: 'roger',
//   age: 38,
//   location: {
//     city: 'cary',
//     temp: 95
//   }
// };

// // const name = person.name;
// // const age = person.age;
// const {name: first = 'Anonymous', age} = person;
// console.log(`${first} is ${age}`)

// const {city, temp: temperature} = person.location;
// console.log(`It is ${temperature} in ${city}`);


// Challenge
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);


// ***************************************
// Array Destructuring
// ***************************************

// const address = ['1234 Laughridge Drive', 'Cary', 'NC', '27511'];
// const [, city, state='NY'] = address;
// console.log(`You are in ${city} ${state}`);

// Challenge
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [name, , medium] = item;
console.log(`A medium ${name} costs ${medium}`)