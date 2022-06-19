import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterSelector, setSearch } from '../../redux/slices/filterSlice';
import styles from './search.module.scss';

export const Search = () => {
  //redux
  const { searchValue } = useSelector(filterSelector);
  const dispatch = useDispatch();

  //basic logic
  const clearInput = () => {
    return dispatch(setSearch(''));
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        height="32px"
        version="1.1"
        viewBox="0 0 32 32"
        width="32px"
        xmlns="http://www.w3.org/2000/svg">
        <title />
        <desc />
        <defs />
        <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
          <g fill="#929292" id="icon-111-search">
            <path
              d="M19.4271164,21.4271164 C18.0372495,22.4174803 16.3366522,23 14.5,23 C9.80557939,23 6,19.1944206 6,14.5 C6,9.80557939 9.80557939,6 14.5,6 C19.1944206,6 23,9.80557939 23,14.5 C23,16.3366522 22.4174803,18.0372495 21.4271164,19.4271164 L27.0119176,25.0119176 C27.5621186,25.5621186 27.5575313,26.4424687 27.0117185,26.9882815 L26.9882815,27.0117185 C26.4438648,27.5561352 25.5576204,27.5576204 25.0119176,27.0119176 L19.4271164,21.4271164 L19.4271164,21.4271164 Z M14.5,21 C18.0898511,21 21,18.0898511 21,14.5 C21,10.9101489 18.0898511,8 14.5,8 C10.9101489,8 8,10.9101489 8,14.5 C8,18.0898511 10.9101489,21 14.5,21 L14.5,21 Z"
              id="search"
            />
          </g>
        </g>
      </svg>
      <input
        className={styles.input}
        placeholder="Пошук смачненької піцци"
        value={searchValue}
        onChange={(e) => dispatch(setSearch(e.target.value))}></input>
      {searchValue && (
        <svg
          className={styles.closeIcon}
          onClick={() => clearInput()}
          data-name="Capa 1"
          id="Capa_1"
          viewBox="0 0 20 19.84"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z" />
        </svg>
      )}
    </div>
  );
};
