import React from "react";
import Food from "./Food";

function Restaurant(props) {
    return (
        <div>
            {/* Food태그는 xml코드라고 보면 된다 */}
            <Food name="파스타" numOfPage={10000} />
            <Food name="피자" numOfPage={12000} />
            <Food name="리조또" numOfPage={9000} />
        </div>
    );
}

export default Restaurant;