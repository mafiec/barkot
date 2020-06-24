import React from 'react';
import './style.css';
import SupportThisChild from '../SupportThisChild';

const Binyam = (props) => {
    return(
        <div>
            <h1>HISTORIA BINYAMA</h1>
            <img src={require(`../../../assets/photos/binyam0.jpg`)} alt='Binyam' />
            <p>Binyam  pochodzi z wioski Halaba niedaleko Awassy. Ma jedną starszą siostrę i jednego młodszego brata. Z powodu braku dostatecznych srodków do życia cała rodzina przeniosła się do Awassy około 2 lata temu. Liczyli, że będzie lepiej, że znajdą pracę i będą w stanie się utrzymać. W tej chwili mama Binyama pilnuje krowy za około 70 zł miesięcznie. Mieszka wraz z córką i synem w oborze razem z krowami. Ojciec natomiast pije i wałęsa się gdzieś po mieście. Binyam kiedyś chodził do szkoły, do trzeciej klasy podstawówki. Jednak pensja mamy nie wystarczała na ich utrzymanie, więc zaczął żebrać. Ostatecznie przestał chodzić do szkoły i zaczął żyć na ulicy wraz z innymi dziećmi ulicy. Czasem odwiedzał rodzinę, bo mieszkają w pobliżu, ale spał na ulicy. Każdego ranka chodził na targ rybny, gdzie przy odrobinie szczęścia patroszył ryby za drobne pieniądze. Resztę dnia włóczył się z kolegami po ulicach pytając przechodniów o pieniądze. Później trafił do naszego ośrodka. Razem z innymi chłopcami przebywa u nas na czas pandemii. Pracujemy z nim, by mógł wrócić do szkoły, a później wspierać jego edukację.</p> 
            <SupportThisChild name1='Binyam' name2='Binyama' />  
        </div>
    );
}

export default Binyam;
