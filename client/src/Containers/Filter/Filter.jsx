import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGenres, filterByGenre, orderByCreator, orderAsc, orderDesc } from '../../Actions/index.js';
import style from "./Filter.module.css";


export function Filter() {
    const dispatch = useDispatch()
    const genres = useSelector(store => store.genres);
    
    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch]);

    //Filtrar x genero
    const handleFilter = (e) => {
        dispatch(filterByGenre(e.target.value))
    }

    //Filtrar x API/BD
    const handleCreator = (e) => {
        if(e.target.value === "API" || e.target.value === "Created") {
            dispatch(orderByCreator(e.target.value))
        } else {
            dispatch(filterByGenre(e.target.value))
        }
    }
    
    

      // Ordenado
  const handleOrder = (e) => {
    if (e.target.value === "asc_name" || e.target.value === "asc_rating") {
      dispatch(orderAsc(e.target.value));
    } else if (e.target.value === "desc_name" || e.target.value === "desc_rating") {
      dispatch(orderDesc(e.target.value));
    } else {
      dispatch(filterByGenre(e.target.value));
    }
  };

    return (
        <div className={style.filter}>
            <div>
                <div>Genres</div>
                <select onChange={(e) => handleFilter(e)}>    
                <option default>Genres..</option>
                {genres.map((G) => (
                <option value={G.name}>{G.name}</option>
                ))}
                </select>
            </div>
            <div>Sorted by</div>
            <select onChange={(e) => handleOrder(e)}>
                <option value="All" default>Sorted by..</option>
                <option value="asc_name">Alphabetically (A-Z)</option>
                <option value="desc_name">Alphabetically (Z-A)</option>
                <option value="asc_rating">Rating (Lower-Higher)</option>
                <option value="desc_rating">Rating (Higher-Lower)</option>
            </select>
            <div>
                <div>Created</div>
                <select onChange={(e) => handleCreator(e)} >
                <option default>Createds..</option>
                <option value="Created">User videogames</option>
                </select>
            </div>
        </div>
    )    
}


export default Filter;