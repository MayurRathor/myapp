import React, { Component } from 'react'
import PureComponent_test from './PureComponent'
import NormalComponent from './NormalComponent'
import MwmoComponemt from './MwmoComponemt'
class ParentForPureComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'mayur'
        }
    }
    changeData = () => {
        this.setState({
            name: "rathord"
        })
    }

    render() {
        console.log('perent component')
        return (<>
            <MwmoComponemt test={this.state.name} />
            <PureComponent_test test={this.state.name} />
            <NormalComponent test={this.state.name} />
            <h1>calling to pure child component</h1>
            <button onClick={this.changeData}>click me please </button>
        </>

        )
    }
}

export default ParentForPureComponent;