import React from 'react';
import './style.css';
import SupportThisChild from '../SupportThisChild';

const Tarekegn = (props) => {
    return(
        <div>
            <h1>HISTORIA TAREKEGNA</h1>
            <img src={require(`../../../assets/photos/tarekegn0.jpg`)} alt='Tarekegn' />
            <p>Tarekegn (czyt. Tarekeń) ma 10 lat i pochodzi z przedmieścia Awassy. Nadal mieszkają tam jego rodzice. Ma aż ośmioro rodzeństwa. Jego ojciec pracuje jako strażnik, co jest jednym z najgorzej płatnych zawodów. Jego pensja nie wystarczała na podstawowe potrzeby rodziny. Jego mama nie pracuje. Tarekegn powinien pójść do pierwszej klasy szkoły podstawowej, lecz zamiast tego trafił na ulicę. Chodzi na targ rybny, by patroszyć ryby za drobne pieniądze i żebrze od przechodniów. Z reguły śpi również na ulicy z innymi chłopcami. Jego relacje rodzinne nie są najlepsze. Jego ojciec obwinia go za złe zachowanie i sposób, w jaki żyje. Chłopiec bowiem żyjąc na ulicy odurzał się wyziewami benzyny (dzieci robią to, by nie odczuwać zimna i głodu).</p> 
            <SupportThisChild name1='Tarekegn' name2='Tarekegna' />
        </div>
    );
}

export default Tarekegn;
