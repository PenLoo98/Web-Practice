import React, {useState, useEffect} from "react";
import useCounter3 from "./useCounter3";

const MAX_CAPACITY = 15;
const MIN_CAPACITY = -15;

function Accommodate3(props) {
    const [isFull, setIsFull] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter3(0);

    useEffect(() => {
        console.log("========================");
        console.log("useEffect() is called");
        console.log(`isFull: ${isFull}`);
        console.log(`isFull: ${isEmpty}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    useEffect(() => {
        setIsEmpty(count <= MIN_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style={{padding: 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            <button onClick={increaseCount} >
                입장
            </button>
            <button onClick={decreaseCount} > 퇴장</button>

            {isFull && <p style={{color: "red"}}>정원이 가득찼습니다.</p>}
            {isEmpty && <p style={{color: "red"}}>더 이상 퇴장할 수 없습니다.</p>}
        </div>
    );
}

export default Accommodate3;