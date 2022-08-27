import { ActionsType } from "../ts/states/action-types";
import { Actions } from "../ts/states/actions/global_actions";

const global_reducer = (state: any, action: Actions) => {
  switch (action.type) {
    case ActionsType.HANDLE_FORM_INPUT:
      const { name, value, type } = action.payload;
      let typeTempState = { ...state[type] };
      let updatedValues = {
        ...typeTempState,
        [name]: value,
      };

      return {
        ...state,
        [type]: updatedValues,
      };
    default:
      return state;
  }
};

export default global_reducer;
