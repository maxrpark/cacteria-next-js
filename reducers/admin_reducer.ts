import { Actions } from "../ts/states/actions/admin_actions";
import { ActionsType } from "../ts/states/action-types/index";
import { AdminInitialState } from "../ts/states/initialsStates";

const admin_reducer = (
  state: AdminInitialState,
  action: Actions
): AdminInitialState => {
  switch (action.type) {
    case ActionsType.CHECK_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case ActionsType.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ActionsType.CHECK_USER_END:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default admin_reducer;
