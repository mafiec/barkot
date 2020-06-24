import React from 'react';
import './style.css';
import SupportThisChild from '../SupportThisChild';

const Abraham = (props) => {
    return(
        <div>
            <h1>HISTORIA ABRAHAMA</h1>
            <img src={require(`../../../assets/photos/abraham0.jpg`)} alt='Abraham' />
            <p>Historia chłopca pojawi się wkrótce.</p> 
            <SupportThisChild name1='Abraham' name2='Abrahama' />
        </div>
    );
}

export default Abraham;
