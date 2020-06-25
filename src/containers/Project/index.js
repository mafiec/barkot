import React from 'react';
import './style.css'

const Project = (props) => {
    return(
        <div>
            <h1>PROJEKT OŚRODKA RESOCJALIZACYJNEGO</h1>
                <p id='project1'>Przedstawiamy główne zadania ośrodka.</p>
            <div className='container'>
                <div className='leftSideText'>
                    <h2 className='withoutMarginTop'>ŚWIETLICA ŚRODOWISKOWA</h2>
                    <p>Dzieci ulicy będą zaproszone do dziennej świetlicy, w której będą dla nich organizowane różne zajęcia edukacyjne, gry, zabawy i warsztaty z różnych dziedzin, a także zajęcia z psychologiem, motywacyjne, prelekcje na temat higieny, zdrowia i życiowych umiejętności. Dzieci będą również informowane o możliwościach, jakie daje im ośrodek i będą zachęcane do przystąpienia do Programu orientacyjnego.</p>
                </div>
                <img className='responsiveImage' src={require('../../assets/photos/projektSwietlica.jpg')} alt='Świetlica' />
            </div>        
            <div className='container'>
                <img className='responsiveImage' src={require('../../assets/photos/projektOrientacyjny.jpg')} alt='Program orientacyjny' />
                <div className='rightSideText'>
                    <h2 className='withoutMarginTop'>PROGRAM ORIENTACYJNY</h2>
                    <p>Na początku dzieci zostaną przyjęte na krótki okres. Będzie to czas obserwacji i tworzenia relacji zaufania. Głównym zadaniem pracowników i wychowawców będzie zbadanie faktycznej sytuacji społeczno-rodzinnej dziecka (czy chodziło do szkoły, czy ma rodzinę, a jeśli tak co jest głównym źródłem utrzymania, czy żyje lub pracuje na ulicy, czy dziecko jest uzależnione od życia na ulicy itp.).</p>
                </div>
            </div>
            <div className='container'>
                <div className='leftSideText'>
                    <h2 className='withoutMarginTop'>PROGRAM REHABILITACYJNY​​</h2>
                    <p className='justify'>Część dzieci zostanie zakwalifikowana do udziału w programie resocjalizacyjny, tymczasowo zamieszkają w ośrodku i będzie przechodzić terapię pod okiem specjalistów. W ciągu dnia będzie odbywał się szereg różnorakich zajęć, w tym również lekcje wyrównawcze. Dzieciom będą powierzone niewielkie obowiązki, dzięki którym zaczną uczyć się odpowiedzialności i współpracy z innymi.</p>
                </div>
                <img className='responsiveImage' src={require('../../assets/photos/projektRehabi.jpg')} alt='Program rehabilitacyjny' />
            </div>           
            <div className='container'>
                <div>
                    <h2>PROGRAM REINTEGRACJI RODZIN</h2>
                    <p className='justify'>​Jeśli sytuacja rodzinna na to pozwoli, dzieci wrócą do swoich rodzin. Będzie jednak wymagane odpowiednie przygotowanie rodziny przez pracowników socjalnych, zakup ubrań, mundurka, przyborów szkolnych, wsparcie materialne, a później stały kontakt rodziny z organizacją i kontrola frekwencji szkolnej i osiągnięć dziecka.​</p>
                </div>
            </div>
            <div className='container'>
                <div>
                    <h2>PROGRAM AKTYWIZACJI ZAWODOWEJ</h2>
                    <p className='justify'>Rodzice dzieci niemogący znaleźć zatrudnienia dostaną szansę odbycia szkoleń, kursów lub praktyk zawodowych, które przygotują ich do pracy w wybranej dziedzinie. Niektórzy z nich otrzymają potrzebne materiały do rozpoczęcia własnego interesu, takiego jak przygotowywanie posiłków czy szycie. Inni uzyskają pomoc w znalezieniu pracy. Projekty generujące dochód i przygotowanie zawodowe pozwolą rodzinom uniezależnić się finansowo od organizacji.​</p>
                </div>
            </div>          
            <div className='container'>
                <img className='responsiveImage' src={require('../../assets/photos/projektReintegracja.jpg')} alt='Reintegracja w społeczeństwie' />
                <div className='rightSideText'>
                    <h2 className='withoutMarginTop'>PROGRAM REINTEGRACJI W SPOŁECZEŃSTWIE</h2>
                    <p className='justify'>​W przypadku, gdy sytuacja rodzinna dziecka nie pozwala na jego reintegrację z rodziną, po ukończeniu Programu Resocjalizacyjnego, pracownicy projektu pomogą dziecku kontynuować edukację w szkole z Internatem, znaleźć opiekę zastępczą lub inne dogodne miejsce w społeczeństwie zależnie od wieku i stopnia samodzielności. Podopieczni będą wspierani aż do osiągnięcia niezależności.</p>
                </div>

            </div>           
        </div>
    );
}

export default Project;
