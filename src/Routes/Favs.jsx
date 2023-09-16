import React from "react";
import Card from "../Components/Card";
import { useContext } from "../Context/Context";
import { getFav } from "../Context/localStorage.service";
import { ContextGlobal } from "../Context/Context";


// componente debe ser estilizado como dark o light

const Favs = () => {
  const { theme } = useContext(ContextGlobal);
  const darkMode = theme === "dark" || false;
  const localFavs = getFav();



  return (
    <>
      <div
        className={`${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
        <h1>Favs</h1>
        
        <div className="card-grid container">
          {localFavs.length ? localFavs.map((favoriteDentist) => (
            <Card {...favoriteDentist} key={favoriteDentist.id} />)) : null}

        </div>
      </div>    

    </>
  )
}

export default Favs

