//array2.js
const numAry = [23,10,17,35,9];
//전부 더한 값
let result = numAry.reduce((acc, num) => {
    // console.log(acc, num);
    return acc + num;
}, 0);
//numAry 에서 제일 큰 값
result = numAry.reduce((acc, num) => {
    return acc > num ? acc : num
}, 0);

//1.최소값 2.평균 구하기.

result = numAry.reduce((acc, num) => {
    return acc < num ? acc : num
},numAry[0]);
console.log(`결과: ${result}`);
//2.평균 구하기.
result = numAry.reduce((acc, num, idx) => {
    if(idx == numAry.length, -1){
        return acc + num / numAry.length;

    }
    return acc + num;
}, 0);
console.log(`결과: ${result}`);


//10보다 큰 값을 새로운 배열에 생성.
result = numAry.reduce((acc, num)=>{
    if(num > 10){
        acc.push(num);
    }
    return acc;
},[]);

console.log(`결과: ${result}`);