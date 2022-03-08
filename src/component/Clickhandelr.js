import React, { useState } from "react";

function ClickHandeler() {

    const { count, setCount } = useState();

    function changeMsg() {

        console.log('function component click')
    }
    return <>
        <button onClick={changeMsg}>button for functional component</button>
        <h1>{count}</h1>
    </>
}

export default ClickHandeler;