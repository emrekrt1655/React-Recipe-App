import React, { useState,  } from "react";
import style from "./recipes.module.css";
import Modal from "./Modal";
const Recipe = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
 

  return (
    <>
      <div className={style.recipe} onClick={() => setIsOpen(true)}>
        <h1>{item.recipe.label}</h1>
        <p>{Math.floor(item.recipe.calories)} calories</p>
        <p>Prepariton: {item.recipe.totalTime} minutes</p>
        <img className={style.image} src={item.recipe.image} alt="img" />
        <p className={style.para}>Click to see the ingredients</p>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <h3>Ingredients</h3>
        {item?.recipe?.ingredients.map((ingredient) => (
          <li key={Math.random() * 123456}>{ingredient.text}</li>
        ))}
      </Modal>
    </>
  );
};

export default Recipe;
