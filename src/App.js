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

        </Card>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
