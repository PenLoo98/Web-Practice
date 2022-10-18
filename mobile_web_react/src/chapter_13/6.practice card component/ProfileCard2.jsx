import React from "react";
import Card from "./Card2";

// 추가할 것 : 카드의 이미지와 다른 색 넣기(초록색 이외에)

function ProfileCard2(props){
    const profiles ={
        "Inje Lee": {
            name: "Inje Lee",
            description: "안녕하세요, 소플입니다.",
            image: "https://avatars.githubusercontent.com/u/68719429?v=4",
            backgroundColor: "green",
        },
        "리누스 토발즈": {
            name: "리누스 토발즈",
            description: "리누스 토발즈는 리눅스 커널을 만든 사람입니다.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Linus_Torvalds_OSCON_2014.jpg/220px-Linus_Torvalds_OSCON_2014.jpg",
            backgroundColor: "red",
        },
        "빌 게이츠": {
            name: "빌 게이츠",
            description: "빌 게이츠는 마이크로소프트를 만든 사람입니다.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Bill_Gates_June_2015.jpg/220px-Bill_Gates_June_2015.jpg",
            backgroundColor: "blue",
        },
    
    };

    return (
        <Card title={profiles.keys} backgroundColor={profiles.backgroundColor}>
            <img src={props.image} alt="profile" className="profile"/>
            <p>{props.name}</p>
            <p>{props.description}</p>
        </Card>
    );
}

export default ProfileCard2;