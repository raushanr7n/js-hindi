const user = {
    username: "raushan",
    price: 103,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to my website`);
        // console.log(this);
    }
    
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

function chai(){
    let username = "raushan"
    // console.log(this.username);
}

// chai()



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)



const addTwo = (num1, num2) =>  ({username: "raushan"})

console.log(addTwo(3, 4));


