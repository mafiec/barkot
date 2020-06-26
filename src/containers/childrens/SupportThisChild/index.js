import React from 'react';
import { NavLink } from 'react-router-dom';

const SupportThisChild = (props) => {
    return(
        <div>
            <p>Jeśli chcesz wesprzeć resocjalizację {props.name2}, przekaż darowiznę na konto:</p>
            <p className='link'>
                Fundacja Dzieci Etiopii „Barkot”<br/>
                57 1140 2004 0000 3302 7838 7250<br/>
                lub <a target='_blank' href='https://siepomaga.pl/barkotowa-kwarantanna'>https://siepomaga.pl/barkotowa-kwarantanna</a>
            </p>
            <p className='link'>Jeśli chcesz stale wspierać {props.name2}, śledzić jego sukcesy, otrzymywać aktualne zdjęcia, czy nawet wymieniać z nim korespondencję, wypełnij formularz w zakładce <NavLink to='/adoption'>ADOPCJA NA ODLEGŁOŚĆ</NavLink>, wskazując imię {props.name1}.</p>   
        </div>
    );
}

export default SupportThisChild;
