import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';

const Favoris = () => {

    const [listData, setListData] = useState([]);

    useEffect (() => { 
        let playerId = window.localStorage.player ? window.localStorage.player.split(",") : [];
        // si il y a quelque chose dans localstorage tu split a la virgule sinon tableau vide

        for (let i = 0; i < playerId.length; i++) {
            axios.get(`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${playerId[i]}`)
                 .then((res) => setListData((listData) => [...listData, ...res.data.players])) 
                 // on casse la liste et on affiche le reste dans le meme tableau 
             }

    }, [])

    return (
        <div className="user-list-page">
            <Header />
            <h2>FAVORIS 😍</h2>
            <div className="result">
                {listData.length > 0 ? (listData.map(player => <Card player={player} key={player.id} />)) : (<h2>Aucun favoris pour le moment</h2>)}
                {/* si les données sont sup à zéro tu me map le tableau dans Card sinon tu affiches "aucun favoris" */}
                
            </div>
            
            
        </div>
    );
};

export default Favoris;