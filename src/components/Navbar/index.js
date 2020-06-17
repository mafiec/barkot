import React from 'react';
import './style.css'

const Navbar = (props) => {
    return(
        <header className='header'>
            <nav className='headerMenu'>
                <a href='#'>Start</a>
                <a href='#'>O Fundacji</a>
                <a href='#'>Wsparcie</a>
                <a href='#'>Historie dzieci</a>
                <a href='#'>Kontakt</a>
            </nav>
            <div className='headerMenu'>
                <a href='#'>/fb, insta, yt icons/</a>
            </div>
        </header>
    );
}

export default Navbar;
