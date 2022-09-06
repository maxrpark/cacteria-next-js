import { ActionsType } from "../ts/states/action-types";
import { Actions } from "../ts/states/actions/global_actions";
import { GlobalInitialState } from "../ts/states/initialsStates";

const global_reducer = (
  state: GlobalInitialState,
  action: Actions
): GlobalInitialState => {
  switch (action.type) {
    case ActionsType.HANDLE_FORM_INPUT:
      const { name, value, type } = action.payload;
      //@ts-ignore
      let typeTempState = { ...state[type] };
      let updatedValues = {
        ...typeTempState,
        [name]: value,
      };

      return {
        ...state,
        [type]: updatedValues,
      };

    case ActionsType.FORM_SUBMITTED:
      return {
        ...state,
        isLoading: true,
      };
    case ActionsType.ORDER_SUCCESS:
      return {
        ...state,
        orderSucceeded: true,
      };
    case ActionsType.NEWSLETTER_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        newsLetterFormValues: {
          name: "",
          email: "",
        },
      };
    case ActionsType.NEWSLETTER_SUBSCRIPTION_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default global_reducer;
