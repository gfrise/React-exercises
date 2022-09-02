import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
    render() {
        return <p>Welcome, {this.props.name}!</p>
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Welcome name="Bro"/>);