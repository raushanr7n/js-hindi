
// var b = 300
let a = 300

if (true) {
    let a = 10
    var b = 201
    // console.log("INNER:", a);
}

// console.log(a);
// console.log(b);


// Nested scope

function one(){
    const username = "raushan"

    function two(){
        const website = "youtube"
        console.log(username);
        // console.log(website);
    }
    // console.log(website);
    two()
}

// one()


if (true) {
    const username = "raushan"
    if(username === "raushan"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
    
}

// console.log(username);


// ***************** intersting *****************

function addone(num,){
    return num + 1
}
console.log(addone(5))

addtwo(5)
const addtwo = function(num){
    return num + 2
}
