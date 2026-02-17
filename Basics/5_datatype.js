//primitive ann non primitive data types

//primitive data types
//int, boolean, string, null, undefined, symbol

//non primitive data types
//object, array, function   

let loggedin;
console.log(loggedin); // undefined because we have declared the variable but not assigned any value to it, so it is undefined

let user = null;
console.log(user); // null because we have assigned null to the variable, so it is null

const hero=["shaktiman" ,"doga" ,"nagraj"];

let myobj={

    name:"john",
    age:30,
    city:"new york"
}

const myfunc=function(){
    console.log("hello world");
}

console.log(typeof loggedin); // undefined
console.log(typeof user);       
console.log(typeof hero); // object because array is a type of object in JavaScript
console.log(typeof myobj); // object
console.log(typeof myfunc); // function