import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App/App.scss';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Content />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
