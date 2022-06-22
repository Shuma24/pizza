import React from 'react';

import { PizzaBlock } from '../PizzaBlock/index';
import { Skeleton } from '../PizzaBlock/index';
import { Categories } from '../Categories';
import { Sort } from '../Sort';
import { Pagination } from '../Pagination/Pagination';
import { useSelector } from 'react-redux';
import {
  filterSelector,
  setCategoryId,
  setFilters,
  sortTypeSelector,
} from '../../redux/slices/filterSlice';
import { fetchPizzas, pizzaSelector } from '../../redux/slices/pizzaSlice';
import { useSearchParams } from 'react-router-dom';
import { values } from '../Sort';
import { useAppDispatch } from '../../redux/store';

export const Home: React.FC = () => {
  // redux and other lib
  const { categoryId, currentPage, searchValue } = useSelector(filterSelector);
  const dispatch = useAppDispatch();
  const sortType = useSelector(sortTypeSelector);
  const [searchParams, setSearchParams] = useSearchParams();
  const { pizza, status } = useSelector(pizzaSelector);

  // states
  const isMounted = React.useRef<boolean>(false);

  //custom func
  const setOnClickCategoryyId = (index: number) => {
    dispatch(setCategoryId(index));
  };

  //fetch all content
  React.useEffect(() => {
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchPizzas({
        order,
        sortBy,
        category,
        search,
        currentPage: String(currentPage),
      }),
    );

    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sortType, searchValue, currentPage]);

  //query params

  React.useEffect(() => {
    if (isMounted.current) {
      let params:any = {
        sortType,
        categoryId,
        currentPage,
        searchValue,
      };
      setSearchParams(params);
    }

    isMounted.current = true;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sortType, currentPage, searchValue]);

  React.useEffect(() => {
    if (
      searchParams.has('sortType') &&
      searchParams.has('categoryId') &&
      searchParams.has('currentPage') &&
      searchParams.has('searchValue')
    ) {
      const params = {
        sort: searchParams.get('sortType'),
        categoryId: searchParams.get('categoryId'),
        currentPage: searchParams.get('currentPage'),
        searchValue: searchParams.get('searchValue'),
      };

      const sort = values.find((obj) => obj.sortProperty === params.sort);

      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //render
  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  const piazzaContent = pizza.map((pizza: any) => <PizzaBlock key={pizza.id} {...pizza} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categoryId={categoryId}
          setId={(index: number) => setOnClickCategoryyId(index)}
        />
        <Sort />
      </div>
      <h2 className="content__title">Всі піцци</h2>
      {status === 'rejected' ? (
        <div className="content__error-info">
          <h2>Виникла помилка 😕</h2>
          <p>Упс, нажаль піцци відсутні, спробуйте пізніше</p>
        </div>
      ) : (
        <div className="content__items">{status === 'pending' ? skeleton : piazzaContent}</div>
      )}
      <Pagination />
    </div>
  );
};
