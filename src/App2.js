import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import User from './component/User';
import Info from './component/Info';
import BoardContent from './component/BoardContent';
import Board from './component/Board';
import Header from './layout/Header';
import MyPage from './component/MyPage';

function App() {

  /* 
    - 라우터 적용 방법
    1. index.js에서 브라우저라우터로 app을 감싼다.
    2. 각각의 컴포넌트를 만든다.
    3. Route를 이용해서 주소별로 컴포넌트를 연결한다.

    - Link컴포넌트
    1. a태그를 대체한다.
    2. to 속성에 '라우터 주소'를 적어서 이동시킨다.

    - 쿼리스트링
    1. ?키=값 형태
    2. useLocation(), useSerchParams()로 값 받기

    - URL파라미터
    1. 라우터 설정 /경로:값
    2. useParams()로 값 받기

  */

  return (
    <Routes>
      {/* 중첩 라우터 - 헤더부분처리 (header에서 Outlet컴포넌트 표기) */}
      <Route element={<Header/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/user' element={<User/>} />{/* 쿼리스트링 */}
        <Route path='/info/:num' element={<Info/>} />{/* URL파라미터 */}
      </Route>

      {/* 각각 다른 화면 */}
      {/* <Route path='/board' element={<Board/>}/>
      <Route path='/board/:num' element={<BoardContent/>}/> */}

      {/* 중첩 라우터 - 공통부분처리 (board에서 Outlet컴포넌트 표기)*/}
      <Route path='/board' element={<Board/>}>
        <Route path=':num' element={<BoardContent/>}/>
      </Route>

      {/* navigate컴포넌트 */}
      <Route path='/mypage' element={<MyPage/>} />

    </Routes>
  );
}

export default App;
