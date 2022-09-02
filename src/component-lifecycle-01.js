import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
    state = {
        count: 0
    }

    componentDidMount() {
        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count +1,
                }
            })
        }, 1000)
    }

    render() {
        return <h1>{this.state.count}</h1>
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);