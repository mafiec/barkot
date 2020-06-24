import React from 'react';
import './style.css';
import SupportThisChild from '../SupportThisChild';

const Tamru = (props) => {
    return(
        <div>
           <h1>HISTORIA TAMRU</h1>
            <img src={require(`../../../assets/photos/tamru0.jpg`)} alt='Tamru' />
            <p>Tamru ma 10 lat. Pochodzi z wioski blisko Awassy, gdzie jego rodzina nadal mieszka. Był uczniem pierwszej klasy. Mógł kontynuować szkołę, jednak na przyciągnęła go atrakcyjność  miasta. Jego ojciec przez jakiś czas pracował w Awassie na targu rybnym. Czasem zabierał chłopca ze sobą, gdzie ten mógł zobaczyć inne dzieci ulicy. Widział, że otrzymywały od ludzi pieniądze, zaczął nawiązywać z nimi relacje i sam zaczął robić to, co one. Jego ojciec przestał pracować na targu rybnym, a Tamru nadal chciał tam przebywać, więc robił to na własną rękę. Przeniósł się do dziadka, który mieszka na obrzeżach Awassy, który nie ma dostatecznych środków do życia i wysłania chłopca do szkoły. Tamru spędza więc całe dnie w okolicy targu rybnego. Podczas wizyty u rodziny, wyraźnie widzieliśmy, że chłopiec trzymał dystans od swoich rodziców. Oni również nie witali go z otwartymi ramionami. Jego ojciec podkreślał, że Tamru przeniósł się do Awassy bez ich pozwolenia. Nie wiemy dokładnie, jakie były relacje Tamru z rodziną wcześniej, ani co było prawdziwą przyczyną, dla której chłopiec porzucił swój dom. Modlimy się za niego, pracujemy z nim i staramy się dokładnie wybadać jego sytuację, by w niedalekiej przyszłości pomóc mu w jak najbardziej adekwatny sposób.</p> 
            <SupportThisChild name1='Tamru' name2='Tamru' />
        </div>
    );
}

export default Tamru;
