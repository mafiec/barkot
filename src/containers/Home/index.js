import React from 'react';
import './style.css'

const Home = (props) => {
    return(
        <div className='justify'>
            <h1>FUNDACJA DZIECI ETIOPII BARKOT</h1>
            <h2>Nasz cel</h2>
            <p>Naszym głównym celem jest kompleksowa pomoc dzieciom ulicy w prowadzonym przez nas ośrodku w miejscowości Awassa. Dowiedz się więcej na temat naszej misji oraz zadań, które chcemy realizować w ramach projektu.</p>
            <img id='start1' src={require('../../assets/photos/start.jpg')} alt='Uśmiechnięte dzieci' />
            <h2>Jak mogę pomóc?</h2>
            <p>Zbieramy fundusze na projekt. Możesz przekazać swoją darowiznę na ten cel lub zaangażować się w inny sposób.</p>
            <h2>Na co przeznaczymy zebrane pieniądze?</h2>
            <p className='link'>Od października 2019 oficjalnie rozpoczęliśmy pracę z dziećmi ulicy w Etiopii.  Prowadzenie ośrodka i specjalistyczna pomoc wymaga sporych nakładów finansowych. Zobacz film o naszej pracy <a target='_blank' href='https://youtu.be/FQgdV_rkfOc'>[tutaj]</a> lub poczytaj więcej o projekcie, aby przekonać się, że twoja darowizna nie pójdzie na marne.</p>
            <p className='link'>
                Zapraszamy również na naszego fanpage’a na Facebooku, gdzie możesz śledzić najbardziej bieżące działania fundacji.<br/>
                <a target='_blank' href='https://www.facebook.com/dzieci.etiopii/'>fb.com/dzieci-etiopii</a>
            </p>
        </div>
    );
}

export default Home;
