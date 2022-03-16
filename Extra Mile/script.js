const fullName = prompt("Please state your name:");
let age = Number(prompt('Please state your age:'));

const date = new Date().getFullYear();
const born = date - age;

alert(`I've heard your are ${age} of age, that means you are born in ${born}.`)

