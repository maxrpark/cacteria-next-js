import { ActionsType } from "../action-types";
import { newsletterFieldsInt } from "../../interfaces";

export interface HandleFormInt {
  name: string;
  value: string;
  type: string;
}

interface HANDLE_FORM_INPUT {
  type: ActionsType.HANDLE_FORM_INPUT;
  payload: HandleFormInt;
}

export type Actions = HANDLE_FORM_INPUT;
