//[{id,name,phoen},...]
const obj1 = {id: 'user1',name:'홍길동',phone:'0101-1111'}
        const obj2 = {id: 'user2',name:'김민수',phone:'0101-2222'}
        const obj3 = {id: 'user3',name:'박철호',phone:'0101-3333'}
        const friends = [obj1,obj2,obj3]
        for(let friend of friends){
            for(let prep in friend){
                console.log(prep.toUpperCase(),' - ', friend[prep]); // ,로도 구분가능 / obj1['id']
            }
        }