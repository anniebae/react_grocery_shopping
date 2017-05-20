import React, { Component } from 'react'
import css from './index.css'

import JSON from '../../../store_items.json'


class Fruits extends Component {
  render() {



    return(
      <div>
        Fruits go here

        <div className="itemGroup">
          {Object.keys(JSON).map(key => (
            <div className="itemBlock">
              <div className="itemInfo">
                <p className="itemName">{JSON[key].itemName}</p>
                <img src={JSON[key].imgSrc} className="itemImg" key={key} />
                <p className="itemPrice">${JSON[key].price}</p>
                <p className="itemRemaining">{JSON[key].quantityRemaining} remaining</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}


export default Fruits