import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import css from './index.css'

import Fruits from '../Fruits'
import ShoppingCart from '../ShoppingCart'

import greycat from '../../images/pic6490.jpg'

class App extends Component {
  render() {
    return(
      <div>
        <h1>Fruits!</h1>
        <Fruits />
        <ShoppingCart />
      </div>
    )
  }
}


var app = document.getElementById('app');

ReactDOM.render(<App />, app)