import React from 'react';
import './style.css'

const MissionaryReports = (props) => {
    return(
        <div className='justify'>
            <h1>RAPORTY MISYJNE</h1>
            <h2>Chcesz być na bieżąco?</h2>
            <p>Ogrom informacji w Internecie może być czasem przytłaczający.</p>
            <p>Mamy lepszą alternatywę!</p>
            <div className='container'>
                <img className='responsiveImage' src={require('../../assets/photos/raporty.jpg')} alt='Raport misyjny' />
                <p className='rightSideText'>Magdalena Soboka działająca w Etiopii na rzecz fundacji, co 3 miesiące będzie zdawała relację z poczynań fundacji, a zarazem ze swojej misji w formie listów. Będzie pisać o swoich doświadczeniach, trudach, sukcesach, będzie opisywać historie dzieci, którym staramy się pomóc, a także o wszystkim innym, co ją otacza: różnych wydarzeniach, sytuacjach i kulturze etiopskiej. Możesz otrzymać treści nigdzie niepublikowane, ze zdjęciami i w ładnej oprawie graficznej w twojej skrzynce pocztowej, ale NIE tej mailowej, a tradycyjnej. W końcu możesz otrzymać coś innego w formie papierowej niż tylko rachunki i pisma urzędowe.</p>
            </div>
            <h2>Jak?</h2>
            <p>Wystarczy, że zdeklarujesz chęć otrzymywania raportów. Wyślij maila na <span className='mail'>fundacjabarkot@gmail.com</span> w tytule wpisując „raporty”, a w treści podaj swój adres korespondencyjny. Będzie on wykorzystywany wyłącznie w celu wysyłania raportów.</p>
            <p>Jeśli jednak wolisz otrzymywać raporty mailowo, napisz nam o tym. Wtedy jednak będziemy prosić, abyś nigdzie ich nie publikował (raporty są dostępne jedynie dla określonej grupy wspierających czytelników!)</p>
            <p id='reports1'>Od otrzymania pierwszego listu postaraj się w miarę regularnie przekazywać swoją darowiznę na nasze konto:</p>
            <p className='withoutMargin'>
                Fundacja Dzieci Etiopii Barkot<br/>
                57 1140 2004 0000 3302 7838 7250<br/>
                wpisując w tytule: RAPORTY.
            </p>
            <p>Nie ma określonej kwoty! To Twoja dobra wola, ile chcesz nam przekazać. Nie podpisujesz żadnej umowy. Jednak, aby stale otrzymywać raporty, zachęcamy do regularności. Sugerujemy wpłaty comiesięczne, ewentualnie co 3 miesiące (wpłacasz, kiedy otrzymasz list).</p>
        </div>
    );
}

export default MissionaryReports;
