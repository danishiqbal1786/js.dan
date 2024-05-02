// string interpolation
const name="danish"
const repocount=50
console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gamename=new String('hitesh')
console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));

const newString=gamename.substring(0 , 4)
console.log(newString);
const anotherstring=gamename.slice(-4 , 4)
console.log(anotherstring);

const newstringone="   hitesh   "
console.log(newstringone);
console.log(newstringone.trim()); // replace the gap of starting and ending

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20' , '-'));
console.log(url.includes('hitesh')); // if present then return true else return false

