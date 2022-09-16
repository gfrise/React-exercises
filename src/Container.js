import React from 'react';

export class Container extends React.Component {
    render() {
        const styles = {
            backgroundColor: 'azure',
            border: '1px solid green',
        }
        return <div style={styles}>{this.props.children}</div> 
    }
}