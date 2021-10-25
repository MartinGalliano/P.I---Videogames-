import React from 'react';
import {Link} from 'react-router-dom';
import style from './LandingPage.module.css';


function LandingPage() {
    return (
      <div className={style.landingpage}>
        <div className={style.msgContainer}>
          <p className={style.title}>GameLand</p>
          <p className={style.text}>The Store of Games</p>
        </div>
          <Link to='/home'>
            <button className={style.button} type='submit'>ACCESS</button>
          </Link>
      </div>
    );
}
  
export default LandingPage;