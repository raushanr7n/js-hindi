//  Primitive


// 7 types : String, Number, Boolean, null, undefined, Symbol , BigInt


const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


const bigNumber = 987654322345678n
console.log();


// https://262.ecma-international.org/5.1/#sec-11.4.3


// Reference (Non Primitive)

// Array, objects, Function


const heros = ["shaktiman", "nagraj", "doga"];

// console.log(heros);

let myObj ={
    name: "raushan",
    age:22,
}

// console.log(myObj);


const myFunaction = function(){
    console.log("Hello world");
}