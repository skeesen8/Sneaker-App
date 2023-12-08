import * as React from "react";
import {Link } from "react-router-dom";


function Navbar(){

    return(
        <nav>
            <ul>
                <Link to="/">   
                    <p>Home</p>
                </Link>
                <Link to="/shoes">
                    <p>Shoes for sale</p>
                </Link>
                <Link to="/bids">
                    <p>Bids</p>
                </Link>
            </ul>  
        </nav>
    
    )
}

export default Navbar



