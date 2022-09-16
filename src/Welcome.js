import React from 'react';

export class Welcome extends React.Component {
    render() {
        return (
            <>
                <p className='welcome'>Welcome {this.props.name}</p>
            </>
        )
    }
}