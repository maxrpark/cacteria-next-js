import { Actions } from "../ts/states/actions/cart_actions";
import { ActionsType } from "../ts/states/action-types";
import { CartInitialState } from "../ts/states/initialsStates/cartState";

const cart_reducer = (state: CartInitialState, action: Actions) => {
  switch (action.type) {
    case ActionsType.ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};

export default cart_reducer;
