import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader.jsx'
import { Footer } from './cmps/Footer.jsx';
import Home from './pages/Home.jsx';
function App() {
  return (
    <Router>
      <AppHeader />
      <main className="App">
        <Home />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
