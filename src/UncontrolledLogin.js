import React, { createRef } from 'react';

export class UncontrolledLogin extends React.Component {
    _ref = createRef();

    state = {
        disabled: false,
    }

    componentDidMount() {
		this._ref.current.elements.username.focus()
	}

    handleSubmit = event => {
        event.preventDefault()
        const name = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const remember = event.target.elements.checkbox.value;
        this.props.onLogin({name, password, remember})
    }

    handle = () => {
        const name = this._formRef.current.elements.username.value
        const password = this._formRef.current.elements.password.value
        this.setState({
            disabled: !!username && !!password,
        })
    }

    render() {
        return (
            <>
                <form ref={this._ref} onSubmit={this.handleSubmit}>
                    <input name="username" onChange={this.handle} />
                    <input name="password" type="password" onChange={this.handle} />
                    <input name="checkbox" type="checkbox"  />
                    <input name="submit" type="submit" disabled={!this.state.disabled}>Login</input>
                    <input name="reset" type="reset" onClick={this.handleReset}/>
                </form>
            </>
        )
    }
}