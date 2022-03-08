import React from 'react'
import BetaComponent from './BetaComponent'

class PapaComponent extends React.Component {

    constructor() {
        super();
        this.state = ({
            name: 'perent'
        })
        this.callLogic = this.callLogic.bind(this)
    }

    callLogic(x) {
        alert(`calling to petent method ${this.state.name} and data ${x}`)
    }

    render() {
        return <>
            <h1>Hiiiii Mayur</h1>
            <BetaComponent clickevent={this.callLogic} />

        </>
    }
}

export default PapaComponent;