import React from 'react';

export class ClickTracker extends React.Component {
    state = {
        clickedButton: null,
    }

    handleClick = (event) => {
        this.setState({
            clickedButton: event.target.name,
        })
    }

    render() {
        return (
            <>
                <h1>{this.state.clickedButton}</h1>
                <button name="num1" onClick={this.handleClick}>Number one</button>
                <button name="num2" onClick={this.handleClick}>Number two</button>
                <button name="num3" onClick={this.handleClick}>Number three</button>
            </>
        )
    }
}
