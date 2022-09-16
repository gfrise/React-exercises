import React from 'react';

export class TodoList extends React.Component {
    state = {
        items: [],
    }

    reset = () => {
        event.preventDefault()
        this.setState({
            items: []
        })
    }

    handleClick = (event) => {
        event.preventDefault()

        const inputAdded = event.target.elements.inputfield.value

        this.setState((state) => {
            return {
                items: [...this.state.items, inputAdded]
            }, () => {
                inputAdded = ''
            }
        })
    }

    render () {
        return (
            <>
                <ul>
                    {this.state.items.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <input name='inputfield'/>
                <button onClick={this.handleClick}/>
                <input name='resetter' type='reset' onClick={this.reset}>Reset</input>
            </>
        )
    }
}
