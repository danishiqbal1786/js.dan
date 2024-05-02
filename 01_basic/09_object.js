// const tinderuser=new object()
const tinderuser={}
tinderuser.id="123abc"
tinderuser.name="dany"
tinderuser.isloggedin=false
/*console.log(tinderuser);

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
console.log(regularuser.fullname.userfullname.firstname);*/

/*const obj1={1:"a" , 2:"b"}
const obj2={3:"a" , 4:"b"}
const obj4={5:"a" , 6:"b"}
//const obj3={obj1 , obj2}
//const obj3=Object.assign({} , obj1 , obj2 , obj4)
const obj3={...obj1, ...obj2}
console.log(obj3);*/

// create many object user array

const user=[
    {
        id:1,
        email:"dan@gmail.com"
    },
    {
        id:2,
        email:"aman@gmail.com"
    },
    {
        id:3,
        email:"danish@gmail.com"
    }

]
user[1].email
/*console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('isloggedin'));*/

// console.log(Object.keys(user));
// console.log(Object.values(user));

const course={
    coursename:"js in hindi",
    price:"999",
    courseinstructor:"hitesh"
}
const {courseinstructor}=course
console.log(courseinstructor);
//re-naming of courseinstructor
const {courseinstructor:instructor}=course
console.log(instructor);

//re-structuring
const navbar=({company})=>{

}
navbar(company="hitesh")