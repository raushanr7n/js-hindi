// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shivam", "Raushan"]

const myArr2 = new Array(1, 2, 3, 4) 
// console.log(myArr[0]);
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()


// myArr.unshift(7)
// myArr.shift(9)


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);