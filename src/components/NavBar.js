import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    const linkStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
    };

    return (
        <div>
            <NavLink 
                to="/"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                  }}
            >
                Log In
            </NavLink>
            <NavLink
                to="create-account"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                  }}
            >
                Create Account
            </NavLink>
        </div>
    )
}

export default NavBar