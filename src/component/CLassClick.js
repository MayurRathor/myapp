import React, { Component } from 'react'

export class CLassClick extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.changemessage = this.changemessage.bind(this)
    }
    // changemessage() {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    //     console.log()
    changemessage = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (<>
            <button onClick={this.changemessage}>Button for Class component</button>
            <h1>{this.state.count}</h1>
        </>

        )
    }
}

export default CLassClick