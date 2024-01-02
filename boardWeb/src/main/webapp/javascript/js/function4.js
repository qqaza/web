//function4.js

//달력을 생성하는 객체.

const cal = {
    days : ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'],
    makeCalendar: function(month){
        this.makeTitle(this.days, document.getElementById('theader'));
        this.makeBody(month, document.getElementById('tbody'));
    },

    makeTitle: function(fields, pos){
        let tr = document.createElement('tr');
        fields.forEach(function (field) {
        let th = document.createElement('th');
        th.innerText = field;
        tr.appendChild(th);
    })
    pos.appendChild(tr);
    },

    makeBody: function(month, pos){
        let tr = document.createElement('tr');
    //공백 
    let firstDay = this.getFirstDay(month);
    for (let i = 0; i < firstDay; i++) {
        let td = document.createElement('td');
        td.innerText = "";
        tr.appendChild(td);
    }
    //날짜.
    let lastDate = this.getLastDate(month);
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
    },//makebody.

    getFirstDay(month){
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
            break;

    }
    },
    getLastDate(month){
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
   
}
cal.makeCalendar(1);
