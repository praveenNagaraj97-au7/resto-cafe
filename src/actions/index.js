import { CART } from "../constants";

const { ADD_DISH, REMOVE_DISH } = CART;

/**
 *
 * @param {dish_id,menu_category_id} payload
 */
export const addDishToCart = (payload) => ({
  type: ADD_DISH,
  payload,
});

/**
 *
 * @param {dish_id} id
 */
export const removeDishFromCart = (id) => ({ type: REMOVE_DISH, id });
