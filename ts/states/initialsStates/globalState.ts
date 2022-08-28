import { newsletterFieldsInt, costumerCheckoutInfoInt } from "../../interfaces";

export interface GlobalInitialState {
  isLoading: boolean;
  newsLetterFormValues: newsletterFieldsInt;
  costumerCheckoutInfo: costumerCheckoutInfoInt;
}
