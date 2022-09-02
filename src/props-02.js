import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
	render() {
		return <p>Hello, {this.props.name}!</p>
	}
}

// If no name prop is passed, the component is rendered with no name value

class App extends React.Component {
	render() {
		return <Welcome />
	}
}

// to pass default values:

Welcome.defaultProps = {
	name: 'Giuseppe'
}