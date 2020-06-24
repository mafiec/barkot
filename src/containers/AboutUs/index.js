import React from 'react';
import './style.css'

const AboutUs = (props) => {
    return(
        <div>
            <h1>O NAS</h1>
            <div className='container'>
                <p className='leftSideText'>Fundacja jest młodą organizacją założoną w 2018 roku.
                    ​Założycielka Magdalena Soboka służyła na misji w Etiopii
                    jako Świecka Misjonarka Kombonianka.
                    Pracowała głównie w szkole, ale swój czas zawsze rozdzielała na
                    różne działania na rzecz Kościoła, ubogich, katolickiej młodzieży,
                    kobiet, więźniarek. Żyjąc w Awassie, dużym rozwijającym się
                    mieście, na co dzień spotykała się z narastającym problemem
                    dzieci ulicy, wobec którego czuła się bezradna i który to nie
                    dawał jej spokoju. Coraz więcej myślała o projekcie, który
                    pozwolił by dać szansę tym (jak to mawiał św. Daniel Comboni)
                    najuboższym i najbardziej opuszczonym. Ostatecznie postanowiła,
                    że po powrocie do Etiopii otworzy ośrodek resocjalizacyjny dla
                    dzieci ulicy, a fundacja ma jej w tym pomóc. Obecnie do Fundacji
                    należą 3 osoby, którym los dzieci ulicy nie jest obojętny.
                    Razem starają się planować i urzeczywistnić projekt ośrodka
                    resocjalizacyjnego dla dzieci ulicy.
                </p>
                <img id='aboutUs1' src={require('../../assets/photos/oNas1.jpg')} alt='Magda z dziećmi' />
            </div>
            <div>
                <h2 id='crew'>Do Fundacji należą:</h2>
                <p id='crew2'>Magdalena Soboka – Fundator i Prezes Fundacji<br/>
                    Danuta Szydłowska<br/>
                    Jerzy Fiec
                </p>
            </div>
        </div>
    );
}

export default AboutUs;
