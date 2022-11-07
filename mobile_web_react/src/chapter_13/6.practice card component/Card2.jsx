import React from "react";

function Card2(props) {
    const{ title, backgroundColor, children} = props;

    return(
        <div
            style={{
                margin: 8,
                padding: 8,
                borderRadious: 8,
                boxShadow: "0 0 4px grey",
                backgroundColor: backgroundColor || "white",
            }}
        >
            {title && <h1>{title}</h1>}
            {children}
        </div>
    );
}

export default Card2;