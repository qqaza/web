let d = document.createElement('table');
d.setAttribute('border',1); //속성,값
d.setAttribute('id', 'list');
d.appendChild(makeHead());
d.appendChild(makeBody());
//실행부분
document.querySelector('body').appendChild(d);

//변경버튼 클릭 이벤트 등록.
document.querySelector('#editBtn').addEventListener('click', function(){
    //찾을 값:
    let findId = document.getElementById('uid').value;
    let phone = document.getElementById('uphone').value;
    //찾을대상.
    let target = document.querySelectorAll('#list>tbody>tr') // 공백은 자식,손자 까지 가져오기. 부등호 있으면 바로 아래.
    // console.log(target);
    //반복문
    target.forEach(function(item, idx, ary){
        // console.log(item, idx, ary);
        let tr = item;
        if(tr.children[0].innerText == findId){
            tr.children[2].innerText = phone;
        }
    })
})
 
    //전체삭제 이벤트 시작.
document.querySelector('#selectremov').addEventListener('click', function(){
    document.querySelectorAll('#list>tbody>tr>td>input:checked').forEach(function(item){
       item.parentElement.parentElement.remove();
    })
})

    //thead 부분
    function makeHead() {
            
        let d1 = document.createElement('thead');
        let d2 = document.createElement('tr');
        
        d1.appendChild(d2);
        
        for(let k1 in obj1){ // in 객체내 값 / of 배열내 값
            let k2 = document.createElement('th');
            k2.innerHTML = k1.toUpperCase();
            d2.append(k2);
        }
        //삭제
            let k2 = document.createElement('th');
            k2.innerHTML = '삭제';
            d2.append(k2);

            //선택 삭제
            k3 = document.createElement('th');
            k3.innerHTML = '선택삭제';
            d2.appendChild(k3);
        
        return d1;
    }
    //tbody 부분
    function makeBody() {
        let a = document.createElement('tbody');
        let c2 = Object.values(obj1); //객체 value 분리후 배열로 만듦
        
        for(let friend of friends){
            a.appendChild(makeTr(friend));
        }
        return a;
    }
    // for(let f in obj1){
        //     let k2 = document.createElement('td');
        //         k2.innerHTML = obj1[f]; 속성의 value값 가져오기
        //         a.appendChild(b).appendChild(k2);
        // }
    
        //추가 버튼 클릭 이벤트.
        document.getElementById('addBtn').addEventListener('click',function () {
            let id = document.getElementById('uid').value;
            let name = document.getElementById('uname').value;
            let phone = document.getElementById('uphone').value;
            //아무것도 안적으면 창 띄움.
            if(!id || !name || !phone){
                alert('값을 입력하세요.');
                return;
            }

            let obj = {id, name, phone}
            document.querySelector('#list>tbody').appendChild(makeTr(obj));
//추가한후 아이디,이름,연락처 창 전부 초기화 시키기 그다음 포커스로 아이디창 표시.
            document.getElementById('uid').value = '';
            document.getElementById('uname').value = '';
            document.getElementById('uphone').value = '';
            document.getElementById('uid').focus();

        });

    function makeTr(friend){
        let b = document.createElement('tr');
        //이벤트 등록.
        //유저이름이나 아이디를 누르면 위에 있는 창 아이디에 찍히게함.
        b.addEventListener('click', function(){
            console.log(this.children[0].innerText);
            document.getElementById('uid').value = this.children[0].innerText;
            document.getElementById('uname').value = this.children[1].innerText;
            document.getElementById('uphone').value =this.children[2].innerText;
        })
            for(let k1 in friend){ // in 객체내 값 / of 배열내 값
                let k2 = document.createElement('td');
                k2.innerHTML = friend[k1];
                b.appendChild(k2);
            }
            //삭제버튼 생성.
            let td = document.createElement('td');
            let btn = document.createElement('button');
            // button 이벤트 등록
            btn.addEventListener('click',function (e) { //이벤트 핸들러
                e.stopPropagation();
                console.log(this.parentElement.parentElement.remove());
            });
            btn.innerText='삭제';
            td.appendChild(btn);
            b.appendChild(td);

            //체크박스 생성.
           let td2 = document.createElement('td');
           let chek = document.createElement('input')
           chek.setAttribute('type', 'checkbox');
           chek.addEventListener('click', function(e){
            e.stopPropagation(); //상위요소로 이벤트 전파 차단. 위로 올라가지말고 선택한 곳에서 이벤트 멈춤.
            console.log(e);
           })
            //삭제 옆에 선택삭제 글자 보이게 만들기.
           chek.innerText="선택삭제";
           td2.appendChild(chek);
           b.appendChild(td2);
            return b;
    }
    