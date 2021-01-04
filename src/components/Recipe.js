import React from 'react'
import style from './recipes.module.css'
const Recipe = ({item}) => {
    return (
        <div className={style.recipe}>
            <h1>{item.recipe.label}</h1>
          
                {
                    item?.recipe?.ingredients.map(ingredient => (
                        <li key={Math.random()* 123456}>
                            {ingredient.text}
                        </li>
                    ))
                }
            
            <p>{Math.floor(item.recipe.calories)} calories</p>
            <img className={style.image} src={item.recipe.image} alt="img"/>
        </div>
    )
}

export default Recipe
