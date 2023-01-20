import { Fragment, useEffect, useState } from "react";

const App = () => {

    /* 
        AJAX를 이용해서 외부 데이터 가져오기
        1. Promise = fetch()
    */

    // 클릭 이벤트 발생 시 데이터 가져오기
    const [raw, setRaw] = useState();
    const handleClick = () => {
        fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
        .then(response => response.json())
        .then(data => setRaw(data));
    }

    // 화면 mount이후 데이터 가져오기 - useEffect()
    const [data, setData] = useState();
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);


    return(
        <Fragment>
            <button onClick={handleClick}>데이터 가져오기</button>

            {
                raw === undefined ?
                <div>데이터 준비 중</div> 
                : <div> 
                    ID: {raw.userId}, 
                    PW: {raw.userPw}, 
                    이름: {raw.userName}
                  </div>
            }
            <hr/>
            <h3>mount 이후 데이터 가져오기</h3>
            {
                data && <div>
                            ID: {data.userId}
                            PW: {data.userPw}
                            NAME: {data.userName}
                        </div>
            }
            
        </Fragment>
    )
}
export default App;