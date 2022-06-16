import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import styled from 'styled-components'
import PaymentForm from './CreditPage/CreaditPage';
import 'react-credit-cards/es/styles-compiled.css';



import Home from './Home'
import Search from './Search'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
              <Route path='/' exact component={Home} />
              <Route path='/search' component={Search}/>
              <Route path='/card' component={PaymentForm}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
