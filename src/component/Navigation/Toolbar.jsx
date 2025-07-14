import { Link, useLocation } from 'react-router-dom';
import { RxDropdownMenu } from "react-icons/rx";

function Toolbar() {
    const location = useLocation()
    const nav_items = [
        { title: "Home", path: '/' },
        { title: "About", path: '/about' },
        { title: "Contact", path: '##' },
        { title: "Blog", path: '##' },
        { title: "Event", path: '##' },
    ]

    return (


        <div className=' w-[100%] h-20 bg-blue-600 text-gray-300 font-semibold text-xl flex justify-between gap-8 items-center py-8 '>
            <h2>Training</h2>
            {nav_items.map((val, i) => {

                return (
                    <div><Link key={i} to={val.path}
                        className={`capatilize ${(location.pathname == val.path ? "text-red-600" : "text-white")}`}>{val.title}
                    </Link>
                        <div className={`h-1 bg-white ${location.pathname == val.path ? "w-full" : "w-0"} transition-all duration-700 delay-75 ease-in-out`}></div>

                    </div>
                )
            })}
<RxDropdownMenu />

        </div>

    )

}


export default Toolbar