import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import Home from './containers/Home';
import ChildrensStories from './containers/ChildrensStories';
import Contact from './containers/Contact';
import AboutUs from './containers/AboutUs';
import OurMission from './containers/OurMission';
import Project from './containers/Project';
import Voluntary from './containers/Voluntary';
import Donate from './containers/Donate';
import Adoption from './containers/Adoption';
import MissionaryReports from './containers/MissionaryReports';
import Abraham from './containers/childrens/Abraham';
import Binyam from './containers/childrens/Binyam';
import Erdachew from './containers/childrens/Erdachew';
import Estifanos from './containers/childrens/Estifanos';
import Habtamu from './containers/childrens/Habtamu';
import Solomon from './containers/childrens/Solomon';
import Tamru from './containers/childrens/Tamru';
import Tarekegn from './containers/childrens/Tarekegn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Card>
          <Route path='/' exact component={Home} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/our-mission' component={OurMission} />
          <Route path='/project' component={Project} />
          <Route path='/childrens-stories' component={ChildrensStories} />
          <Route path='/contact' component={Contact} />
          <Route path='/voluntary' component={Voluntary} />
          <Route path='/donate' component={Donate} />
          <Route path='/adoption' component={Adoption} />
          <Route path='/missionary-reports' component={MissionaryReports} />
          <Route path='/childrens-stories/abraham' component={Abraham} />
          <Route path='/childrens-stories/binyam' component={Binyam} />
          <Route path='/childrens-stories/erdachew' component={Erdachew} />
          <Route path='/childrens-stories/estifanos' component={Estifanos} />
          <Route path='/childrens-stories/habtamu' component={Habtamu} />
          <Route path='/childrens-stories/solomon' component={Solomon} />
          <Route path='/childrens-stories/tamru' component={Tamru} />
          <Route path='/childrens-stories/tarekegn' component={Tarekegn} />
        </Card>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
