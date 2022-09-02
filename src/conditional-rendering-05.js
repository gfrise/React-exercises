import React from 'react';
import ReactDOM from 'react-dom';

 class Age extends React.Component {
	render() {
		return this.props.age > 18 ? <p>Your age is {this.props.age}</p> : <p>You are very young</p>
	}
}

class Welcome extends React.Component {
	render() {
		return (
			<>
				<p>Hello, {this.props.name}!</p>
                <Age age={this.props.age} />
			</>
		)
	}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Welcome name={"Bro"} age={23}/>);