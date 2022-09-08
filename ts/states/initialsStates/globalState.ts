import {
  newsletterFieldsInt,
  costumerCheckoutInfoInt,
  contactFormInfoInt,
  OrderInterface,
  AlertMessageInt,
} from "../../interfaces";

export interface GlobalInitialState {
  isLoading: boolean;
  orderSucceeded: boolean;
  newsLetterFormValues: newsletterFieldsInt;
  costumerCheckoutInfo: costumerCheckoutInfoInt;
  contactFormValues: contactFormInfoInt;
  alertMessage: AlertMessageInt;
  showMessage: boolean;
}
