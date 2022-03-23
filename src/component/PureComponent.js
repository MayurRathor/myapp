import React, { PureComponent } from 'react'

class PureComponent_test extends PureComponent {
    render() {
        console.log('Pure component')
        return (
            <div>Component {this.props.test}</div>
        )
    }
}

export default PureComponent_test