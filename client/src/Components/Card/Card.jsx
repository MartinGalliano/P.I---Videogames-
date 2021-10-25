import React from 'react';
import {Link} from 'react-router-dom';
import style from './Card.module.css';

function Card({data}) {
	return (
		<div className={style.card}>
			<Link to={`/videogames/${data.id}`}>
        	(<img className={style.img} src={data.image} alt={data.name} />)
			</Link>
			<div className={style.textCard}>
				<div className={style.nameGenres}>
					<div className={style.name}>{data.name}</div>
					<div className={style.genres}>{data.genres}</div>
				</div>
			</div>
		</div>
	);
}

export default Card;


