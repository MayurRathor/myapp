import React from 'react';

const Greet = (prop) => {
    return <>
        <h1>Hi {prop.name} Good mornign functional component</h1>
        {prop.children}
    </>
}
export default Greet;

