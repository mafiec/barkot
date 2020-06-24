import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const Adoption = (props) => {
    return(
        <div>
            <h1>ADOPCJA NA ODLEGŁOŚĆ</h1>
            <p id='adoption1'>„Adopcja z ulicy” to akcja polegająca na tak zwanej adopcji na odległość. Możesz uratować jednego chłopca od życia na ulicy. Dla każdego z podopiecznych szukamy osób, które chciałyby ich indywidualnie wspierać. W tej chwili chłopcy przebywają w ośrodku, gdzie zapewniamy im zakwaterowanie, wyżywienie, opiekę medyczną i codzienne zajęcia. Już teraz potrzebują Waszego wsparcia. Za jakiś czas będziemy próbowali zreintegrować ich z rodzinami. Jednak, aby ponownie nie wyszli na ulicę, będziemy opłacać im szkołę, zapewniać wszelkie potrzebne materiały szkolne, mundurki oraz jeśli się uda produkty spożywcze, by wesprzeć ich wyżywienie w domu.</p>
            <h2 id='adoption2'>Chłopcy, którzy czekają na wsparcie</h2>
            <div id='adoptionTableContainer'>
                <table>
                <tbody>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>Brakująca kwota</td>
                    </tr>
                    <tr>
                        <td>Tamru</td>
                        <td><img src={require('../../assets/photos/tamru.jpg')} alt='Tamru' /></td>
                        <td>150 zł</td>
                    </tr>
                    <tr>
                        <td>Solomon</td>
                        <td><img src={require('../../assets/photos/solomon.jpg')} alt='Solomon' /></td>
                        <td>150 zł</td>
                    </tr>
                    <tr>
                        <td>Binyam</td>
                        <td><img src={require('../../assets/photos/binyam.jpg')} alt='Binyam' /></td>
                        <td>0 zł - adoptowany</td>
                    </tr>
                    <tr>
                        <td>Estifanos</td>
                        <td><img src={require('../../assets/photos/estifanos.jpg')} alt='Estifanos' /></td>
                        <td>0 zł - adoptowany</td>
                    </tr>
                </tbody>
                </table>
                <table>
                <tbody>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>Brakująca kwota</td>
                    </tr>
                    <tr>
                        <td>Habtamu</td>
                        <td><img src={require('../../assets/photos/habtamu.jpg')} alt='Habtamu' /></td>
                        <td>150 zł</td>
                    </tr>
                    <tr>
                        <td>Tarekegn</td>
                        <td><img src={require('../../assets/photos/tarekegn.jpg')} alt='Tarekegn' /></td>
                        <td>150 zł</td>
                    </tr>
                    <tr>
                        <td>Erdachew</td>
                        <td><img src={require('../../assets/photos/erdachew.jpg')} alt='Erdachew' /></td>
                        <td>150 zł</td>
                    </tr>
                    <tr>
                        <td>Abraham</td>
                        <td><img src={require('../../assets/photos/abraham.jpg')} alt='Abraham' /></td>
                        <td>0 zł - adoptowany</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <p className='link'>Przejdź do zakładki <NavLink to='/childrens-stories'>HISTORIE DZIECI</NavLink>, aby dowiedzieć się więcej o naszych podopiecznych.</p>
            <p>Każdy darczyńca będzie otrzymywał na maila, opis bieżącej sytuacji chłopca. Może również zadawać dodatkowe pytania. Ma prawo do korespondencji z nim za naszym pośrednictwem min. raz na miesiąc póki przebywa w ośrodku lub raz na pół roku po jego reintegracji.</p>
            <p>Aby adoptować chłopca, musisz zadeklarować chęć comiesięcznego wsparcia finansowego w wysokości 50, 100 lub 150 zł minimum przez rok. Pełne wsparcie wynosi 150 zł/mies. Jeśli nie stać Cię na taką kwotę, będziemy szukali dodatkowego wsparcia u innych osób.</p>
            <p>Jeśli z jakichś przyczyn darczyńca nie będzie chciał kontynuować wsparcia, oczywiście może je zaprzestać informując nas o tym. W przypadku, gdy resocjalizacja się nie uda (z czym niestety trzeba się liczyć) natychmiast poinformujemy jego darczyńcę, który może wstrzymać swoje darowizny lub wybrać inne dziecko.</p>
            <p>Aby zgłosić chęć adopcji, wypełnij poniższy formularz.</p>
            <h2 id='adoption3'>DEKLARACJA PODJĘCIA SIĘ ADOPCJI</h2>
            <p id='adoption4'>Obecnie strona jest jeszcze w budowie, dlatego jeśli jesteś zainteresowany/zainteresowana adopcją, wyślij do nas wiadomość na adres e-mail <span id='adoptionMail'>fundacjabarkot@gmail.com</span> w treści podając następujące informacje:</p>
            <p id='adoption5'>
                - Imię i nazwisko<br/>
                - Którego chłopca chcesz adoptować?<br/>
                - Jaką kwotę miesięcznie chcesz przeznaczyć?<br/>
                - Jak długo chcesz wspierać wybranego chłopca? (1rok/czas nieokreślony)<br/>
                (czas nieokreślony- tj. do Twojej rezygnacji lub tak długo jak nasza fundacja będzie wspierała wybrane przez Ciebie dziecko)
            </p>
        </div>
    );
}

export default Adoption;
