import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './assets/fonts/Akira-Expanded-Demo.otf';
import './assets/fonts/GRIFTER™Bold.otf';

import Header from './layout/header';
import Footer from './layout/footer';
import Home from './view/home';
// import BusdHire from './view/hire';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <div className='content'>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
        <Footer />  
      </Router>
      <ToastContainer />
    </Provider>
  );
}

export default App;
