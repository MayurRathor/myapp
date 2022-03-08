import React from 'react';

function BetaComponent(props) {
    let x = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return <>
        <button onClick={() => props.clickevent(x)}> click me please </button>
    </>
}

export default BetaComponent;