import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import Loader from "../component/Loader"
import RecipeItem from "../component/RecipeItem"
import { getMealById } from "./api"
export default function Recipe() {
    const { id } = useParams()
    const [recipe, setRecipe] = useState([])
    const { goBack } = useHistory()

    useEffect(() => {
        getMealById(id).then(data =>
            setRecipe(data.meals[0]))
    }, [id])
    return (
        <div>
            <button className='btn go' onClick={goBack}>
                <i className='material-icons'>arrow_back</i>
                   Go Back</button>
            {!recipe.idMeal ? <Loader /> : <div>
                <div className="card _horizontal">
                    <div className="card_image">
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    </div>
                    <div className="card_content">
                        <h2>{recipe.strMeal}</h2>
                        <span><b>Category :</b> {recipe.strCategory}</span>
                        <p></p>
                        <p><b>Recipe:</b>  {recipe.strInstructions}</p>
                    </div>
                </div>

            </div>}
        </div>
    )
}
