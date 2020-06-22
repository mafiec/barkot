import React from 'react';
import './style.css'

const Footer = (props) => {
    return(
        <footer className='footer'>
            <p className='contact'>KONTAKT</p>
            <p>Fundacja Dzieci Etiopii Barkot</p>
            <p>tel. 506 300 585</p>
            <p>fundacjabarkot@gmail.com</p>
            <div className='socialIcons'>
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
        </footer>
    );
}

export default Footer;
