// class.js
let year = 2024;
let month = 1;

// let today = new Date(year, month -1, 1);
// today = new Date(year, -1, 0); //{} new Object()
// console.log(today.getDate(), today.getDay());

class Calendar {
    constructor(year, month) {
        this.year = year;
        this.month = month;
    }
    days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
    makeCalendar() {
        this.makeTitle(document.getElementById('theader'));
        this.makeBody(document.getElementById('tbody'));
    }
    makeTitle(pos = {}) {
        let tr = document.createElement('tr');
        this.days.forEach(function (field) {
            let th = document.createElement('th');
            th.innerText = field;
            tr.appendChild(th);
        })
        pos.appendChild(tr);
    }
    makeBody(pos = {}) {
        let tr = document.createElement('tr');
        //공백 
        let firstDay = this.getFirstDay(this.year, this.month);
        for (let i = 0; i < firstDay; i++) {
            let td = document.createElement('td');
            td.innerText = "";
            tr.appendChild(td);
        }
        let lastDate = this.getLastDate(this.year, this.month);
        for (let i = 1; i <= lastDate; i++) {
            //토요일은 aqua 일요일은 pink
            let td = document.createElement('td');
            //td속성을 추가.
            if ((firstDay + i) % 7 == 1) {
                td.setAttribute('style', 'background-color: pink');
            } else if ((firstDay + i) % 7 == 0) {
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

    getLastDate(year,month) {
        // 년,월: this.year, this.month
        let day = new Date(year, month, 0);
        return day.getDate();
    }
    getFirstDay(year,month) {
        let day = new Date(year, month-1 ,1);
        return day.getDay();
    }
}
const cal = new Calendar(year, month);
cal.makeCalendar();