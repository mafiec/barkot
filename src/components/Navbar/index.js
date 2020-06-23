import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return(
        <header>
            {/* Menu */}
            <nav id='nav'>
                <ul>
                    <li><NavLink to='/'>Start</NavLink></li>
                    <li>
                      <a>O fundacji</a>
                        <ul class="child-menu">
                            <li><NavLink to='/about-us'>O nas</NavLink></li>
                            <li><NavLink to='/our-mission'>Nasza misja</NavLink></li>
                            <li><NavLink to='/project'>Projekt</NavLink></li>
                        </ul>
                    </li>
                    <li>
                      <a>Wsparcie</a>
                        <ul class="child-menu">
                            <li><NavLink to='/voluntary'>Wolontariat</NavLink></li>
                            <li><NavLink to='/donate'>Przekaż datek</NavLink></li>
                            <li><NavLink to='/adoption'>Adopcja na odległość</NavLink></li>
                            <li><NavLink to='/missionary-reports'>Raporty misyjne</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to='/childrens-stories'>Historie dzieci</NavLink></li>
                    <li><NavLink to='/contact'>Kontakt</NavLink></li>
                </ul>
            </nav>

            {/* Links on the right side of Navbar */}
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
