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
            <div className='socialLinks'>
                <a target='_blank' href='https://www.facebook.com/dzieci.etiopii/'>
                    <img src={require('../../assets/fb.png')} alt='Facebook' />
                </a>
                <a target='_blank' href='https://www.youtube.com/channel/UCywxlkS-kdEmJh-_dK08ONw/'>
                    <img src={require('../../assets/yt.png')} alt='Youtube' />
                </a>
                <a target='_blank' href='https://www.instagram.com/fundacjabarkot/'>
                    <img src={require('../../assets/insta.png')} alt='Instagram' />
                </a>
            </div>
        </header>
    );
}

export default Navbar;
