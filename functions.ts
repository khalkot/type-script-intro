function addTwo(num: number){
    return num + 2;
}



function getUpper(val: string){
    return val.toUpperCase();
}

function signUpUser(name: string, age: number, isPaid: boolean ){
    
}

let logInUser = (email: string, password: string, isRegistered: boolean = false) => {

}

addTwo(5);

getUpper("Khaled");

signUpUser("Khaled",8,true);

logInUser("Khaled","alkot");  /* this line would be flagged as an error for messing a value for the 'isRegistered' variable, 
but since it is defaulted to false it will nt resault in an error message.  */
export{};