import React from 'react';

class Conditional extends React.Component {

    constructor() {
        super();
        this.state = {
            isLogin: false
        }
    }
    render() {
        return this.state.isLogin ? (<h1>Hi Mayur</h1>) : (<h1>Hi rathor</h1>)
    }
}

export default Conditional;