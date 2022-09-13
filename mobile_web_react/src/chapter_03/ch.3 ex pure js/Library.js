import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            {/* Book태그는 xml코드라고 보면 된다 */}
            <Book name="처음 만난 파이썬" numOfPage={300} />
            <Book name="처음 만난 AWS" numOfPage={400} />
            <Book name="처음 만난 리액트" numOfPage={500} />
        </div>
    );
}

export default Library;