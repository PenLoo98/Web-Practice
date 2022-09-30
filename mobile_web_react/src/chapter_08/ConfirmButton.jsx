import React from "react";

class ConfirmButton extends React.Component {
    // 방법 1
    
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         isConfirmed: false,
    //     };
    //     this.handleConfirm = this.handleConfirm.bind(this);
    // }

    // handleConfirm() {
    //     this.setState((prevState) => ({
    //         isConfirmed: !prevState.isConfirmed,
    //     }));
    // }

    // 방법 2 - 클래스 필드 문법
    constructor(props) {
        super(props);

        this.state = {
            isConfirmed: false,
        };
    }

    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render() {
        return (
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default ConfirmButton;