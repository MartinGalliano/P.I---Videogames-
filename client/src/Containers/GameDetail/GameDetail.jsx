import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogameById } from '../../Actions/index';
import style from './GameDetail.module.css';

function GameDetail({ id }) {
    const dispatch = useDispatch();
    const videogame = useSelector((store) => store.searchVideogameById);

    useEffect(() => {
        dispatch(getVideogameById(id));
    }, []); 

    return (    
        <div className={style.full}>
            <div className={style.container}>
                <div className={style.cardContainer}>
                    <div className={style.header}>
                        <h2 className={style.info}>{videogame.name}</h2>
                         <img src={videogame.image} className={style.imagen} alt={videogame.name} /> 
                        <p className={style.info}>({videogame.released})</p>
                        <div className={style.paw}>
                        </div>
                        <p className={style.info}>Genres: {videogame.genres}</p>
                        <div className={style.paw}>
                        </div>
                        <p className={style.info}>Rating: {videogame.rating} points.</p>
                        <div className={style.paw}>
                        </div>
                        <p className={style.info}>Platforms: {videogame.platforms}.</p>
                    </div>
                    <div className={style.description}>
                        <p className={style.full}>
                            <strong>About this game:</strong>
                        </p>
                        <p>{videogame.description}</p>
                    </div>
                </div>
            </div>
            <Link to="/home">
                <button className={style.button} type="submit">To Store</button>
            </Link>
        </div>    
    );
}

export default GameDetail;