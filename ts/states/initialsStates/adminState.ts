import { OrderInterface } from "../../interfaces";

export interface AdminInitialState {
  isLoading: boolean;
  showOrderModal: boolean;
  user: any;
  selectedOrder: OrderInterface | null;
}
