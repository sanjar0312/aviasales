import React from 'react';
import Cards from 'react-credit-cards';
import { Buy } from '../Search/Results/card';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Inp = styled.input`

  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`
 
export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }

  handleClick = (e) => {
      alert('Билет успешно приобретен')
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }

  
  render() {
    return (
      <div id="PaymentForm" style={{width:'300px', display:'flex', alignItems:'center', flexDirection:'column',margin:'90px auto', padding:'100px, 10px' }}>
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form style={{width:'300px', display:'flex', alignItems:'center', flexDirection:'column',margin:'20px auto' }}>
        	<Inp
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <Inp
          maxLength={16}
          max={16}
            type="tel"
            name="name"
            placeholder="name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
        	<Inp
             maxLength={4}
             max={4}
            type="tel"
            name="expiry"
            placeholder="expiry"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          	<Inp
              maxLength={3}
              max={3}
            type="tel"
            name="cvc"
            placeholder="cvc"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <Link to='/'>
          <Buy onClick={this.handleClick}>
              Оплатить
          </Buy>
          </Link>
        </form>
      </div>
    );
  }
}