import { OrderInterface } from "../../interfaces";

interface UserPayload {
  name: string;
  email: string;
  image: string;
}

export interface AdminInitialState {
  isLoading: boolean;
  showOrderModal: boolean;
  user: UserPayload | undefined;
  selectedOrder: OrderInterface | null;
}
