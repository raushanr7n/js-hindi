// const tinderUser = new Object()
const tinderUser = {}


 tinderUser.id = "123fwen"
 tinderUser.name = "Gleen"
 tinderUser.isLoggidIn = false


// console.log(tinderUser);

const regularUser = {
    email: "gleen@gmail.com",
    fullname: {
        userfullname:{
            firstname: "raushan",
            lastname: "yadav"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);


const Obj1 = {1: "a", 2: "b"}
const Obj2 = {3: "a", 4: "b"}
const Obj4 = {4: "a", 6: "b"}

// const obj3 = { Obj1 , Obj2 }

// const obj3 = Object.assign({}, Obj1, Obj2, Obj4)

const obj3 = {...Obj1, ...Obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "g@gmail.com"
    },
]

// users [1].email~ 

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggidIn'));