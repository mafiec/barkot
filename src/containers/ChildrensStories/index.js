import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const ChildrensStories = (props) => {
    const names1 = ['Tamru', 'Solomon', 'Binyam', 'Estifanos'];
    const names2 = ['Tarekegn', 'Erdachew', 'Habtamu', 'Abraham'];

    const showPhoto = (name) => {
        return (
            <div className='imgWrap'>
                <img className='responsiveImage' src={require(`../../assets/photos/${name.toLowerCase()}.jpg`)} alt={name} />
                <NavLink to={'/barkot/childrens-stories/' + name.toLowerCase()}><p className='imgDescription'>{name}</p></NavLink>
            </div>
        );
    }

    return(
        <div className='justify'>
            <h1>HISTORIE DZIECI</h1>
            <p className='link'>Zapraszamy do poznania historii życia chłopców, którzy przebywają obecnie w naszym ośrodku.
            Rozpoczęliśmy również program adopcji na odległość. Więcej szczegółów znajdziesz <NavLink to='/barkot/adoption'>tutaj</NavLink>.</p>
            <p>Kliknij na zdjęcie, by poznać historię konkretnego chłopca.</p>
            <div className='photoContainer'>
                {names1.map((name) => showPhoto(name))}
            </div>
            <div className='photoContainer'>
                {names2.map((name) => showPhoto(name))}
            </div>
            <hr className='separator'/>
        </div>
    );
}

export default ChildrensStories;
