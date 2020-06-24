import React from 'react';
import './style.css';
import SupportThisChild from '../SupportThisChild';

const Habtamu = (props) => {
    return(
        <div>
            <h1>HISTORIA HABTAMU</h1>
            <img src={require(`../../../assets/photos/habtamu0.jpg`)} alt='Habtamu' />
            <p>Habtamu (13 l.) pochodzi z regionu Borana, ale wraz z mamą i rodzeństwem przeniósł się do Awassy po rozwodzie rodziców, gdy miał 4 lata. Zawsze było im ciężko. Natomiast od kiedy jego mama złamała rękę i nie mogła pracować, sytuacja stała się tragiczna. Jego mama nie miała pieniędzy, by pójść do lekarza, więc jej ręka źle się zrosła i nadal uniemożliwia normalną egzystencję. Zaczęła żebrać i z tego też teraz żyje. Mieszka w wynajmowanym malutkim mieszkaniu ze swoim małym dzieckiem. Ojciec chłopca pracuje nadal na wsi, ale w żaden sposób nie pomaga dzieciom. Habtamu dzięki wsparciu przez pewną organizację, ukończył czwartą klasę. Niestety owa organizacja przestała go wspierać i od jakiegoś czasu nie kontynuuje nauki. Habtamu był najwierniejszym uczestnikiem zajęć otwartych w naszym ośrodku. Jest niezwykle dokładny i staranny, czy to w pisaniu (niezwykle równych literek), czy w czasie zajęć plastcznych. Jesteśmy pewni, że Habtamu będzie kontynuował edukację po otwarciu szkoły, jeśli damy mu taką możliwość.</p> 
            <SupportThisChild name1='Habtamu' name2='Habtamu' />
        </div>
    );
}

export default Habtamu;
