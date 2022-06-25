export type Sort = {
  name: string;
  sortProperty: string;
};

export interface IFilterState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: Sort;
}
