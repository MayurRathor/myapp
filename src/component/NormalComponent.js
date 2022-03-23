import React, { Component } from 'react'

class NormalComponent extends Component {
    render() {
        console.log('Normal component')
        return (
            <div>NormalComponent {this.props.test}</div>
        )
    }
}
export default NormalComponent;
