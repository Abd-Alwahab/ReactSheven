import React from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';


const Nav = () => {

    return (

        <div>
            <nav className="nav">

                    <h1 className="logo">Logo</h1>

                <ul className="nav__list">
                    <li className="nav__item"><NavLink to="/home" exact className="nav__link">Home</NavLink></li>
                    <li className="nav__item"><NavLink to="/photos" className="nav__link">Photos</NavLink></li>
                    <li className="nav__item"><NavLink to="/users" className="nav__link">Users</NavLink></li>
                    <li className="nav__item"><NavLink to="/posts" className="nav__link">Posts</NavLink></li>

                </ul>
            
            </nav>

        </div>
    )


}


export default Nav