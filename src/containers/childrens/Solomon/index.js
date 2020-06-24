import React from 'react';
import './style.css';
import SupportThisChild from '../SupportThisChild';

const Solomon = (props) => {
    return(
        <div>
            <h1>HISTORIA SOLOMONA</h1>
            <img src={require(`../../../assets/photos/solomon0.jpg`)} alt='Solomon' />
            <p>Solomon (l.12) urodził się w Dore. Tam chodził do pierwszej klasy podstawówki, ale ze względu na trudną sytuację finansową, cała rodzina przeniosła się do Awassy. Było to trzy lata temu. Potem chłopiec edukacji już nie kontynuował. Zamiast tego zaczął uczęszczać wraz ze swoją mamą na targ rybny. Nauczył się patroszyć ryby, co wykonywał za drobną opłatą. Jego mama natomiast dostarcza czystą wodę w butelkach do mycia ryb. Ojciec chłopca nie ma w tej chwili stałej pracy. Stara się czegoś szukać, ale zwłaszcza teraz w trakcie pandemii, bardzo ciężko coś znaleźć. Solomon poranki spędzał na targu rybnym, a popołudniami żebrał na ulicy od przechodniów. Z racji na dużą odległość małego mieszkanka, które wynajmują jego rodzice, chłopiec często nie wracał do domu na noc, a spał z kolegami na ulicy. Czasem przychodził na otwarte zajęcia w naszym ośrodku, aż przyjęliśmy go do ośrodka. W przyszłości chciałby zostać lekarzem. Teraz pracujemy z nim, by wrócił do szkoły i mógł spełniać to i inne marzenia.</p> 
            <SupportThisChild name1='Solomon' name2='Solomona' />
        </div>
    );
}

export default Solomon;
