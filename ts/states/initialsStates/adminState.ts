import { OrderInterface } from "../../interfaces";

export interface AdminInitialState {
  isLoading: boolean;
  user: any;
  selectedOrder: OrderInterface | null;
}
