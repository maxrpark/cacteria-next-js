import { ActionsType } from "../action-types";

interface SET_USER {
  type: ActionsType.SET_USER;
  payload: any;
}

interface CHECK_USER_START {
  type: ActionsType.CHECK_USER_START;
}
interface CHECK_USER_END {
  type: ActionsType.CHECK_USER_END;
}

export type Actions = SET_USER | CHECK_USER_START | CHECK_USER_END;
