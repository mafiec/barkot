import React from 'react';
import './style.css';
import SupportThisChild from '../SupportThisChild';

const Estifanos = (props) => {
    return(
        <div>
            <h1>HISTORIA ESTIFANOSA</h1>
            <img src={require(`../../../assets/photos/estifanos0.jpg`)} alt='Estifanos' />
            <p>Estifanos ma 13 lat i pochodzi z Dilli. Jego rodzice się rozwiedli, gdy był małym dzieckiem. Chłopiec nie wie, gdzie przebywa ani co robi jego mama. Stracił z nią jakikolwiek kontakt. Ojciec natomiast po pewnym czasie ponownie się ożenił i nie chciał wychowywać dziecka. Przygarnęła go samotna kobieta. Jego przybrana mama nie potrafiła sobie z nim poradzić. Estifaos chodził do szkoły, ale nie chciał się uczyć i sprawiał problemy wychowawcze. Ostatecznie porzucil szkołę w czwartej klasie i przyjechał na własną rękę do Awassy. Najpierw szukał pomocy w kościele jako że znał ks. Biskupa, który wcześniej był proboszczem w Dilli, ale ten nie miał możliwości, by mu pomóc na dłuższą metę. Trafił na ulicę, póżniej do pewnej organizacji, ale wdał się w konflikt z pracownikami i znów musiał wrócić na ulicę. Jak sam przyznaje nie potrafił dostosować się do panujących tam zasad. Estifanos wydaje się być dużym indywidualistą. U nas nie sprawia żadnych problemów, bierze udział w zajęciach, ale sam z siebie raczej nie bawi się z innymi dziećmi. Za to lubi czytać, np. książki o świętych. Mówi, że bardzo chciałby wrócić do szkoły, a w przyszłości chciałby zostać księdzem. Mamy nadzieję, że pozostając z nim w dobrych relacjach, będziemy w stanie mu pomóc.</p> 
            <SupportThisChild name1='Estifanos' name2='Estifanosa' /> 
        </div>
    );
}

export default Estifanos;
