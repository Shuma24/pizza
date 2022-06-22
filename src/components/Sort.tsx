import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort, filterSelector } from '../redux/slices/filterSlice';


type Values = {
  name: string,
  sortProperty: string
}

export const values: Values[] = [
  {
    name: 'популярності (DESC)',
    sortProperty: 'rating',
  },
  {
    name: 'популярності (ASC)',
    sortProperty: '-rating',
  },
  {
    name: 'ціні (DESC)',
    sortProperty: 'price',
  },
  {
    name: 'ціні (ASC)',
    sortProperty: '-price',
  },
  {
    name: 'алфавіту (DESC)',
    sortProperty: 'title',
  },
  {
    name: 'алфавіту (ASC)',
    sortProperty: '-title',
  },
];

export function Sort(): JSX.Element {
  //libs
  const dispatch = useDispatch();
  const sortRef = React.useRef<HTMLDivElement>(null);

  //values
  const { sort } = useSelector(filterSelector);
  const [open, setOpen] = React.useState<boolean>(false);

  //logic page
  const showHideSort = () => {
    setOpen(!open);
  };

  const selectValues = (obj: Values) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClick = (event: any) => {
      
      if (!event.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleClick);

    return () => document.body.removeEventListener('click', handleClick);
  }, []);

  //render
  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => showHideSort()}>{sort.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {values.map((obj, index) => {
              return (
                <li
                  key={index}
                  onClick={() => selectValues(obj)}
                  className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>
                  {obj.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}