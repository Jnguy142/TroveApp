import React from 'react'

var Starsview = (props) => {
  return (
    <div id="stars-view">
      STARS GO HERE 
      <ul>
        <li>1 : {props.ratings[1]}</li>
        <li>2 : {props.ratings[2]}</li>
        <li>3 : {props.ratings[3]}</li>
        <li>4 : {props.ratings[4]}</li>
        <li>5 : {props.ratings[5]}</li>
      </ul>
    </div>
  )
};

export default Starsview;