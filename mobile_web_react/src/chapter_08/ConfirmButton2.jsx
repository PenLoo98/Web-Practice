import React from "react";
import { useState } from "react";
// ConfirmButton 컴포넌트를 함수 컴포넌트로 변경
function ConfirmButton2(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };
    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
                {isConfirmed ? "확인됨" : "확인하기"}
            </button>
    );
}
export default ConfirmButton2