import React, { useEffect, useState } from "react";
import "../../styles/ShoppingList.css";

const ShoppingList = () => {
  const [food, setFood] = useState("");

  const handleInput = (e) => {
    console.log(e.target.value);
    setFood(food);
  };

  useEffect(() => {
    if(food.length >= 2){

    }
  },[food]);

  return (
    <div>
      <h1>My Shopping List</h1>
      <div>
        <input type="text" value={food} onChange={handleInput} />
      </div>

      <div className="shopping-list"></div>
      <div className="bucket"></div>
    </div>
  );
};

export default ShoppingList;
