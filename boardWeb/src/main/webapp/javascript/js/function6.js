//function6.js
//펼침. 연산자.
const args = [4,5,6];

function sum(num1=0, num2=0 ,...args){
    let result = 0;
    result = num1 + num2;
    if(args.length>0){
        args.forEach(val => {
            result += val;
        })
    }
    return result;
}
//...args 에 4,5,6 이 들어가서 더해짐.
console.log(sum(10,20, ...args));

const ary1 = [10, 20];
//concat => 합친다는 기능.
const ary2 = ary1.concat(args);
console.log(ary2);

const ary3 = [...ary1, ...args];
console.log(ary3);
//펼침연산자 사용할때, 중복된 속성(name)은 뒤에 적은 중복된 값으로 나오고 다른 속성은 나옴.
const obj1 = {name: "Hong", age: 20}
const obj2 = {name: "Hwong", height: 176}
const obj3 = {...obj1, ...obj2}
console.log(obj3);
//reduce:  , acc: 이전 순번의 값을 저장(0), curItem: 배열에 있는것(4,5,6) 
let result= [4,5,6].reduce((acc, curItem, idx, ary) => {
    console.log(acc, curItem, idx);
    return acc + curItem;
},0);
console.log('결과값: '+ result);

//map 메소드. 처리된 결과값을 새로운 변수에 저장.
result=[1,2,3,4].map((item, idx, ary) => {
    console.log(item, idx, ary);
    return item *2;
});
console.log('결과값: ', result);

//변수의 스코프(변수의 영역).
var name='어피치';
function run(){
    if(true){
        var name='라이언';
    }
    console.log(name);
    return name;
}
    run();
    console.log(name);

//스코프 체인.
var a =1;
var b=5;
function outerFunc(){
    var b; // undefined.
    function innerFunc(){
        a=b;
    }
    console.log(a); //1
    a= 3;
    b=4;
    innerFunc();
    console.log(a,b);//4
    var b=2;
    console.log(b);
}
outerFunc();

//예외처리.
const c =10;
try{
    c = 20;
}catch(error){
    console.log(error.message)
}finally{
    console.log(c);
}

