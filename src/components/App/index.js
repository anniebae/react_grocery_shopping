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
        <div className="appTitle">
          <div className="titleWrapper">
            <h1>Fruit</h1>
          </div>
        </div>
        <Fruits />
        <ShoppingCart />
      </div>
    )
  }
}


var app = document.getElementById('app');

ReactDOM.render(<App />, app)