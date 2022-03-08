import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={props.greetMsg}>click me to greet</button>
        </div>
    )
}
export default ChildComponent;