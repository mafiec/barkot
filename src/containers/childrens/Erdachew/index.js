import React from 'react';
import SupportThisChild from '../SupportThisChild';

const Erdachew = (props) => {
    return(
        <div className='justify'>
            <h1>ERDACHEW</h1>
            <div className='childStoryContainer'>
                <img src={require(`../../../assets/photos/erdachew0.jpg`)} alt='Erdachew' />
                <div className='childStory'>Historia chłopca pojawi się wkrótce.</div> 
            </div>
            <SupportThisChild name1='Erdachew' name2='Erdachewa' />  
        </div>
    );
}

export default Erdachew;
