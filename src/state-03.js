import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
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
        return <h1>{this.state.count}</h1>
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter firstValue={0} increment={1} interval={1000} />);