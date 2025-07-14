import { useNavigate } from "react-router-dom"
import Banner from "../component/ui/Banner_s"
import Cards from "../component/ui/card"
import { useEffect, useState } from "react"
import axios from 'axios'

function Home() {


    const [datas,setData]=useState([])



    const getData = () => {
        try {
            axios.get('https://gastro-backend.e-aribt.com/api/services').then(res => {
                console.log(res.data.data)
                setData([...res.data.data])
            }).catch(err => {
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])


    const carddata = [

        {
            title: " Virat Kohli",
            description: "Thats why he is Goat",
            image: "https://tse3.mm.bing.net/th/id/OIP.VwUIxemJi5aTGBAatvD57AHaE4?rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        {
            title: " kl Rahul",
            description: "Prince who never became king",
            image: "https://tse4.mm.bing.net/th/id/OIP.XNlSEaUJrKAiUR9pdZlnbAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        {
            title: " Rohit Sharma",
            description: "vadhapao is tw secret of his energy",
            image: "https://wallpapers.com/images/hd/rohit-sharma-team-india-aav561pr0aorbsj5.jpg"

        }


    ]
    const navigation = useNavigate()
    const transfer = () => {
        navigation('/about')
    }
    return (<div>
        <Banner title="This" price=" is " location="Homepage" />
        {/* <button onClick={() => transfer()}>click me</button> */}

        <div className="grid grid-cols-3 gap-6">
            {
                datas.map((val, i) => {
                    return (<Cards title={val.title}
                        description={val.summary}
                        image={val?.coverImage?.url} key={i} />
                    )
                })
            }
        </div>

    </div>)
}

export default Home