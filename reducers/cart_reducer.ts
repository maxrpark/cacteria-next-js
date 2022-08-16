import { Actions } from "../ts/states/actions/cart_actions";
import { ActionsType } from "../ts/states/action-types";
import { CartInitialState } from "../ts/states/initialsStates/cartState";
import { cartItem } from "../ts/interfaces";

const cart_reducer = (state: CartInitialState, action: Actions) => {
  switch (action.type) {
    case ActionsType.ADD_TO_CART:
      const tempItem = state.cart.find(
        (item: cartItem) => item.id === action.payload.id
      );
      if (tempItem) {
        const tempCart = state.cart.map((item: cartItem) => {
          if (item.id === action.payload.id) {
            let newAmount = item.amount + action.payload.amount;
            console.log("amount updated");
            return { ...item, amount: newAmount };
          } else {
            return item;
          }
        });
        return { ...state, cart: tempCart };
      } else {
        return { ...state, cart: [...state.cart, action.payload] };
      }

    default:
      return state;
  }
};

export default cart_reducer;
