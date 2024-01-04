//array3.js

import{members, titles} from'./data.js';

console.log(members);
console.log(titles);
//테이블 만들기.
let str = titles.reduce((acc, title, idx)=>{
    if(idx == 0){
        acc += '<tr>';
    }
    acc += '<th>' + title + '</th>';
    if(idx == titles.length-1){
        acc += '</tr>';
        }
        return acc;
},'');
console.log(str);
document.getElementById('theader').innerHTML = str; //<tr><th..../th></tr>
//dom 으로만들기.

const tbody = document.getElementById('tbody');
members.reduce((acc, members) => {
    let tr = document.createElement('tr');
    for(let prop in members){
        let td = document.createElement('td');
        td.innerText = members[prop];
        tr.appendChild(td);
    }
    acc.appendChild(tr);
    return acc;
}, tbody);


//map(A => A'), filter(A => B)
//성 + 이름 합치기.
let result = members.map((item, idx)=>{
    let obj = {};
    obj.id = item.id;
    obj.name = item.first_name + '-' + item.last_name;
    obj.email = item.email;
    return obj;
});
//성별이 여자인 사람만 나타나게 하기.
//메소드 체인.
result = members.filter(item => item.gender == 'Female')
.map((item, idx)=>{
    let obj = {};
    obj.id = item.id;
    obj.name = item.first_name + '-' + item.last_name;
    obj.email = item.email;
    return obj;
})
    .map(item => item.name);
    result.push('charles');
    result.push('Hong');
    result. push('charles');
// console.log(result.indexOf('Roby-Rhubottom', ));
console.log(result.indexOf('charles', 6));

//문자열을 배열로만들기.
const str1 = '1234567890';
const str2 = 'abcdefghijk';
const arr_str1 = Array.from(str1);
const arr_str2 = Array.from(str2, function(el)
{return el + ','});
console.log(arr_str1);
console.log(arr_str2);

const str3 = Array.from(str2, (el,idx)=> el + (idx<str2.length-1?'.':'')).join('');
console.log(str3);