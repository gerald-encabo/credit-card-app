import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';
import Pricing from './pages/Pricing/Pricing';
import SignIn from './pages/SignIn/SignIn';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
        <Switch>
           <Route path='/' exact component={ Home } />
           <Route path='/products' exact component={ Products } />
           <Route path='/services' exact component={ Services } />
           <Route path='/pricing' exact component={ Pricing } />
           <Route path='/sign-in' exact component={ SignIn } />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
