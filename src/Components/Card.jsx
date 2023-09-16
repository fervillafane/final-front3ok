import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react'
import { useContextGlobal } from "./utils/global.context";



const Card = ({name, username, id}) => {

  const {state, dispatch}= useContextGlobal()

  const getFavs =()=>{

    let favs = state.favs.filter(fav => fav.id == id);
    let isStored = favs == null || favs.length < 1 ? false : true;

    return isStored;
  }

  const [dentist, setDentist]= useState (getFavs())



// Aqui iria la logica para agregar la Card en el localStorage
  const addFav = ()=>{
    dispatch ({type: 'ADD_FAV', payload:{name: name, username: username, id: id}})
    setDentist(true);
  }
  

  return (
    <div className="card">

      <Link to={`/detail/${id}`}>
      <img style={{ width: "200px" }} src="./images/doctor.jpg" alt="doctor" />
        <h4>Apellido : {name}</h4>
        <h5>Nombre : {username}</h5>
      </Link>
      <button onClick={dentist ? removeFav : addFav} className="favButton" > {dentist ? "Eliminar de Favorito" : "Favorito"}</button>
        
    </div>
  );
};

export default Card;
