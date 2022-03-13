import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Form = () => {

    const [playerData, setPlayerData] = useState([])
    const [recherche, setRecherche] = useState(["P"])

    useEffect(() => {
        axios
            .get(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${recherche}`)
            .then((res) => setPlayerData(res.data.player))


    }, [recherche])


    return (
        <div className="form-component">
            <div className="form-container">
                <form>
                    <input type="text" onChange={(e) => setRecherche(e.target.value)} placeholder="Entrez le nom d'un joueur"
                        id="search-input" />
                </form>
            </div>
            <div className="result">
                {playerData
                    .slice(0, 12)
                    .map((player) => (
                        <Card key={player.id} player={player} />
                    ))}
            </div>
        </div>
    );
};

export default Form;