import { Link } from "react-router-dom";


const Home = () => {

    return(
        <div>
            <h3>Home</h3>
            <ul>
                <li><Link to='/user'>User</Link></li>
                <li><Link to='/user?id=aaa123&age=1'>USER</Link></li>
                <li><Link to='/info/1'>Info</Link></li>
                <li><Link to='/info/2'>Info</Link></li>
                <li><Link to='/info/3'>Info</Link></li>

                {/* 중첩라우터 */}
                <li><Link to='/board'>Board</Link></li>

                {/* navigate컴포넌트 */}
                <li><Link to='/mypage'>MyPage</Link></li>
            </ul>
        </div>
    )
}
export default Home;