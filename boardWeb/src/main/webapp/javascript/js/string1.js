//string1.js

let str1="Hello";
console.log(str1, typeof str1);
let str2 = new String("Hello");
console.log(str2, typeof str2);

console.log(str1 === str2);
console.log(str2.substring(1, 3));

let word = "   Hello, World  ";
console.log(word.trim());
console.log(word.trimEnd());
console.log(word.trimStart());
console.log(word.replace('H', 'h'));
console.log(word.replace(',', '!'));
console.log(word.replace('l', 'L'));
// const obj = {} // const obj = new Object(); 
// const reg = new RegExp(); // /값/
console.log(word.replace(/l/g, 'L'));
console.log(word.replace(/\s/g, ''));

word = '  how are you   to day  everyone.  ';

console.log(word.split(' ').filter(val =>val).join(' '));

const str11 = 'This is the only one story';
console.log(str11.slice(8,11));
console.log(str11.slice(-8,11));
console.log(str11.slice(10,4));
console.log(str11.slice(30));
console.log(str11.slice(0,-10));
console.log(str11.slice(8,100));

const num1 = 123;
const num2 = 123.45;
const bool = true;
const str ='문자열타입';
const arr = [1,2,'a','b',3];
const obj = {key: 'data', value: 15};

console.log(num1.toString());
console.log(num2.toString());
console.log(bool.toString());
console.log(str.toString());
console.log(arr.toString());
console.log(obj.toString());
console.log(obj.key.toString());
console.log(obj.value.toString());

const str22 = 'good mornung, good afternoon, good evening, and good night';
console.log(str22.indexOf('even'));
console.log(str22.lastIndexOf('good'));
console.log(str22.lastIndexOf('dawn'));

console.log(str22.indexOf('good',15));

console.log(str22.charAt(30));

console.log(str22.includes('even'));
console.log(str22.includes('dawn'));

const str33 = "bad MORNING, GOOD AFTERNOON, good evening, and good night";

console.log(str33.match(/good\s\w+/gi));
console.log(str33.match(/none\s\w+/gi));
console.log(str33.match(/none\s\w+/gi));

const str44 = 'GOOD MORNING, GOOD AFTERNOON, good evening, and good night';
console.log(str44.replace('good', 'bad'));
console.log(str44.toLocaleLowerCase().replace('good','bad'));

