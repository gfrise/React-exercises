import React from 'react';

export class TodoList extends React.Component {
    state = {
        items: [],
    }

    handleClick = (event) => {
        event.preventDefault()

        const inputAdded = event.target.elements.inputfield.value

        this.setState((state) => {
            return {
                items: [...this.state.items, inputAdded]
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
                <button type='submit' onClick={this.handleClick}/>
            </>
        )
    }
}