function addTwo(num: number):number{
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

logInUser("Khaled","alkot");  
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


const heroes = ["Thor", "Spiderman", "Ironman"];

heroes.map((hero): string =>{
    return `hero is ${hero}`;
})

function consoleError(errmsg: string): void{  // a good practice is to set the return data type to 'void' when there is nothing returned from the function;
    console.log(errmsg);
}

export{};