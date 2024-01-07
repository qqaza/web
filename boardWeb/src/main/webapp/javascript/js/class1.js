// class1.js

const obj1 = {
    name: "hong",
    age: 20,
    showInfo() {
        return `이름은 ${this.name} 이고 나이는 ${this.age} 입니다.`;
    }
}

// 클래스
class Member {
    constructor(name, age) { // constructor 생성자
        this.name = name;
        this.age = age;
    }
    titles = ['이름', '나이'];
    showTitle() {
        this.titles.forEach(item => {
            console.log(item);
        })
        // return undefined; 리턴값 정의안하면 자동으로 return undefined; 적용됨.
    }
    showInfo() {
        return `이름은 ${this.name} 이고 나이는 ${this.age} 입니다.`;
    }
}
Member.prototype.showName = function () {
    return `이름은 ${this.name} 입니다.`;
}

const obj2 = new Member('홍길동', 20);
console.log(obj2.showInfo());
console.log(obj2.showTitle());
console.log(obj2.showName());