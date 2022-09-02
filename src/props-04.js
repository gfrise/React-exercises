import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
	render() {
		return <p>Hello, {this.props.name}!</p>
	}
}

class App extends React.Component {
	render() {
		return <Welcome name={<strong>Jimmy</strong>} />
	}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);