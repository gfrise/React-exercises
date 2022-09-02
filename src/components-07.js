import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
    render() {
        return <p>What a beautiful day</p>
    }
}

class Hello extends React.Component {
    render() {
        return (
            <>
                <h1>Hello World</h1>
                <Message />
            </>
            
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello />);