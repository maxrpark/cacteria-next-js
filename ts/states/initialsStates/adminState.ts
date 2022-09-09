import { OrderInterface, UserPayload } from "../../interfaces";

export interface AdminInitialState {
  isLoading: boolean;
  showOrderModal: boolean;
  user: UserPayload | undefined;
  selectedOrder: OrderInterface | null;
}
