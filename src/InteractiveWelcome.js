import React from 'react';
import { Welcome } from './Welcome.js';

export class InteractiveWelcome extends React.Component {
    state = {
        name: null,
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    render() {
        return (
            <>
                <input onChange={this.handleChange} value={this.state.name} />
                <Welcome name={this.state.name} />
            </>
        )
    }
}