const users = [
  { name: 'Mango', daysActive: 15 },
  { name: 'Poly', daysActive: 4 },
  { name: 'Ajax', daysActive: 27 },
  { name: 'Chelsey', daysActive: 2 },
];

const sortByActiveDays = (a, b) => b.daysActive - a.daysActive;

console.log(users.sort(sortByActiveDays));

const numbers = [2, 1, 4, 3, 5];

// Отсортирует по возрастанию
const sortBy = (a, b) => b - a;
console.log('Before sort: ', numbers); // [2, 1, 4, 3, 5]
console.log('After sort: ', numbers.sort(sortBy)); // [1, 2, 3, 4, 5]

const clients = ['Mango', 'Ajax', 'Poly', 'Chelsey'];

// Отсортирует по алфавиту
console.log('Before sort: ', clients); // ["Mango", "Ajax", "Poly", "Chelsey"]
console.log('After sort: ', clients.sort(sortBy)); // ["Ajax", "Chelsey", "Mango", "Poly"]
