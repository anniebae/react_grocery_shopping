import React, { Component } from 'react'
import css from './index.css'

import JSON from '../../../store_items.json'


class Fruits extends Component {
  constructor(props) {
    super(props);
    this.addItemBtn = this.addItemBtn.bind(this);
  }

  addItemBtn() {
    alert('btn clicked')
  }
  render() {
    return(
      <div className="fruitsWrapper">

        <div className="itemGroup">
          {Object.keys(JSON).map(key => (
            <div className="itemBlock">
              <div className="itemInfo">
                <img src={JSON[key].imgSrc} className="itemImg" key={key} />
                <p className="itemName">{JSON[key].itemName}</p>
                <p className="itemPrice">
                  ${JSON[key].price}
                  <span className="itemRemaining">{JSON[key].quantityRemaining} In Stock</span>
                  
                </p>
                <button onClick={this.addItemBtn}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}


export default Fruits