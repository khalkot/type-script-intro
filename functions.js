"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, age, isPaid) {
}
var logInUser = function (email, password, isRegistered) {
    if (isRegistered === void 0) { isRegistered = false; }
};
addTwo(5);
getUpper("Khaled");
signUpUser("Khaled", 8, true);
logInUser("Khaled", "alkot");
/* line 25 would be flagged as an error for missing the value of the 'isRegistered' variable,
but since it is defaulted to false it will nt resault in an error message.*/
/* let getVal = (myVal: number):boolean => {
    if(myVal > 5)
        return true;
    else
        return "200 ok";
} */
/* The above function is an example of a function that could have multiple return types,
 setting the type of the returned value will cause an error in such scenario. */
var heroes = ["Thor", "Spiderman", "Ironman"];
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
