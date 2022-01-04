import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  {getVideogames,resetAll } from '../../Actions/index';
import Videogames from '../../Components/Videogame/Videogame';
import Pagination from '../../Components/Pagination/Pagination';
import Filter from '../Filter/Filter';
import style from './Home.module.css';

function Home() {
  const dispatch = useDispatch();

  const filteredVideogames = useSelector((state) => state.filteredVideogames);
  const filterBy = useSelector((state) => state.filterBy);
  const orderBy = useSelector((state) => state.orderBy);
  const videogames = useSelector((state) => state.videogames);

  useEffect(() => {
    dispatch (resetAll());
    dispatch(getVideogames());
  }, [dispatch]);

// Filtrado y Ordenado
  let allVideogames;
  filterBy === "All" && orderBy === "Select"
    ? (allVideogames = videogames)
    : (allVideogames = filteredVideogames);

// Paginacion
  function paginate(e, num) {
    e.preventDefault();
    setPage(num);
  }

  const [page, setPage] = useState(1);
  const [videogamesPerPage] = useState(15);

  let lastCardPerPage = page * videogamesPerPage;
  let firtsCardPerPage = lastCardPerPage - videogamesPerPage;
  let currentPageGames = allVideogames.slice(firtsCardPerPage, lastCardPerPage);

  return (
    <div >
      <Filter paginate={paginate} />
      <div className={style.home}>
        <Videogames videogames={currentPageGames} />
      </div>
      <div>
        <Pagination
          videogamesPerPage={videogamesPerPage}
          totalVideogames={allVideogames.length}
          paginate={paginate}
        />
      </div>  
    </div>
  );
};
  
  
export default Home;