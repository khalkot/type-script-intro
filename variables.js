"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Khaled";
var age = 9;
greetings.toLowerCase();
//age.toUpperCase(); this function doesn't exist for type (number)
console.log(greetings);
// number
var userID = 334455.3;
userID.toFixed();
//boolen
var isLoggedIn = false;
isLoggedIn.valueOf;
// any
var hero; // auto assigned to any because no value was given, TS can mark this as an error by configuring the "noImplicitAny" setting 
var superHero; // In similar cases it's better to set the type of the value that will be given to the variable
function getHero() {
    return "Batman";
}
function getSuperHero() {
    return "Superman";
}
hero = getHero();
superHero = getSuperHero();
