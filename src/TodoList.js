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

    handleClick = (el) => {
        this.setState((state) => {
            return {
                items: this.state.items.filter((item, index) => index !== el),
            }
        })
    }

    handleSubmit = (event) => {
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
                <form onSubmit={this.handleSubmit} onReset={this.reset}>
                    <input name='inputfield'/>
                    <button type='submit'/>Submit<button/>
                    <button type='reset'>Reset</button>
                </form>
                <ul>
                    {this.state.items.map((item, index) => <li key={index}>{item} <button onClick={() => this.handleClick(index)}>delete</button></li>)}
                </ul>
            </>
        )
    }
}