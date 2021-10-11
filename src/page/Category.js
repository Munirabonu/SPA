import { useEffect, useState } from "react";
import { useParams } from "react-router"
import Loader from "../component/Loader";
import { getFilterCategory } from "./api";
import MealsList from "../component/MealsList";

export default function Category() {
    const { name } = useParams()
    const [meals, setMeals] = useState([])

    useEffect(() => {
        getFilterCategory(name).then(data =>
            setMeals(data.meals)
        )
    }, [name])


    return (
        <>
            {!meals.length ? <Loader /> : <MealsList meals={meals} />
            }
        </>
    )
}
