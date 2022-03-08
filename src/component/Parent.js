import React, { Component } from 'react'
import ChildComponent from './ChildComponent';
class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parentName: 'good morning sir'
        }
        this.greetMsg = this.greetMsg.bind(this)
    }
    greetMsg() {
        alert(`hello ${this.state.parentName}`)
    }
    render() {
        return (
            <div>
                <ChildComponent test={this.greetMsg} />
            </div>
        )
    }
}

export default Parent;