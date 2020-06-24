import React from 'react';
import './style.css'

const Contact = (props) => {
    return(
        <div>
            <h1>KONTAKT</h1>
            <p id='contact1'>Skontaktuj się z nami:</p>
            <p id='contact2'>
                Fundacja Dzieci Etiopii Barkot<br/>
                tel. 506 300 585<br/>
                fundacjabarkot@gmail.com
            </p>
            <p id='contact3'>Znajdziesz nas także na portalach społecznościowych oraz Youtube:</p>
            <div id='contactSocialIcons'>
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
    );
}

export default Contact;
