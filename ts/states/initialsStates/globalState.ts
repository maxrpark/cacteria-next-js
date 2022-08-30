import {
  newsletterFieldsInt,
  costumerCheckoutInfoInt,
  contactFormInfoInt,
} from "../../interfaces";

export interface GlobalInitialState {
  isLoading: boolean;
  newsLetterFormValues: newsletterFieldsInt;
  costumerCheckoutInfo: costumerCheckoutInfoInt;
  contactFormValues: contactFormInfoInt;
}
