import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import Home from './containers/Home';
import AboutFondation from './containers/AboutFondation';
import Support from './containers/Support';
import ChildrensStories from './containers/ChildrensStories';
import Contact from './containers/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Card>
          <Route path='/' exact component={Home} />
          <Route path='/about-fondation' component={AboutFondation} />
          <Route path='/support' component={Support} />
          <Route path='/childrens-stories' component={ChildrensStories} />
          <Route path='/contact' component={Contact} />
        </Card>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
