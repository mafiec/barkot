import React from 'react';
import './style.css'

const Donate = (props) => {
    return(
        <div>
            <h1>PRZEKAŻ DATEK</h1>
            <div id='donate1'>
                <img className='responsiveImage' src={require('../../assets/photos/przekazDatek1.jpg')} alt='Chłopiec z zeszytem' />
                <div className='rightSideText'>
                    <p className='withoutMargin'><b>Aby wesprzeć działania fundacji możesz wykonać przelew na konto mBank:</b></p>
                    <p className='withoutMargin'>Fundacja Dzieci Etiopii Barkot<br/>ul. Brodzińskiego 4<br/>41-800 Zabrze<br/><b>57 1140 2004 0000 3302 7838 7250</b></p>
                    <p>Dla przelewów z zagranicy:<br/>(konto walutowe EUR)<br/>Fundacja Dzieci Etiopii Barkot<br/>PL 80 1140 2004 0000 3512 1047 7877
                    <br/>mBank S.A. FORMERLY BRE BANK S.A.<br/>Skrytka pocztowa 2108<br/>90-959 Łódź<br/>SWIFT code: BREXPLPWMBK</p>
                </div>
            </div>
            <p className='justify'>Zbieramy pieniądze na prowadzenie ośrodka dla dzieci ulicy. Pragniemy pomagać konkretnym dzieciakom, które znalazły się w bardzo trudnej sytuacji życiowej.</p>
            <p className='justify'>Naszym celem nie jest rozdawanie pieniędzy, które często wzmaga roszczeniową postawę i ciągłe oczekiwanie na pomoc z zewnątrz. Potrzebujemy zaplecza, które pozwoli zmotywować dzieci do zmiany, wyciągnąć z ciężkiej sytuacji, sprawić, by wróciły do rodzinnego domu, dać wiedzę, umiejętności i perspektywy na przyszłość.</p>
        </div>
    );
}

export default Donate;
