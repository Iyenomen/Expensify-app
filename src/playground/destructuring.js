// const person = {
//   name: 'Peace',
//   age: 22,
//   location: {
//     city: 'Lagos',
//     temp: 92
//   }
// };

// const { name = 'Anonymous', age } = person;

// console.log(`${person.name} is ${person.age}`);

// const { city, temp } = person.location;
// if (person.location.city && person.location.temp) {
//   console.log(`It's ${person.location.temp} in ${person.location.city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// Array destructuring 
// const address = ['1299 S Juniper Street', 'Philadephia', 'Pennysylvania', '19147'];

// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee(iced)', '$3.00', '$3.04', '$3.70'];
const [itemName, , mediumPrice] = item;

console.log(`A medium${itemName} costs ${mediumPrice}`);
