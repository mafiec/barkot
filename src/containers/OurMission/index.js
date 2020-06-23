import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const OurMission = (props) => {
    return(
        <div>
            <p className='justify'>Naszą misją jest kompleksowa pomoc dzieciom ulicy w Etiopii.</p>
            <p>W Czym Problem?</p>
            <p className='justify'>Etiopia boryka się z licznymi problemami społecznymi. Jak zwykle najbardziej narażoną grupą na wszystkie nieszczęścia świata są dzieci. Bo to one, niczemu winne, stają się ofiarami biedy, głodu, przemocy, rozbicia rodzin, utraty rodziców. Nie mając  innego wyjścia lub uciekając od problemów w domu, dzieci w Etiopii często migrują do miast i lądują na ulicy, gdzie próbują przetrwać, często już na zawsze pozostając na marginesie społeczeństwa. W miejscowości Awassa, dzieci ulicy jest coraz więcej i nie ma dla nich szansy na zmianę.</p>
            <p>Jak Chcemy Pomóc?</p>
            <p className='justify'>Chcemy im pomóc na dłuższą metę, dać perspektywę na przyszłość, możliwość edukacji, wysłać do szkoły, wspierać aż do momentu, gdy ich rodziny albo one same będą w stanie się usamodzielnić. Planujemy stworzyć ośrodek resocjalizacyjny, w którym pod okiem specjalistów dzieci będą uczyć się żyć na nowo, w społeczeństwie. Na początku chcemy się skupić na pomocy dzieciom w okresie wczesnoszkolnym.</p>
            <p>Poczytaj więcej o zadaniach ośrodka: <NavLink to='/project'>PROJEKT</NavLink></p>
        </div>
    );
}

export default OurMission;
