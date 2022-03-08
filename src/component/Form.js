import React from 'react'


class Form extends React.Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
        }
    }
    usernameHandler = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    passwordHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    submitHandler = (e) => {
        alert(`${this.state.password} and ${this.state.username}`)
    }
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <lebel>User Name :</lebel>
                <input type='text' value={this.state.username} onChange={this.usernameHandler} /><br />
                <lebel>password : </lebel>
                <input type='text' value={this.state.password} onChange={this.passwordHandler} /><br />
                <lebel>select</lebel>
                <select>
                    <option>React</option>
                    <option>Angular</option>
                    <option>view</option>
                    <option>NodeJs</option>
                </select><br />
                <button>submit</button>
            </form>
        )
    }

}

export default Form;