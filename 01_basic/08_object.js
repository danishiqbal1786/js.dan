// singleton
// object..create

// object literals
const jsuser={
    name:"hitesh",
     "full name":"hitesh choudhary",
     //[mysym]:"mykey1",
    age:18,
    location:"delhi",
    email:"danish@gmail.com",
    isloggedin:false,
    lastloggindays:["monday" , "saturday" ]
}
//how to access this object see below
// console.log(jsuser.email); // not good habit for access
// console.log(jsuser["email"]); // good habit for access
// console.log(jsuser["full name"]);

jsuser.email="aman@gmail.com"
Object.freeze(jsuser)
jsuser.email="jamal@gmail.com"
console.log(jsuser);

jsuser.greeting=function(){
    console.log("hello js user");
}

jsuser.greetingtwo=function(){
    console.log(`hello js user , ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());

// const tinderuser=new object()
const tinderuser={}
tinderuser.id="123abc"
tinderuser.name="dany"
tinderuser.isloggedin=false
console.log(tinderuser);

const regularuser={
    email:"dan@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}
console.log(regularuser.fullname);
console.log(regularuser.fullname.userfullname);
console.log(regularuser.fullname.userfullname.firstname);
