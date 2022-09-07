import {
  newsletterFieldsInt,
  costumerCheckoutInfoInt,
  contactFormInfoInt,
  OrderInterface,
} from "../../interfaces";

export interface GlobalInitialState {
  isLoading: boolean;
  orderSucceeded: boolean;
  newsLetterFormValues: newsletterFieldsInt;
  costumerCheckoutInfo: costumerCheckoutInfoInt;
  contactFormValues: contactFormInfoInt;
}
