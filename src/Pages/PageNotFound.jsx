import React, { useState } from 'react'

function PageNotFound() {
    const [b, setb] = useState(0)
    const [ClickHere,setClickHere]= usestate(" ");

    return (
        <div>
            <button onClick={()=>setb(b + 1)}>Change the number</button>
            <div>{b}</div>
            <button onClick={()=>{
                setClickHere("you click here")
            }}> CLICK</button>
        <div>{ClickHere}</div>
        
        </div>
    )
}

export default PageNotFound