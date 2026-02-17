
// stack (primitive data )   heap (non primitive data)

//primitive data types are stored in stack memory and non primitive data types are stored in heap memory.   

let myutubename="code with harry";

let anothername=myutubename;

console.log(myutubename);   
console.log(anothername);

anothername="chaiaurcode";

console.log(myutubename); // code with harry because it is stored in stack memory and it is not affected by the change in anothername
console.log(anothername); // chaiaurcode because it is stored in stack memory and it is affected by the change in anothername

let user={

    email:"hitech@google.com",
    upi:"hitech@okaxis"
}

let anotheruser=user;
anotheruser.email="priti@googl.com";

console.log(user.email); // priti@googl.com because user and anotheruser are referencing the same object in heap memory
console.log(anotheruser.email); // priti@googl.com because anotheruser is referencing the same object in heap memory 