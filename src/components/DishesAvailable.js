import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addDishToCart, removeDishFromCart } from "../actions";
import Customization from "./Customization";

export default ({ selected }) => {
  const dispatch = useDispatch();
  const { addedItems, totalItems } = useSelector(({ foodCart }) => foodCart);
  const [currentQunatityInCart, setCurrentQuantityInCart] = useState([]);

  useEffect(() => {
    setCurrentQuantityInCart(addedItems);
  }, [addedItems, totalItems]);

  return selected.category_dishes.map(
    ({
      dish_id,
      dish_image,
      dish_name,
      dish_calories,
      dish_price,
      dish_currency,
      dish_description,
      addonCat,
      dish_Type,
      dish_Availability,
    }) => (
      <div className='individual-dish-container' key={dish_id}>
        <div className='dish-details'>
          <div className='dish-name-and-type'>
            <div className={dish_Type === 2 ? "veg" : "non-veg"}>
              <div className={"circle"}></div>
            </div>
            <p>{dish_name}</p>
          </div>

          <div className='amount-and-calories'>
            <p className='currency'>
              {dish_currency} {dish_price}
            </p>
            <p className='calories'>{dish_calories} calories</p>
          </div>

          <div className='food-description'>{dish_description}</div>
          {dish_Availability ? (
            <div className='adding-btn'>
              <button
                className='neg'
                onClick={() => dispatch(removeDishFromCart(dish_id))}
              >
                -
              </button>
              <p>
                {currentQunatityInCart.find(({ dish_id: id }) => id === dish_id)
                  ? currentQunatityInCart.find(
                      ({ dish_id: id }) => id === dish_id
                    ).quantity
                  : 0}
              </p>

              <button
                onClick={() =>
                  dispatch(
                    addDishToCart({
                      dish_id,
                      menu_category_id: selected.menu_category_id,
                    })
                  )
                }
                className='pos'
              >
                +
              </button>
            </div>
          ) : (
            <p className='not-available'>Not available</p>
          )}
          <Customization addonCat={addonCat} />
        </div>
        <div className='dish-image'>
          <img src={dish_image} alt='dish' />
        </div>
      </div>
    )
  );
};
