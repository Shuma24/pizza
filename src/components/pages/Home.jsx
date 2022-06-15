import React from 'react';

import { PizzaBlock } from '../PizzaBlock/index';
import { Skeleton } from '../PizzaBlock/index';
import { Categories } from '../Categories';
import { Sort } from '../Sort';
import { Pagination } from '../Pagination/Pagination';
import { searchContext } from '../../App';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setFilters } from '../../redux/slices/filterSlice';
import { useSearchParams } from 'react-router-dom';
import { values } from '../Sort';

export const Home = () => {
  // redux and other lib
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();
  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const { searchPizza } = React.useContext(searchContext);
  const [searchParams, setSearchParams] = useSearchParams();

  // states
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  //custom func
  const setOnClickCategoryyId = (index) => {
    dispatch(setCategoryId(index));
  };

  //fetch all content
  React.useEffect(() => {
    setIsLoading(true);

    const order = sortType.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchPizza ? `&search=${searchPizza}` : '';

    fetch(
      `https://62a3ae4f21232ff9b22442a9.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setPizzas(data);
          setIsLoading(false);
        }
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchPizza, currentPage]);

  //query params

  React.useEffect(() => {
    let params = {
      sortType,
      categoryId,
      currentPage,
    };
    setSearchParams(params);
  }, [categoryId, sortType, currentPage]);

  React.useEffect(() => {
    const params = {
      sort: searchParams.get('sortType'),
      categoryId: searchParams.get('categoryId'),
      currentPage: searchParams.get('currentPage'),
    };

    const sort = values.find((obj) => obj.sortProperty === params.sort);
    dispatch(
      setFilters({
        ...params,
        sort,
      }),
    );
  }, []);

  //render
  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  const piazzaContent = pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} setId={(index) => setOnClickCategoryyId(index)} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : piazzaContent}</div>
      <Pagination setCurrentPage={(index) => setCurrentPage(index)} />
    </div>
  );
};
