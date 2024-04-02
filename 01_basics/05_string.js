const name = "raushan"
const repoCount = 50

// console.log(name + repoCount);

console.log(`hello my is ${name} and my repoCount is ${repoCount}`);


    const gameName = new String('rau-s-han')

    // console.log(gameName[0]);
    // console.log(gameName.__proto__);


    // console.log(gameName.toString);
    // console.log(gameName.toUpperCase());
    console.log(gameName.charAt(5));
    console.log(gameName.indexOf('a'));

    const newString = gameName.substring(0,4)
    console.log(newString);

    const anotherString = gameName.slice(-7, 3)
    console.log(anotherString);

    const newStringOne = "      raushan     "
    console.log(newStringOne);
    console.log(newStringOne.trim());


    const url = "https://raushan.com/raushan%30yadav"

   console.log( url.replace('%30', '-'));

   console.log(url.includes('Anand'));

   console.log(gameName.split('-'));