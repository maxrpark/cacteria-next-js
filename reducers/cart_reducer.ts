import { Actions } from "../ts/states/actions/cart_actions";
import { ActionsType } from "../ts/states/action-types";
import { CartInitialState } from "../ts/states/initialsStates/cartState";
import { CartItemInt } from "../ts/interfaces/interfaces";

const cart_reducer = (state: CartInitialState, action: Actions) => {
  switch (action.type) {
    case ActionsType.ADD_TO_CART:
      const tempItem = state.cart.find(
        (item: CartItemInt) => item.id === action.payload.id
      );
      if (tempItem) {
        const tempCart = state.cart.map((item: CartItemInt) => {
          if (item.id === action.payload.id) {
            let newAmount = item.amount + action.payload.amount;
            return { ...item, amount: newAmount };
          } else {
            return item;
          }
        });
        return { ...state, cart: tempCart };
      } else {
        return { ...state, cart: [...state.cart, action.payload] };
      }

    case ActionsType.REMOVE_CART_ITEM:
      state.cart = state.cart.filter(
        (item: CartItemInt) => item.id !== action.payload
      );
      return { ...state };

    case ActionsType.TOGGLE_ITEM_AMOUNT:
      const { id, type } = action.payload;

      const updatedCart = state.cart.map((item: CartItemInt) => {
        if (item.id === id) {
          if (type === "inc") {
            let newAmount = item.amount + 1;
            return { ...item, amount: newAmount };
          } else if (type === "dec") {
            let newAmount = item.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...item, amount: newAmount };
          }
          console.log(item);
        }

        return { ...item };
      });

      console.log(updatedCart);

      return { ...state, cart: updatedCart };

    case ActionsType.CLEAR_CART:
      return { ...state, cart: [] };

    case ActionsType.COUNT_CART_TOTALS:
      const { total_amount, total_items } = state.cart.reduce(
        (
          total: { total_amount: number; total_items: number },
          item: CartItemInt
        ) => {
          const { amount, price } = item;
          total.total_items += amount;
          total.total_amount += +price * amount;
          return total;
        },
        {
          total_items: 0,
          total_amount: 0,
        }
      );
      return { ...state, total_amount, total_items };

    default:
      return state;
  }
};

export default cart_reducer;
