import React from 'react';

class Testing extends React.Component {

    constructor() {
        super();
        console.log(this)
        this.state = {
            age: 31,
            school: 'collage'
        }
    }
    changeAge = () => {

        this.setState((oldVal) => ({
            age: oldVal.age + 1
        })
        )
    }
    render() {
        return <>
            <h1>Hello my name is {this.props.name} and title is {this.props.title} age is {this.state.age} study from {this.state.school}</h1>
            <h2>age is {this.state.age} </h2>
            <button onClick={this.changeAge}>Subscribbe to click me increase the age </button>
        </>
    }
}

export default Testing;