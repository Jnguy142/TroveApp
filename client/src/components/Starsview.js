import React from 'react';
import {ProgressBar} from 'react-bootstrap';
import Starprog from './Starprog';

var Starsview = (props) => {
  var key = "";
  var components = [];
  var width = 0;
  for (key in props.ratings) {
    components.unshift(<Starprog onClickHandler={props.onClickHandler} key={key} star_rating={key} total={props.total} amount={props.ratings[key]} />)
  }
  width = Math.floor((props.avg/5) * 100) + '%'
  return (
    <div id="stars-view">
      <div className="star-ratings-sprite">
        <span style={{width: width}} className="star-ratings-sprite-rating">
        </span>
      </div>
      Total Votes: {props.total}
      {components}
    </div>
  )
};

export default Starsview;