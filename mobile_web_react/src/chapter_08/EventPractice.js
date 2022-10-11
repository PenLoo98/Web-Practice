import React, {useState} from "react";

const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    
    const {username, message} = form;
    const onChange = e => {
        // 함수 ()를 {}로 잘못 쳤다.
        setTimeout(() => console.log(e), 500);
        const nextForm = {
            ...FormData,
            [e.target.anme]: e.target.value
        };

        setForm(nextForm);
    };

    const onClick = () => {
        alert(username + ': ' + message);
        setForm({
            username: '',
            message: ''    
        });
    };

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <h1> 이벤트 연습 </h1>
            <input
                type="test"
                name="username"
                placeholder="유저명"
                value={username}
                onChange={onChange}
            />
            <input
                type="test"
                name="message"
                placeholder="아무거나 입력해보세요"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            {/* button 닫히는 /방향 */}
            <button onClick={onClick}>확인</button>
        </div>
        );
}

export default EventPractice;