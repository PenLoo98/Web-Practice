import React, {useState, useEffect} from "react";
import useCounter2 from "./useCounter2";

// const MAX_CAPACITY = 10;

function Accommodate2(props) {
    // const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter2(0);

    useEffect(() => {
        console.log("========================");
        console.log("useEffect() is called");
    });

    useEffect(() => {
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style={{padding: 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            <button onClick={increaseCount}>
                입장
            </button>
            <button onClick={decreaseCount}> 퇴장</button>
        </div>
    );
}

export default Accommodate2;