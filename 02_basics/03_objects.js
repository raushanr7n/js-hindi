// singleton

// object literals
// Object.create

const mySym = Symbol("key1")




const JsUser = {
    name: "Raushan",
    "full name" : "Raushan Kumar",
    [mySym]: "mykey1",
    age: 18,
    location: "Delhi",
    email: "notifyraushan@gmai.com",
    isLoggedInd: false,
    lastLoginDays: ["Monday", "Saturady"]
}
// console.log(JsUser);

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "raushan@.com"
// Object.freeze(JsUser)
JsUser.email = "raushanr7n@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}


JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this["full name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
 