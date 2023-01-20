import { Navigate, useNavigate } from "react-router-dom";

const MyPage = () => {

    // 첫번째 렌더링 과정에서는 사용할 수 없음
    /* let nav = useNavigate();
    let loginYN = false; // 로그인여부
    if(loginYN === false) nav('/'); */

    // 권한이 없으면 리다이렉트
    // replace={true} 설정 시 기록을 남기지 않는다.
    let loginYN = false;
    if(loginYN === false){
        return <Navigate to="/" replace={true}/>
    }

    return(
        <div>
            권한이 있는 경우만 접근 가능
        </div>
    )
}
export default MyPage;