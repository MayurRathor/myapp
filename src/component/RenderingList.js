import React from 'react'
import DataList from './DataList'

const Rendering = () => {
    const data = ['mayur', 'swraj', 'pratik', 'sukanya']
    const list = data.map((name, i) => <DataList key={i} data={name} />)

    return <> {list} </>
}
export default Rendering;