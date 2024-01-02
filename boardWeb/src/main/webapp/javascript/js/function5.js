//function5.js

//Array.prototype.forEach();
const ary = ['a', 'b', 'c'];
ary.forEach(elem=>console.log(elem));
    
ary.forEach((elem, idx) => {
    if(idx>0){
        console.log(elem);

    }
})

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
