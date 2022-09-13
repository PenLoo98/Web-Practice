import React from "react";

// 함수의 이름은 대문자로 시작한다!
function Food(props) {
    return (
        <div>
            <h1>{`이 음식은 ${props.name}입니다.`}</h1>
            <h2>{`가격은 ${props.numOfPage}원입니다.`}</h2>
        </div>
    )
}

export default Food;