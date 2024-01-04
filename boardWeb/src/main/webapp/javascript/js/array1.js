//array1.js
//ary=[]
const ary = [1,2, '3',new Date()];

const numAry = [10, 20, 30, 40]
numAry.push(30); //끝에 숫자추가.
numAry.unshift(40); //앞에 숫자 추가.
numAry.pop(); //마지막 요소 삭제.
numAry.shift();//첫번째 요소 삭제.
//numAry.splice(1, 0, 50, 60); //몇번째 위치에 몇개를 지울것인지// 수정도 가능함.
// numAry.length = 10;


const numAry2 = [50, 60];

// const numAry3= numAry.concat(numAry2); 
// numAry에 numAry2의 값을 추가
numAry2.forEach(num=> numAry.push(num));
console.log(numAry);