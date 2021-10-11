import { useEffect, useState } from "react"
import { getAllCategories } from "./api"
import Loader from "../component/Loader"
import CatologList from "../component/CatologList"

export default function Home() {
    const [catolog, setCatolog] =useState([])

    useEffect(() => {
        getAllCategories().then(data => {
            setCatolog(data.categories)
        })
    }, [])


    return (
        <div>
            {!catolog.length ? (
                <Loader /> 
            ):
            <CatologList catolog={catolog} />
            }
        </div>
    )
}
