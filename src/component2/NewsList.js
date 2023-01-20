import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsArticle from "./NewsArticle";
import styled from './NewsList.module.css';


const NewsList = () => {

    // 1. API 가져오기
    // bf74cecabda94b2fb1e40f074b7cdcc9

    // 5. 라우터로 들어오는 값 처리
    const {category} = useParams();

    // category값이 없거나 undefined이면 all로 할당됨
    const query = (category || 'all') === 'all' ? '' : `&category=${category}`;
    // console.log(query);

    // 2. useEffect에서 화면 로딩 시 데이터 가져오기
    // 내장함수에 async 적용 불가 - 즉시실행함수로 만들어 처리
    const [data, setData] = useState();
    useEffect(() => {
        (async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=bf74cecabda94b2fb1e40f074b7cdcc9`;
            let { data: { articles } } = await axios.get(url);
            setData(articles);
            setLoading(true);
        })();
    }, [query]) // 6. 변화가 일어날때 마다 재실행할 변수

    // 3. 데이터 로딩처리 (데이터가 오기전에 state는 undefined)
    const [loading, setLoading] = useState(false);
    if (loading === false) {
        return <div>로딩중...</div>
    }

    // 4. li 태그 컴포넌트화

    return (
        <div className={styled.news_container}>
            <h3>오늘의 헤드라인</h3>
            <ul className={styled.news_wrap}>
                {
                    /* 1. url, urlToImage, title, author, description, publishedAt */
                    data.map((item, index) => <NewsArticle key={index+1} item={item}/>)
                }
            </ul>
        </div>
    )
}
export default NewsList;