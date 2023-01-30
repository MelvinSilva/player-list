import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Form = () => {

    const [playerData, setPlayerData] = useState([])
    const [recherche, setRecherche] = useState(["Ronaldo"])

    useEffect(() => {
        axios
            .get(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${recherche}`)
            .then((res) => setPlayerData(res.data.player))


    }, [recherche])


    return (
        <div className="form-component">
            <div className="form-container">
                <form>
                    <input type="text" onChange={(e) => setRecherche(e.target.value)} placeholder="Entrez le nom d'un sportif"
                        id="search-input" />
                </form>
            </div>
            <div className="result">
                {playerData ? playerData 
                    .map((player) => (
                        <Card key={player.id} player={player} displayBtn={false} />
                    )) : "Désolé je n'ai pas trouvé ! Merci de bien verifier votre recherche."}
            </div>
        </div>
    );
};

export default Form;