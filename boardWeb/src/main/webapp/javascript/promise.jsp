<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>web/javascript/promise.jsp</title>
</head>
<body>

    <div id="show"></div>
<script>
    let show = document.getElementById('show'); //id값으로 요소를 선택.
    let cnt = 0;
    let interval = setInterval(() =>{
        const today = new Date();
        let hh = today.getHours();
        let mm = today.getMinutes();
        let ss = today.getSeconds();
        cnt++;

        if(cnt >= 20){
            clearInterval(interval);
        }

        show.innerHTML = hh + "시" + mm + "분" + ss + "초<br>";
    }, 1000);







    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
        	resolve('Success');
        }, 3000); // 
    }); // pending(초기화) => fullfielled(정상처리) => rejected(비정상처리)
    promise.then(function(result){
        console.log('then=>', result);
        return 'ok';
     })
     .then(function(result){
        console.log('second then=>', result);
     })
        .catch(function(err){
            console.error('error=>', err);
        })
  

</script>
</body>
</html>