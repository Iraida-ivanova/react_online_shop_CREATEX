import CategoryCard from "../CategoryCard/CategoryCard";
import './CategoryCardList.css'

function CategoryCardList({categoryCardList}) {
    return (
        <div className='category-card-list p17' >
            {
                categoryCardList.map(item => {
                        return (
                            <div className='category-card-list__item' key={item.id}>
                                <CategoryCard id={item.id}
                                             title={item.title}
                                             image={item.image}
                                              category={item.category}
                                />
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default CategoryCardList
