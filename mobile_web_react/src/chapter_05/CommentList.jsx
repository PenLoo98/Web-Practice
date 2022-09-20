import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "김연아",
        comment: "안녕하세요. 김연아입니다.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0LbTxdi6Hjmh3ldf4qHnVXuEpXz0F6dY7KQ&usqp=CAU",
    },
    {
        name: "유재석",
        comment: "안녕하세요. 유재석입니다.",
        img: "https://img.marieclairekorea.com/2021/05/mck_60935428e5b52.jpg",
    },
    {
        name: "손흥민",
        comment: "안녕하세요. 손흥민입니다.",
        img: "https://image.fmkorea.com/files/attach/new/20200810/5665468/2642904198/3029761201/99b983892094b5c6d2fc3736e15da7d1.png",
    },

]


function CommentList(props) {
    return (
        <div>
            {/* <Comment name={"홍길동"} comment={"나는 홍길동"}/> */}
            {comments.map((comment) => {
                return (
                <Comment name={comment.name} comment={comment.comment} img={comment.img}/>
                );
            })
        }</div>
    );
}

export default CommentList;