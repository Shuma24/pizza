import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { filterSelector } from '../../redux/slices/filter/selector';
import { setCurrentPage } from '../../redux/slices/filter/slice';
import styles from './Pagination.module.scss';

export const Pagination: React.FC = () => {
  const { currentPage } = useSelector(filterSelector);
  const dispatch = useDispatch();
  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => dispatch(setCurrentPage(e.selected + 1))}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null!}
        forcePage={currentPage - 1}
      />
    </>
  );
};
