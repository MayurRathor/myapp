
import React, { Component } from "react";

class ClassWithState extends Component {

    constructor() {
        super()
        this.state = {
            name: 'this is the initial state data'
        }
    }
    changeMessage() {
        this.setState({
            name: 'clicked cooooool'
        })
    }
    render() {
        return (
            <>
                <h1>{this.state.name} </h1>
                <button onClick={() => this.changeMessage()}> click me to change the content </button>
            </>
        )
    }

}

export default ClassWithState;