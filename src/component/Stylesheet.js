import React from 'react'
import './style.css'
import style from './style.module.css';
const styleheaging = {
    fontSize: '100px'
}

function Stylesheet(props) {
    const logic = props.data ? 'primary' : '';

    return (<>
        <h1 style={styleheaging}> Style sheets </h1>
        <h1 className={style.error}>error</h1>
        <h1 className='sucess'>sucess</h1>
    </>

    )
}
export default Stylesheet