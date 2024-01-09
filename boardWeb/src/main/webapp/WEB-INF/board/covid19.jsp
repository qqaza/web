<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<div id="show">
<table class="table">
<thead>
    <tr>
        <th>센터id</th>
        <th>센터명</th>
        <th>센터번호</th>
        <th>지역</th>
    </tr>
</thead>
<tbody id="list"></tbody>
</table>
</div>
<script>

const url = "https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=10&serviceKey=FpPIm%2FVhw%2FnCc8BCyJVd38ROICiEwgHrVPAMrkAaSu5irIr7WDfKrKEFMCQLqRENGZEN2y6loH8ZN3AXbpfQqw%3D%3D";
const fields = ['id','centerName','phoneNumber','sido']
let tbody = document.getElementById("list");
    

const xhtp = new XMLHttpRequest();
xhtp.open('get',url);
xhtp.send();
xhtp.onload = function(){
    console.log(JSON.parse(xhtp.responseText));
    let result = JSON.parse(xhtp.responseText);
    //tr>td * 4 
    result.data.forEach(datas => {
        
        let tr = document.createElement('tr');
        tr.addEventListener('click', function(){
            //location.href = 'map.do? x='datas.lat+'&y='+datas.lng;
            window.open("map.do?x="+datas.lat+"&y="+datas.lng+"&org="+datas.org);
        })
        fields.forEach(field => {
            let td = document.createElement('td');
            td.innerHTML = datas[field];
            tr.appendChild(td);
        })
        tbody.appendChild(tr);
    })

}


</script>
</body>
</html>