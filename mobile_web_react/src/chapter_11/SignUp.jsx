import React, {useState} from "react";

function SignUp(props) {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("남자");
    const [region, setRegion] = useState("지역");
    
    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    const handleChangeRegion = (event) => {
        setRegion(event.target.value);
    };

    const handleSubmit = (event) => {
        alert(`입력한 이름: ${name}\n입력한 성별: ${gender}\n입력한 지역: ${region}`);
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <br />
            <label>
                성별:
                <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <label>
                지역:
                <select value={region} onChange={handleChangeRegion}>
                    <option value="서울">서울</option>
                    <option value="경기">경기</option>        
                    <option value="강원">강원</option>
                    <option value="충북">충북</option>
                    <option value="충남">충남</option>
                    <option value="경북">경북</option>
                    <option value="경남">경남</option>
                    <option value="전북">전북</option>
                    <option value="전남">전남</option>
                    <option value="제주">제주</option>
                </select>
                <br />
            <button type="submit">제출</button>
            </label>
        </form>
    );
}

export default SignUp;