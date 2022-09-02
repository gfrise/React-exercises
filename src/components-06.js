import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    render() {
        return (
            <>
                <h1>Hello World</h1>
                <p>"What a beautiful day"</p>
            </>
            
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello />);