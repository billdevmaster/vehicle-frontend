import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './assets/fonts/Akira-Expanded-Demo.otf';
import './assets/fonts/GRIFTER™Bold.otf';

import Header from './layout/header';
import Footer from './layout/footer';
import Home from './view/dashboard';
// import BusdHire from './view/hire';
import store from './redux/store';

import Styled from 'styled-components';

const StyleWrapper = Styled.div`
  font-family: Montserrat, sans-serif;
  .hero__gradient {
    position: fixed;
    left: auto;
    top: auto;
    right: 0%;
    bottom: 0%;
    z-index: 2;
    display: block;
    width: 200em;
    height: 200em;
    margin-right: -135.7em;
    margin-bottom: -133.1em;
    background-image: radial-gradient(circle farthest-corner at 50% 50%, rgba(54, 19, 185, 0.7), rgba(92, 49, 255, 0) 69%);
    opacity: 0.9;
    pointer-events: none;
  }

  .hero__gradient.is--other {
    position: fixed;
    left: auto;
    top: auto;
    right: 0%;
    bottom: 0%;
    z-index: 2;
    display: block;
    width: 200em;
    height: 200em;
    margin-right: -135.7em;
    margin-bottom: -133.1em;
    background-image: radial-gradient(circle farthest-corner at 50% 50%, rgba(54, 19, 185, 0.7), rgba(92, 49, 255, 0) 69%);
    opacity: 0.9;
    width: 160em;
    height: 160em;
    margin-right: -40.6em;
    margin-bottom: -133.7em;
    background-image: radial-gradient(circle farthest-corner at 50% 50%, rgba(255, 49, 84, 0.49), rgba(248, 140, 212, 0) 69%);
    opacity: 0.73;
    pointer-events: none;
  }
  .text-red {
    color: #dd2b37;
  }
  .text-right {
    text-align: right;
  }
  img {
    width: 100%;
  }
  .default-btn {
    padding: 10px 40px;
    margin: 10px auto;
    margin-bottom: 10px;
    border-radius: 40px;
    background-color: #dd2b37;
    box-shadow: 1px 1px 4px -1px #000;
    font-family: 'Akira', sans-serif;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    border: none;
  }
`;


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/home" component={Home} /> */}
          {/* <Redirect to="/" component={Dashboard} /> */}
        </Switch>
        <Footer />  
      </Router>
      <ToastContainer />
    </Provider>
  );
}

export default App;
