import React from 'react';
import style from './Pagination.module.css';

export const Pagination = ({ videogamesPerPage, totalVideogames, paginate }) => {
  const pageNumbers = [];
  const numOfPages = Math.ceil(totalVideogames / videogamesPerPage)

  for (let i = 1; i <= numOfPages ; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={style.pagination}>
        {pageNumbers.map((num) => (
          <div key={num} className={style.item}>
            <button onClick={(e) => paginate(e, num)}>
              {num}
            </button>
          </div>
        ))}
    </nav>
  );
};

export default Pagination;