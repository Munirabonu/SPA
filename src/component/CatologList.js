import CatologItem from "./CatologItem"
export default function CatologList({ catolog = [] }) {
    return (
        <div className='list'>
            {catolog.map(el => (
                <CatologItem key={el.idCategory} {...el} />
            ))}
            
        </div>
    )
}
