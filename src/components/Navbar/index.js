import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return(
        <header className='header'>
            <nav className='headerMenu'>
                <NavLink to='/'>Start</NavLink>
                <NavLink to='/about-fondation'>O Fundacji</NavLink>
                <NavLink to='/support'>Wsparcie</NavLink>
                <NavLink to='/childrens-stories'>Historie dzieci</NavLink>
                <NavLink to='/contact'>Kontakt</NavLink>
            </nav>
            <div className='headerMenu'>
                <a href='#'>/fb, insta, yt icons/</a>
            </div>
        </header>
    );
}

export default Navbar;
