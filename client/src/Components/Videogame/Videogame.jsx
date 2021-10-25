import React from 'react';
import Card from '../Card/Card';
import style from './Videogame.module.css';
import load from './../../img/load.gif';

export default function Videogames ({videogames}) {
  return (
    <div className={style.show} >
      {videogames.length > 0 ?
          videogames.map((data) => (<Card data={data} />))
          : <img src={load} alt="Link caido"/>
      }
    </div>
  );
};