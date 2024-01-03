//class3.js

const ary = []
ary.push(1);
ary.push(2);
ary.push(3);
console.log(ary.find(item=>{
    return item>=2;
}))

//책 100P
class Estimate{
    constructor(param){
        this.unit = param;
    }

//견적가 얻기 메소드.
 getEstimate(unittype, width, height) {
    let priceinfo = this.unit.find(item=>item.type == unittype);
    return priceinfo.price*width*height;
}
//배열에 요소 추가 매소드.
 addUnit(unit) {
    unit.push(unit);
}
}
 let unitinfo = [{type: "wood", price: 100},{type: "iron", price: 300},{type: "plastic", price: 200}];
 const estimator = new Estimate(unitinfo);
 let result = estimator.getEstimate('wood', 20, 20);
 console.log(result);

//this
//1. 객체: this는 객체 자신
//2. funcyion() this는 전역객체 (window)

function myFunc(){
    console.log(this);
}
myFunc();

let obj = {};
obj.act = function(){
    this.value = 'default value';

    function innerAct(){
        this.value = 'innerAct value';
        console.log("this.value: "+ this.value);
    }

    function innerReact(caller){
        caller.value = "innerReact value";
        console.log("this.value: "+ this.value);
        console.log("caller.value: " + caller.value);
    }
    innerAct();
    console.log("obj 객체의 this.value: "+ this.value);

    innerReact(this);
    console.log("obj 객체의 this.value: " + this.value);
}
obj.act();

//클로저.
function outerFunc(name){
    let saying = name +': 안녕!';

    return function(){
        return saying;
    }
}

const closurel1 = outerFunc('라이언');
const closurel2 = outerFunc('콘');

console.log(closurel1());
console.log(closurel2());

function getCounter(){
    let cnt = 1;

  return function()  {
        cnt++;
        console.log(cnt);
    }
    //increaseCounter();
}
const clo1 = getCounter();
clo1();
clo1();
clo1();

