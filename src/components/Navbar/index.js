import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return(
        <header>
            {/* Menu */}
            <nav id='nav'>
                <ul>
                    <li><NavLink to='/barkot/'>Start</NavLink></li>
                    <li>
                      <a>O fundacji</a>
                        <ul class="child-menu">
                            <li><NavLink to='/barkot/about-us'>O nas</NavLink></li>
                            <li><NavLink to='/barkot/our-mission'>Nasza misja</NavLink></li>
                            <li><NavLink to='/barkot/project'>Projekt</NavLink></li>
                        </ul>
                    </li>
                    <li>
                      <a>Wsparcie</a>
                        <ul class="child-menu">
                            <li><NavLink to='/barkot/voluntary'>Wolontariat</NavLink></li>
                            <li><NavLink to='/barkot/donate'>Przekaż datek</NavLink></li>
                            <li><NavLink to='/barkot/adoption'>Adopcja na odległość</NavLink></li>
                            <li><NavLink to='/barkot/missionary-reports'>Raporty misyjne</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to='/barkot/childrens-stories'>Historie dzieci</NavLink></li>
                    <li><NavLink to='/barkot/contact'>Kontakt</NavLink></li>
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
