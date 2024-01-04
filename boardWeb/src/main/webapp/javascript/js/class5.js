//class5.js
//Map, Set.
const map = new Map();
//key = 이름, value = 나이
map.set('홍길동', 20);
map.set('김민수', 22);
map.set('최성우', 25);
map.set('홍길동', 21);

//삭제.
// map.delete('최성우');
//모든요소 제거.
// map.clear();

console.log(map.get('김민수'));
for(let key of  map.keys()){
    console.log(`key는 ${key}, value는 ${map.get(key)}`);
}
console.log(map.values());
//key, value를 쌍으로 보여줌.(entries)
for(let obj of map.entries()){
    console.log(obj);
}
//배열로 나타나게 만들기.
for(let [item, value] of map.entries()){
    console.log(item, value);
}
//첫번째 매개값이 값, 두번째 매개값이 키.
map.forEach((val, key) => console.log('key: ' + key, 'val: ' + val));

//Set
const set = new Set();
set.add('홍길동');
set.add('김민수');
set.add('홍성길');
set.add('홍길동');

set.delete('김민수');
console.clear();
console.log(set.size);

set.forEach(name => console.log(name));
//중복된값 제거.
const numAry = [10, 14, 12, 10];
const num = new Set(numAry); //배열 -> set
num.forEach(number => console.log(number));

console.clear();
map.clear();

map.set('김명철', 80);
map.set('김익수', 70);
map.set('이명철', 80);
map.set('이익수', 85);
map.set('홍길동', 80);
//김씨들의 점수 합계.

let sum =0;
map.forEach((score, name) => {
if(name.indexOf('김') == 0){
    sum += score;
}
})
console.log(`합계점수: ${sum}`);