import { useLocation, useSearchParams } from "react-router-dom";


const User = () => {

    // 쿼리스트링으로 넘어오는 값 받기
    // 1. useLocation훅
    const location = useLocation();
    // 쿼리스트링값을 분해해서 사용해야 됨
    // console.log(location.search);

    // 2. useSeachParams훅
    // 배열 반환 [get/set 메서드, 쿼리스트링 업데이트 함수]
    const [obj, setObj] = useSearchParams();
    // request.getParameter()와 동일한 형식
    const id = obj.get('id');
    const age = obj.get('age');
    // console.log(id, age);

    const handleClick = () => {
        let num = parseInt(age)+1;
        setObj({id: '변경', age: num});
    }

    return(
        <div>
            <h3>User</h3>
            쿼리스트링으로 넘어온 id: {id}<br/>
            쿼리스트링으로 넘어온 age: {age}<br/>

            <button onClick={handleClick}>쿼리스트링 수정</button>
        </div>
    )
}
export default User;