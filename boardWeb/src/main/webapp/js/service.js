/**
 * service.js
 */
function makeLi(reply = {}){
	
	//시작
			let li = document.createElement('li');
			for(let i in reply){
				if(i != 'boardNo'){
					let span = document.createElement('span');
					span.innerText = i +" : "+ reply[i];
					li.appendChild(span);
				}
			}
			
			//삭제버튼
			let btn = document.createElement('button');
			btn.addEventListener('click',function(){
				// 댓글번호 삭제 후 화면에서 제거
				let delHtp = new XMLHttpRequest();
				delHtp.open('get','delReplyJson.do?rno=' + reply.replyNo);
				delHtp.send();
				delHtp.onload = function(){
					let result = JSON.parse(delHtp.responseText);
					if(result.retCode == 'OK'){
						alert('삭제됨');
						btn.parentElement.remove();
					}else if(result.retCode == 'NG'){
						alert('삭제중 에러');
					}
				}

			})
			btn.innerText = '삭제';
			li.appendChild(btn); //함수 생성부분
			return li;
	}

 	
		