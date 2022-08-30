export interface newsletterFieldsInt {
  name: string;
  email: string;
}
export interface costumerCheckoutInfoInt extends newsletterFieldsInt {}

export interface contactFormInfoInt extends newsletterFieldsInt {
  subject: string;
  content: string;
}
