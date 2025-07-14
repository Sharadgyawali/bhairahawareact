import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
function Cards({ title, description, image }) {
    const navigate=useNavigate()
    return (
        <div className='grid gap-2 mx-9 shadow-md border border-gray-100'>
            <img src={image} className='h-60 rounded-xl w-full object-cover' />
            <div className="p-4">
                <h1 className="text-xl font-semibold capitilize">{title}</h1>
            </div>
            <div className="line-clamp-3">
                {description}
            </div>
            <div></div>
            <div  onClick={()=>{
                navigate(`/card/${title}`)
            }} className="border border-blue-400 bg-blue-400 text-white w-fit text blue-400 h-fit px-4 py-2 rounded-md">Read more</div>
        </div>

    )
}
export default Cards