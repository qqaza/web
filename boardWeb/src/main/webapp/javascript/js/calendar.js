//calendar.js
let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']

let lastDate = getLastDate(1);
let firstDay = getFirstDay(1);
console.log(lastDate, firstDay);
//달력 생성.
makeCalendar(3);
function makeCalendar(month) {
    makeTitle(days, document.getElementById('theader'));
    makeBody(month, document.getElementById('tbody'));
}

function getLastDate(month) {
    //월입력 => 마지막날을 반환. 31, 29, 31, 30, 31, 30 ...
    switch (month) {
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
            break;
        case 2:
            return 29;
            break;

        default:
            return 31;

    }

}

function getFirstDay(month) {
    //월입력 => 1일의 위치(공백이 몇개 반환)
    switch (month) {
        case 1:
            return 1;
            break;
        case 2:
            return 4;
            break;
        case 3:
            return 5;
        break
    }
}
//header 생성.

function makeTitle(dayAry = [], pos = []) {
    let tr = document.createElement('tr');
    dayAry.forEach(function (field) {
        let th = document.createElement('th');
        th.innerText = field;
        tr.appendChild(th);
    })
    pos.appendChild(tr);

}

//날짜생성.
function makeBody(month = 1, pos = {}) {
    let tr = document.createElement('tr');
    //공백 
    let firstDay = getFirstDay(month);
    for (let i = 0; i < firstDay; i++) {
        let td = document.createElement('td');
        td.innerText = "";
        tr.appendChild(td);
    }
    //날짜.
    let lastDate = getLastDate(month);
    for (let i = 1; i <= lastDate; i++) {
        //토요일은 aqua 일요일은 pink
        let td = document.createElement('td');
        //td속성을 추가.
        if ((firstDay + i) % 7 == 1){
            td.setAttribute('style', 'background-color: pink');
        }else if((firstDay + i) % 7 == 0){
            td.setAttribute('style', 'background-color: aqua');
        }
        td.innerText = i;
        tr.appendChild(td);
       
        if ((firstDay + i) % 7 == 0) {
            pos.appendChild(tr);
            tr = document.createElement('tr');
        }
    }
    pos.appendChild(tr);
}