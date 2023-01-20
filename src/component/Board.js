import { Link, NavLink, Outlet } from "react-router-dom";

const Board = () => {

    const myStyle = {color: 'red', backgroundColor: 'yellow'}

    return(
        <div>
            <h3>글 목록</h3>

            <ul>
                {/* <li><Link to="/board/1">글1</Link></li>
                <li><Link to="/board/2">글2</Link></li>
                <li><Link to="/board/3">글3</Link></li> */}

                {/* 
                 NavLink는 {isActive: boolean}을
                 함수의 매개변수로 사용할 수 있게 전달해줌 
                 {isActive: boolean} 형태로 구조분해 할당
                 하여야 하며 Route가 해당 객체를 제공해주고
                 태그의 활성화 여부를 표시해준다.
                 */}
                <li><NavLink to="/board/1" style={({isActive}) => isActive ? myStyle : null}>글1</NavLink></li>
                <li><NavLink to="/board/2" style={({isActive}) => isActive ? myStyle : null}>글2</NavLink></li>
                <li><NavLink to="/board/3" style={({isActive}) => isActive ? myStyle : null}>글3</NavLink></li>
            </ul>

            {/* 하위 라우터 영역 */}
            <Outlet/>
        </div>
    )
}

export default Board;