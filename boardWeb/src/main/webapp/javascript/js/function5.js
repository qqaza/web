//function5.js

//Array.prototype.forEach();
const ary = ['a', 'b', 'c'];
//화살표 함수.
ary.forEach(elem=>console.log(elem));
    
ary.forEach((elem, idx) => {
    if(idx>0){
        console.log(elem);

    }
})
//프로토타입(인터페이스 => 사용자가 정의해서 기능구현)
Array.prototype.sum = function(){
    console.log(this);
    let result =0;
    this.forEach(function(val){
        result +=val;

    })
    return result;
}
const numbers = [1,2,3,4];
console.log('sum: ' +numbers.sum());
