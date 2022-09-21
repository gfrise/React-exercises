import React from 'react';
import { Login } from './Login';

export class App extends React.Component {
    onLogin = (username, password, remember) => {
        console.log({
            username,
            password,
            remember
        });
    }

    render() {
        return (
            <>
                <Login onLogin={this.onLogin} />
            </>
        )
    }
}

