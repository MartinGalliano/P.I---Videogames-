import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import style from './NavBar.module.css' 

function NavBar() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
  }

  return (
    <div className={style.mainContainer}>
       <div className={style.h1}>     
       <h1>Gameland</h1>
       </div>
      <nav className={style.navContainer}>
        <div className={style.linkContainer}> 
          <Link to="/" className={style.hover}>Home</Link>
          <Link to="/home" className={style.hover}>Store</Link>
          <Link to="/create" className={style.hover}>Create Game</Link> 
        </div>
            
        <div>
          <form onSubmit={(e) => handleSubmit(e)} className={style.formContainer}>
            <div className={style.searchBarContainer}>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Search game..."
                type="text"
                className={style.input}>
              </input>
              <NavLink to={`/results/${name}`} className={style.search}>
                <button className={style.button} type="submit"> 🔍 </button>
              </NavLink>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}


export default NavBar;