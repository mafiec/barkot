import React from 'react';
import './style.css'

const Voluntary = (props) => {
    return(
        <div className='justify'>
          <h1>WOLONTARIAT</h1>  
            <div className='voluntarySpan'>
                <h2>Wolontariusze poszukiwani!</h2>
                <p>Fundacja Dzieci Etiopii „Barkot” poszukuje wolontariuszy. Jak pewnie już wiecie pomagamy dzieciom ulicy w Etiopii. Jeśli ich los nie jest Ci obojętny, jeśli porusza Cię niesprawiedliwość społeczna, jeśli tak jak my, uważasz że każdy w życiu powinien dostać szansę na godne życie, dołącz do nas! Szukamy przede wszystkim osób otwartych, o dobrym sercu, młodych (wiekiem, ale również tych młodych tylko duchem) i wierzących w to, że pomaganie ma sens.</p>
            </div>
            
            <img className='rightSidePhoto' src={require('../../assets/photos/wolontariat1.jpg')} alt='Dzieci rysują' />
            <h2 className='withoutMarginTop'>Jak możesz pomóc?</h2>
            <p>Jeśli chcesz wybrać się do Etiopii, zobaczyć na własne oczy naszą pracę i samemu popracować z dzieciakami, damy Ci taką możliwość (tylko osoby pełnoletnie). Jednak pierwszym krokiem jest współpraca z nami w Polsce i przygotowanie się do tego doświadczenia. Razem będziemy planować i organizować akcje promujące fundację, uświadamiać ludzi o problemach Trzeciego Świata, organizować bale charytatywne, koncerty, itp. zbierać środki na utrzymanie ośrodka w Awassie.</p>
            <p>Wolontariat w Etiopii jest opcjonalny. Możesz działać z nami tylko w Polsce.</p>
            <h2>Rekrutacja trwa!</h2>
            <p>Napisz do nas maila na <span className='mail'>fundacjabarkot@gmail.com</span> przedstawiając kim jesteś, czym się zajmujesz oraz dlaczego jesteś zainteresowany/a wolontariatem. Podaj również swój numer telefonu, a my się z Tobą skontaktujemy.</p>
            <p>Jeśli jesteś spoza Śląska, a chcesz z nami współpracować, również nie wahaj się, by do nas napisać. Wspólnie możemy znaleźć sposób, w jaki możesz z nami działać.</p>
        </div>
    );
}

export default Voluntary;
