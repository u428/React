import React from 'react';
import {Link} from 'react-router-dom';


function Nav() {

    return(
        <div className="container">
            <h3>
                UTech
            </h3>
            <ul className="nav nav-tabs justify-content-end" role="tablist">
               
                <li className="nav-item mr-sm-5">
                    <Link className="nav-link"  to="/">
                        Home
                    </Link >
                </li>
                
                <li className="nav-item mr-sm-5">
                    <Link className="nav-link "  to="/list">
                        List
                    </Link >
                </li>

                <li className="nav-item mr-sm-5">
                    <Link className="nav-link" to="/adding">
                        Adding
                    </Link >
                </li>
                
            </ul>
        </div>
    )

}

export default Nav;