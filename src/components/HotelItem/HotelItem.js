import React from 'react'
import { Rating } from 'material-ui-rating'

import './HotelItem.scss'

const HotelItem = (props) => (
  <div className="HotelItem">
    <div className="HotelItem-Left">
      <img src={props.image} />
    </div>
    <div className="HotelItem-Middle">
      <div className="HotelItem-Middle-RatingIcon">
        <Rating
          value={props.rate}
          max={5}
          onChange={(value) => console.log(`Rated with value ${value}`)}
        />
      </div>
      <div className="HotelItem-Middle-Title">{props.name.toUpperCase()}</div>
      <div className="HotelItem-Middle-Description">{props.description}</div>
      <div className="HotelItem-Middle-Buttons">Buttons here</div>
    </div>
    <div className="HotelItem-Right">Price</div>
  </div>
)

export default HotelItem