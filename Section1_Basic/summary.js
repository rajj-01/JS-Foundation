//Their are 2types of DT 1.Primitive 2.Non-Primitive

/*the basic differ in these two of
1.Call by value(primitive)
2.Call by refrences(Non-primitive)
*/

/*Primitive
there are 7 types(these are the call by value)
1: String
2: number
3: Boolean
4: null
5: Undefined
6: Symbol
7: BigInt
*/

/*Reference (Non Primitive)
Array
Objects
functions
 */

const score = 100;
const score1= 100.01;


const isLogges = false;
const outsidetemp = null;
let userEmail;


const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNum = 51651515154151515145454554n;



const heros = ["iron man", "Caption America", "Thor", "Hulk"]
let myobj = {
    name: "Raj",
    age: 21,
}

 
const myFunction = function(){
    console.log("Hello Raj!");
}

console.log(typeof myFunction);

console.log(typeof (bigNum));
console.log(typeof(outsidetemp));




//JavaScript is a dynamically typed language, which means that variable types are determined and checked at runtime (during execution) rather than at compile time