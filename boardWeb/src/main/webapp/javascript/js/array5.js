//arrat5.js

const ary = [12, 20, 2, 1, 100, 88];
ary.sort((a, b)=>{
    //오름차순: -1, 내림차순: 1
    if(a < b){
        return -1;
    }else{
        return 1;
    }
});
//나이순으로 정렬.
const friends = [
    {name:"Hong", age: 12},
    {name:"Hwong", age: 32},
    {name:"park", age: 22},
    {name:"kim", age: 26},
]
friends.sort((a, b)=>{
    if(a.age < b.age){
        return -1;
    }else{
        return 1;
    }
});
//이름순.
const friends1 = [
    {name:"Hong", age: 12},
    {name:"Hwong", age: 32},
    {name:"park", age: 22},
    {name:"kim", age: 26},
]
friends1.sort((a, b)=>{
    if(a.name < b.name){
        return -1;
    }else{
        return 1;
    }
});
console.log(friends1);