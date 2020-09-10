import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const OurMission = (props) => {
    return(
        <div>
            <h1>NASZA MISJA</h1>
            <div id='ourMission1'>
                <img className='responsiveImage' src={require('../../assets/photos/naszaMisja2.jpg')} alt='Dzieci przebierające śmieci' />
                <p className='rightSideText'>Naszą misją jest kompleksowa pomoc dzieciom ulicy w Etiopii.</p>
            </div>
            <div className='container'>
                <div className='leftSideText'>
                    <h2 className='withoutMarginTop'>W Czym Problem?</h2>
                    <p>Etiopia boryka się z licznymi problemami społecznymi. Jak zwykle najbardziej narażoną grupą na wszystkie nieszczęścia świata są dzieci. Bo to one, niczemu winne, stają się ofiarami biedy, głodu, przemocy, rozbicia rodzin, utraty rodziców. Nie mając  innego wyjścia lub uciekając od problemów w domu, dzieci w Etiopii często migrują do miast i lądują na ulicy, gdzie próbują przetrwać, często już na zawsze pozostając na marginesie społeczeństwa. W miejscowości Awassa, dzieci ulicy jest coraz więcej i nie ma dla nich szansy na zmianę.</p>
                </div>
                <img className='responsiveImage' src={require('../../assets/photos/naszaMisja1.jpg')} alt='Dziecko śpiące na ulicy' />
            </div>
            <div className='container'>
                <img className='responsiveImage' src={require('../../assets/photos/naszaMisja3.jpg')} alt='Dzieci ulicy' />
                <div className='rightSideText'>
                    <h2 className='withoutMarginTop'>Jak Chcemy Pomóc?</h2>
                    <p>Chcemy im pomóc na dłuższą metę, dać perspektywę na przyszłość, możliwość edukacji, wysłać do szkoły, wspierać aż do momentu, gdy ich rodziny albo one same będą w stanie się usamodzielnić. Planujemy stworzyć ośrodek resocjalizacyjny, w którym pod okiem specjalistów dzieci będą uczyć się żyć na nowo, w społeczeństwie. Na początku chcemy się skupić na pomocy dzieciom w okresie wczesnoszkolnym.</p>
                </div>
            </div>
            <p className='link'>Poczytaj więcej o zadaniach ośrodka: <NavLink to='/barkot/project'>PROJEKT</NavLink></p>
        </div>
    );
}

export default OurMission;
