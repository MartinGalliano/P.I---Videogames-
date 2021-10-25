import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { searchVideogames } from '../../Actions/index';
import Videogames from '../../Components/Videogame/Videogame';
import Pagination from '../../Components/Pagination/Pagination';
import style from "./Search.module.css";


export default function Search() {
    const dispatch = useDispatch();
    let { name } = useParams()
  
    const searchVideogame = useSelector((state) => state.searchVideogameByName);
  
    useEffect(() => {
      dispatch(searchVideogames(name));
    }, [name]); // eslint-disable-line react-hooks/exhaustive-deps
    
    // Paginacion
    function paginate(e, num) {
      e.preventDefault();
      setPage(num);
    }
  
    const [page, setPage] = useState(1);
    const [videogamesPerPage] = useState(15);// lo que se muestra en pagina
  
    let lastCardPerPage = page * videogamesPerPage;// el ultimo indice (posittion) el game que renderizo
    let firtsCardPerPage = lastCardPerPage - videogamesPerPage;// resto los caracteres qe muetro por pagina  15
    let currentPageGames = searchVideogame.slice(firtsCardPerPage, lastCardPerPage);
   //esta const me guarda cuales son los games que tengo que renderizar dependiendo de la pagina
   


    return (
      <div className={style.search}>
          {searchVideogame.length > 0 ?
          <>
            <h1>Results with {name}!</h1>
            <Videogames videogames={currentPageGames} />
            <Pagination
              videogamesPerPage={videogamesPerPage}
              totalVideogames={searchVideogame.length}
              paginate={paginate}
            />
          </>
          : <h1></h1>
          }
      </div>
    )
  };