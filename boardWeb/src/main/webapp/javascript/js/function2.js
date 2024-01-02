//function2.js
let members = `[{"id":1,"first_name":"Tobi","last_name":"Sargood","email":"tsargood0@bloglovin.com","gender":"Female","salary":8766},
{"id":2,"first_name":"Christiane","last_name":"Disley","email":"cdisley1@t.co","gender":"Female","salary":5453},
{"id":3,"first_name":"Lindsay","last_name":"Cheasman","email":"lcheasman2@topsy.com","gender":"Female","salary":6617},
{"id":4,"first_name":"Jackie","last_name":"Van der Spohr","email":"jvanderspohr3@mtv.com","gender":"Female","salary":9351},
{"id":5,"first_name":"Flemming","last_name":"Bartholin","email":"fbartholin4@dmoz.org","gender":"Male","salary":5952},
{"id":6,"first_name":"Morissa","last_name":"Esser","email":"messer5@ucsd.edu","gender":"Female","salary":755},
{"id":7,"first_name":"Gay","last_name":"Isabell","email":"gisabell6@craigslist.org","gender":"Male","salary":7647},
{"id":8,"first_name":"Gawen","last_name":"Hallowes","email":"ghallowes7@msn.com","gender":"Male","salary":2704},
{"id":9,"first_name":"Collin","last_name":"Withams","email":"cwithams8@arizona.edu","gender":"Male","salary":3737},
{"id":10,"first_name":"Darlleen","last_name":"Reed","email":"dreed9@cbsnews.com","gender":"Female","salary":744},
{"id":11,"first_name":"Ariela","last_name":"Bonifas","email":"abonifasa@nature.com","gender":"Female","salary":2595},
{"id":12,"first_name":"Llywellyn","last_name":"Emburey","email":"lembureyb@theatlantic.com","gender":"Male","salary":2191},
{"id":13,"first_name":"Giorgio","last_name":"Bunney","email":"gbunneyc@bbc.co.uk","gender":"Male","salary":9552},
{"id":14,"first_name":"Dov","last_name":"Matthisson","email":"dmatthissond@mysql.com","gender":"Male","salary":8109},
{"id":15,"first_name":"Adelice","last_name":"Brill","email":"abrille@bloglines.com","gender":"Female","salary":4939}]`;

let memberAry = JSON.parse(members); //문자열 => 객체변환 하는 역할.
console.log(memberAry[14]);

let titles = ['아이디','이름','성씨','이메일','성별','급여'];

function makeHeader(fields=[], pos={}){
    let tr = document.createElement('tr');
    fields.forEach(function(field){
        let th = document.createElement('th');
        th.innerText = field;
        tr.appendChild(th);
    })
    pos.appendChild(tr);
}

makeHeader(titles, document.getElementById('theader'));

function makeBody(data=[], pos ={}){
   
    data.forEach(function(item){
       
        let tr = document.createElement('tr');
        if(item.gender =='Male'){
            tr.setAttribute('style', 'background-color: aqua');
        }else if(item.gender == 'Female'){
            tr.setAttribute('style', 'background-color: pink');
        }
        for(let prop in item){
        let td = document.createElement('td');
        td.innerText = item[prop];
        tr.appendChild(td);
    }
    
    pos.appendChild(tr);
})
}
makeBody(memberAry, document.getElementById('tbody'));
