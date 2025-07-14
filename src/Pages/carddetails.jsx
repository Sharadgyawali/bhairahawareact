import React from "react";
import{ useParams } from 'react-router-dom'
function CardDetails() {
    const params = useParams();
    console.log(params)
    return (
        <div className="pt-8">
        {params.id}
        </div>
    )
}
export default CardDetails