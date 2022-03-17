import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"

const Card = ({ player, displayBtn }) => {

  useEffect(() => { // effet d'apparition des articles avec le scroll
    Aos.init({ duration: 1000 })

  }, [])

  const dateFormat = (date) => {
    let [yy, mm, dd] = date.split("-")
    return [dd, mm, yy].join("/")
  }

  const addStorage = () => { // garder en memoire les favoris et ne pas pouvoir le faire si c'est deja fait 
    let storedData = window.localStorage.player
      ? window.localStorage.player.split(",")
      : [];

    if (!storedData.includes(player.idPlayer.toString())) {
      storedData.push(player.idPlayer);
      window.localStorage.player = storedData;
    }
    alert("Le sportif a été ajouté aux favoris")
  };
  const deleteStorage = () => {
    let storedData = window.localStorage.player.split(",")

    let newData = storedData.filter((id) => id !== player.idPlayer)
    window.localStorage.player = newData
    window.location.reload()
  }


  return (
    <div data-aos="flip-right">
      <div className="card">
        <img alt="ok" src={player.strThumb ? player.strThumb : "https://www.djfabe.com/wp-content/uploads/2019/02/visuel-non-disponible.jpg"} />
        <h2>{player.strPlayer}</h2><br />
        {player.strSport ? <h4>Sport : <span>{player.strSport.toUpperCase().replace("SOCCER", "FOOTBALL ⚽")}</span></h4> : ""}
        {player.strTeam ? <h4>Club : <span>{player.strTeam.toUpperCase().replace("_RETIRED SOCCER", "FIN DE CARRIERE")}</span></h4> : ""}
        {player.strTeam2 ? <h4>Selection : <span>{player.strTeam2.toUpperCase()}</span></h4> : ""}<br />
        {player.strNationality ? <h5>Nationalité : {player.strNationality}</h5> : ""}
        {player.dateBorn ? <h5>Date de naissance : {dateFormat(player.dateBorn)}</h5> : ""}
        {player.strBirthLocation ? <h5>Lieu : {player.strBirthLocation}</h5> : ""}
        {player.strHeight ? <h5>Taille : {player.strHeight}</h5> : ""}
        {player.strWeight ? <h5>Poids : {player.strWeight}</h5> : ""}
        {player.strKit ? <h5>Crampons : {player.strKit}</h5> : ""}
        <div className="bio"><h3>Biographie : </h3> {player.strDescriptionFR ? <p>{player.strDescriptionFR}</p> : <p>{player.strPlayer}, n'a pas de biographie pour le moment sur notre site. Nous mettons tout en oeuvre dans les plus bref délais.</p>}</div>

        {!displayBtn && <div className="btn" onClick={() => addStorage()} >Ajouter aux favoris</div>}
        {displayBtn && <div className="btn2" onClick={() => deleteStorage()}>Supprimer des favoris</div>}


      </div>
    </div>
  );
};

export default Card;