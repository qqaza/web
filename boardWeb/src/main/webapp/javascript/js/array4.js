//array4.js
//map, filter, find, indexOf, some, every

const str = '펭수, 라이언, 어피치, 콘, 브라운, 무지, 라이언, 어피치, 콘';

//1. 콘이라는 이름이 몇번??
console.log(str.split(', ').reduce((acc, val)=>{
    return val =='콘' ? acc+1 : acc;
},0));


//2. 이름이 3자 이상이 몇명??
console.log(str.split(', ').reduce((acc, val)=>{
    return val.length >=3 ? acc+1 : acc;
},0));


//3. 2자인 이름이 있는지 여부?
console.log(str.split(', ').reduce((acc, val)=>{
    return val.length == 2  ? acc=true : acc;
},false));

//4. {no: 1, name: '펭수} 형태의 값을 가지는 배열을 생성. 결과 값을 strAry에 대입.
const strAry = str.split(', ').map((val, idx)=>{
    return{
        no: idx +1,
        name: val
    }
    
})
console.log(strAry);



