import React, { Component } from 'react'

class LifeCycle extends Component {
    constructor(props) {
        super(props)
        console.log('constructor 1')
        this.state = {
            name: "mayur"
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedstateFromProps 2')
        return null
    }
    componentDidMount() {
        console.log('componentDidMount 3')
    }
    shouldComponentUpdate(nextProp, nextState) {
        console.log('ShouldComponentUpdate 4')
        return true;
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate 5')
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapShortBeforUpdate 6')
        return null
    }
    componentWillUnmount() {
        console.log('componentWillUnmount 7')
    }


    changeOnClick = () => {
        this.setState({
            name: 'rathor'
        })
    }
    render() {
        console.log('render 8')
        return (<>
            <button onClick={this.changeOnClick}>click me </button>
            <div>LifeCycle</div>
        </>
        )
    }
}

export default LifeCycle;