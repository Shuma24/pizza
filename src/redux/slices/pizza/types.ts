export type pizza = {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
};

export enum Status {
  PENDING = 'pending',
  FULLFILED = 'fulfilled',
  REJECTED = 'rejected',
}

export interface IPizzaState {
  pizza: pizza[];
  status: Status;
}

export interface Params {
  order: string;
  sortBy: string;
  category: string;
  search: string;
  currentPage: string;
}
