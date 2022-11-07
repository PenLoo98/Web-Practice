import React from "react";
import Button from "./Button";

function App1(props) {
    return <Toolbar theme="dark" />;
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton theme={props.theme} />
        </div>
    );
}

function ThemedButton(props) {
    return <Button theme={props.theme} />;
}


export default App1;

