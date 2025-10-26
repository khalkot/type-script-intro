let greetings: string ="Hello Khaled";

let age = 9;

greetings.toLowerCase();
//age.toUpperCase(); this function doesn't exist for type (number)

console.log(greetings);

// number

let userID: number = 334455.3;

userID.toFixed();

//boolen

let isLoggedIn: boolean = false;

isLoggedIn.valueOf;

// any

let hero; // auto assigned to any because no value was given, TS can mark this as an error by configuring the "noImplicitAny" setting 
let superHero: string; // In similar cases it's better to set the type of the value that will be given to the variable

function getHero(){
    return "Batman";
}

function getSuperHero(){
    return "Superman"
}
hero = getHero();
superHero = getSuperHero();

export {}