import React from 'react';
import './style.css'

const AboutUs = (props) => {
    return(
        <div>
            <div className='firstPart'>
                <img className='photo' src={require('../../assets/photos/o-nas-1-300x225.jpg')} alt='Magda z dziećmi' />
                <p>Fundacja jest młodą organizacją założoną w 2018 roku.
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
                    resocjalizacyjnego dla dzieci ulicy.<br/>
                </p>
            </div>
            <div>
                <p>Do Fundacji należą:<br/>
                    Magdalena Soboka – Fundator i Prezes Fundacji<br/>
                    Danuta Szydłowska<br/>
                    Jerzy Fiec
                </p>
            </div>
            
        </div>
    );
}

export default AboutUs;
