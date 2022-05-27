import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FstPage from '../../pages/fstPage';
import Vines from '../../pages/vines';
import WineQuality from '../../pages/wineQuality';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Layout from './Layout';

export const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        <Layout>
          <LayoutRoutes />
        </Layout>
        <Footer />
      </div>
    </Router>
  );
};

//component to all new pages and routes have the default layout design
export const LayoutRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={FstPage} />
      <Route path="/vines_records" component={Vines} />
      <Route path="/wine_records" component={WineQuality} />
    </Switch>
  );
};
