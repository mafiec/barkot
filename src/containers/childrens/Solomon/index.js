import React from 'react';
import ChildStoryTemplate from '../ChildStoryTemplate';

const Solomon = (props) => {
    return(
        <div>
            <ChildStoryTemplate
                name='Solomon'
                name2='Solomona'
                story='Solomon (12 l.) urodził się w Dore. Tam chodził do pierwszej klasy podstawówki, ale ze względu na trudną sytuację finansową, cała rodzina przeniosła się do Awassy. Było to trzy lata temu. Potem chłopiec edukacji już nie kontynuował. Zamiast tego zaczął uczęszczać wraz ze swoją mamą na targ rybny. Nauczył się patroszyć ryby, co wykonywał za drobną opłatą. Jego mama natomiast dostarcza czystą wodę w butelkach do mycia ryb. Ojciec chłopca nie ma w tej chwili stałej pracy. Stara się czegoś szukać, ale zwłaszcza teraz w trakcie pandemii, bardzo ciężko coś znaleźć. Solomon poranki spędzał na targu rybnym, a popołudniami żebrał na ulicy od przechodniów. Z racji na dużą odległość małego mieszkanka, które wynajmują jego rodzice, chłopiec często nie wracał do domu na noc, a spał z kolegami na ulicy. Czasem przychodził na otwarte zajęcia w naszym ośrodku, aż przyjęliśmy go do ośrodka. W przyszłości chciałby zostać lekarzem. Teraz pracujemy z nim, by wrócił do szkoły i mógł spełniać to i inne marzenia.'
                photoDescription1='Solomon z mamą na targu rybnym'
                photoDescription2='Solomon patroszący ryby'
                photoDescription3='W trakcie otwartych zajęć w ośrodku'
            />
        </div>
    );
}

export default Solomon;
