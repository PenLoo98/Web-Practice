import React, {useState} from "react";

function RequestForm(props){
    const[value, setValue] = useState('요청사항을 입력하세요');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('입력한 내용:' + value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                요청사항:
                <br/>
                <textarea value={value} onChange={handleChange}/>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}

export default RequestForm;