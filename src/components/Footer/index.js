import React from 'react';
import './style.css'

const Footer = (props) => {
    return(
        <footer>
            <p id='footerTitle'>KONTAKT</p>
              <div id='footer'>
                <div id='footerContact'>
                    <p>fundacjabarkot@gmail.com</p>
                    <p id='tel'>tel. 506 300 585</p>
                </div>
                <div className='socialIcons'>
                    <p>Znajdziesz nas również tutaj:</p>
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
              </div>
        </footer>
    );
}

export default Footer;
