export interface IFood {
  foodName: string;
  foodImage: string;
  price: number;
  rating: number;
  isActive: string;
}

export interface interfaceIResponse {
  data: IFood[];
  status: number;
  message: string;
}
export interface initialState {
  data: interfaceIResponse;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}
