//in js string is denoted by Both single('') & double quote("") for example: 'Hello', "Hello"


const name = 'raj ';

const repoCount = 50;

//console.log(name  +  repoCount+ " Value");

//console.log(`Hello my name is ${name}and my repo Count is ${repoCount}.`);

//console.log(typeof(name));

const gameName = new String('Rajnish-Raj')

console.log(gameName[0]);
console.log(gameName[5]);

console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(6));
// console.log(gameName.indexOf('n'))


const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(0,5);
console.log(anotherString);

const newString1 = "    Raj      ";
console.log(newString1);
console.log(newString1.trim());


console.log(gameName.split(''));
