//let age=33
let score="90abc"
//console.log(typeof score);
//console.log(typeof(score));

let valueINnumber=Number(score) 
//console.log(typeof valueINnumber);
//console.log(valueINnumber);

// let isloggedIn=1;
// let booleanIsloggedIn=Boolean(isloggedIn)
// console.log(booleanIsloggedIn);
let someNumber=33
let stringNumber=String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

//********************operations **************

// let value=3
// let negval=-value
// console.log(negval);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2)
// console.log(2**3)
// console.log(2/3);
// console.log(2%3);

// let str1="hello"
// let str2="danish"
// let str3=str1 + str2
// console.log(str3);

// console.log("1" +2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// let num1 , num2 , num3
// num1=num2=num3=2+2
// let gameCounter=100
// //gameCounter++;
// ++gameCounter;
// console.log(gameCounter);

// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);

// console.log(undefined==0);
// console.log(undefined>0);
// console.log(undefined<0);

//===
// console.log("2"===2);
// #PRIMITIVE data type
/* 7 types : string , number , boolean , null , undefind , symbol , bigint*/
// reference -->non-primitive
/*array , objects , functions*/

// const id=Symbol('234');
// const anotherid=Symbol('213');
// console.log(id===anotherid);

/*const heros=["shaktiman" , "naagraj" , "doga"]

let myobj={
    name:"danish" ,
    age:22,

}
const myfinction=function(){
    console.log("hello world");
}*/
/* non primitive data type ka return type genarally object aata h*/

//*************memory**************
//stack(primitve)  , heap(non-primitive)
//example
let myyoutubename="histeshchoudhary.com";
let anothername=myyoutubename
anothername="chaiaurcode";
console.log(myyoutubename);
console.log(anothername);

let userone={
    email:"user@gmail.com",
    upi:"user@ybl"
}
let usertwo=userone
usertwo.email="hitesh@gmail.com"
console.log(userone.email);
console.log(usertwo.email);
