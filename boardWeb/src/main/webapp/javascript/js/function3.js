//function3.js
//객체 생성: {}
let obj1 = {
    name: "홍길동",
    age: "20",
    showInfo: function(){
        return '이름은 ' + this.name + ', 나이는 ' + this.age;
    }
}
let obj2 = {
    name: "최길동",
    age: "21",
    showInfo: function(){
        return '이름은 ' + this.name + ', 나이는 ' + this.age;
    }
}

console.log(obj1.name);
console.log(obj1['age']);
console.log(obj1.showInfo());

// 함수를 통해 객체선언.
function Member(name, age){
    this.name = name;
    this.age=age;
    this.showInfo=function(){
        return '이름은 ' + this.name + ', 나이는 ' + this.age;
    }
}


let obj3 = new Member("김명철", 22);
let obj4 = new Member("이형섭", 25);

console.log(obj.showInfo());
