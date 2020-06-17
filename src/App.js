import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Card>Zobacz co działo sie u nas w ostatnim czasie</Card>
      <Footer />
    </div>
  );
}

export default App;
