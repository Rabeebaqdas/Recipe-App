import React from "react";
import style from './recipes.module.css';
const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
                <ul>
                    {
                        ingredients.map((obj,key)=>{
                            return(
                                <li key={key}>
                                    {obj.text}
                                </li>
                            )
                        })
                    }
                </ul>
            <h3>Calories:- {calories.toFixed(2)} J</h3>
             <img src={image} className={style.image} alt=" " />
        </div>
    );
    
}
export default Recipe;