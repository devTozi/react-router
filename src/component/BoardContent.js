import { useParams } from "react-router-dom";


const BoardContent = () => {

    let {num} = useParams();

    return(
        <div>
            <h3>글 상세페이지..</h3>
            {num}번 글
        </div>
    )
}

export default BoardContent;