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
      <div className='wrapper'>
        <Header />
        <Navbar />
        <Card>
          <Route path='/barkot/' exact component={Home} />
          <Route path='/barkot/about-us' component={AboutUs} />
          <Route path='/barkot/our-mission' component={OurMission} />
          <Route path='/barkot/project' component={Project} />
          <Route path='/barkot/childrens-stories' component={ChildrensStories} />
          <Route path='/barkot/contact' component={Contact} />
          <Route path='/barkot/voluntary' component={Voluntary} />
          <Route path='/barkot/donate' component={Donate} />
          <Route path='/barkot/adoption' component={Adoption} />
          <Route path='/barkot/missionary-reports' component={MissionaryReports} />
          <Route path='/barkot/childrens-stories/abraham' component={Abraham} />
          <Route path='/barkot/childrens-stories/binyam' component={Binyam} />
          <Route path='/barkot/childrens-stories/erdachew' component={Erdachew} />
          <Route path='/barkot/childrens-stories/estifanos' component={Estifanos} />
          <Route path='/barkot/childrens-stories/habtamu' component={Habtamu} />
          <Route path='/barkot/childrens-stories/solomon' component={Solomon} />
          <Route path='/barkot/childrens-stories/tamru' component={Tamru} />
          <Route path='/barkot/childrens-stories/tarekegn' component={Tarekegn} />
        </Card>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
