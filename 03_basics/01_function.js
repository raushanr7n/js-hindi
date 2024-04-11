function sayMyName() {
    console.log("R");
    console.log("A");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
}

// sayMyName()


// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // console.log("Raushan");
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result:", result);


function loginUsermessage(username = "sam"){
    if(!username){
        console.log("please enter the username");
        return


    }
    return `${username} just logged in`
}


// console.log(loginUsermessage("Raushan"))

console.log(loginUsermessage("Raushan"));

