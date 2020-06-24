import React from 'react';
import './style.css';
import SupportThisChild from '../SupportThisChild';

const Erdachew = (props) => {
    return(
        <div>
            <h1>HISTORIA ERDACHEWA</h1>
            <img src={require(`../../../assets/photos/erdachew0.jpg`)} alt='Erdachew' />
            <p>Historia chłopca pojawi się wkrótce.</p> 
            <SupportThisChild name1='Erdachew' name2='Erdachewa' />  
        </div>
    );
}

export default Erdachew;
