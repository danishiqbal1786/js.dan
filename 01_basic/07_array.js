
// array
const myarr=[7,1 ,2 ,3 , 4 , 5 ] // can be diffrent data type
// const myheros=["shaktiman" , "naagraj" , "danial"]
// console.log(myarr[0]);

// myarr.push(8);
// //myarr.pop()
// const number=[1 ,2 , 3 , 4 , 5]
// myarr.unshift(9)
// myarr.shift();
// console.log(myarr);

// const newarr=myarr.join()  // it convery in to string

// console.log(myarr);
// console.log(newarr);
// console.log("A" , myarr);
// const myn1=myarr.slice(1 , 3)

// console.log(myn1);
// console.log("B" , myarr);

// const myn2=myarr.splice(1 , 3)
// console.log("C" , myarr);
// console.log(myn2);

const another_array=[1 , 2 ,3 , [4 , 5 , 6] , 7 , [6 , 7 , [5 , 6]]]
const real_anotherarray=another_array.flat(Infinity)
console.log(real_anotherarray);

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name:"hitesh"})); // interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1 , score2 , score3));
