import React from 'react'

class Counter extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }


    render() {
        return (
            <>
                <h1>Hello WORLD count {this.count}</h1>
            </>
        );
    }

}

export default Counter;