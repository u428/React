import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {

    return(
        <div>
            <h3>
                LOGO
            </h3>
            <ul>
                <Link to="/">
                <li>
                    Home
                </li>
                </Link>
                <Link to="/list">
                <li>
                    List
                </li>
                </Link>
                <Link to="/adding">
                <li>
                    adding
                </li>
                </Link>
                
            </ul>
        </div>
    )

}

export default Nav;