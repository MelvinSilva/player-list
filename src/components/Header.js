import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="header">
                <nav>
                    <ul>
                        <NavLink to="/">
                            <li>ACCUEIL</li>
                        </NavLink>
                        <NavLink to="/favoris">
                            <li>FAVORIS</li>
                        </NavLink>
                    </ul>
                </nav>
                <h1>PLAYER LIST</h1>
            </div>
        </div>
    );
};

export default Header;