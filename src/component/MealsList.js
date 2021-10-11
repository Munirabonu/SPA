 import MealsItem from './MealsItem'

export default function MealsList({meals}) {
    return (
        <div className='list'>
            {meals.map(el => (
                <MealsItem key={el.idMeal} {...el} />
            ))}
        </div>
    )
}
