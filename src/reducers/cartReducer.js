import { CART } from "../constants";

const { ADD_DISH, REMOVE_DISH } = CART;

export default (state = { addedItems: [], totalItems: 0 }, action) => {
  switch (action.type) {
    case ADD_DISH:
      if (state.addedItems.length) {
        const alreadyExist = state.addedItems.find(
          ({ dish_id }) => dish_id === action.payload.dish_id
        );
        if (alreadyExist) {
          alreadyExist.quantity += 1;
          state.totalItems += 1;
          return { ...state };
        }
      }
      state.addedItems = [
        ...state.addedItems,
        { ...action.payload, quantity: 1 },
      ];
      state.totalItems += 1;

      return {
        ...state,
      };

    case REMOVE_DISH:
      if (state.addedItems.length) {
        const alreadyExist = state.addedItems.find(
          ({ dish_id }) => dish_id === action.id
        );
        if (alreadyExist) {
          state.totalItems -= 1;
          if (alreadyExist.quantity === 1) {
            state.addedItems = state.addedItems.filter(
              ({ dish_id }) => dish_id !== action.id
            );
            return { ...state };
          }
          alreadyExist.quantity -= 1;
          return { ...state };
        }
      }

      state.addedItems = state.addedItems.filter(
        ({ dish_id }) => dish_id !== action.id
      );
      state.totalItems -= 1;

      return { ...state };

    default:
      return state;
  }
};
