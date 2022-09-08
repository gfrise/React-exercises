import React from 'react';
import { CounterDisplay } from './CounterDisplay.js';

export class Counter extends React.Component {
    state = {
        count: this.props.firstValue
    }

    constructor(props) {
        super(props);
        
        setInterval(() => {
            this.setState((state, props) => {
                return {
                    count: state.count + this.props.increment,
                }
            })
        }, props.interval)
    } 

    render() {
        return <CounterDisplay count={this.state.count} />
    }
}