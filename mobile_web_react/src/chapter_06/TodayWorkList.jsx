import React from "react";
import TodayWork from "./TodayWork";

const reserveNotifications = [
    {
        id: 1,
        message: "안녕하세요. 오늘 일정을 알려드립니다."
    },
    {
        id: 2,
        message: "오늘 강의는 모바일웹입니다."
    },
    {
        id: 3,
        message: "이제 곧 수업이 시작됩니다."
    },
];

var timer;

class TodayWorkList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const {notifications} = this.state;
        timer = setInterval(() => {
            if (notifications.length < reserveNotifications.length) {
                const index = notifications.length;
                notifications.push(reserveNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return <TodayWork
                        key = {notification.id}
                        id = {notification.id} 
                        message={notification.message} 
                        />;
                })}
            </div>
        );
    }
}

export default TodayWorkList;