import React from 'react';
import SupportThisChild from '../SupportThisChild';

const Abraham = (props) => {
    return(
        <div className='justify'>
            <h1>ABRAHAM</h1>
            <div className='childStoryContainer'>
                <img src={require(`../../../assets/photos/abraham0.jpg`)} alt='Abraham' />
                <div className='childStory'>Historia chłopca pojawi się wkrótce.</div>
            </div>
            <SupportThisChild name1='Abraham' name2='Abrahama' />
        </div>
    );
}

export default Abraham;
