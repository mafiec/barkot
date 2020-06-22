import React from 'react';
import './style.css'

const Header = (props) => {
    return(
        <div className='ImageBox'>
            <img className='Logo' src={require('../../assets/logo.png')} alt='Logo' />
            <img className='HeaderImg' src={require('../../assets/header.jpg')} alt='Childrens' />
        </div>
    );
}

export default Header;
