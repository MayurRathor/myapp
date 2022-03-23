import React from 'react'

function MwmoComponemt({ name }) {
    console.log('memo render')
    return (

        <div>MwmoComponemt {name}</div>
    )
}

export default React.memo(MwmoComponemt) 