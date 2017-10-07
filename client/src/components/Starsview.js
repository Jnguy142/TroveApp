import React from 'react';
import {ProgressBar} from 'react-bootstrap';
import Starprog from './Starprog';

var Starsview = (props) => {
  var key = "";
  var components = [];
  for (key in props.ratings) {
    components.unshift(<Starprog key={key} star_rating={key} total={props.total} amount={props.ratings[key]} />)
  }
  return (
    <div id="stars-view">
      {props.avg} Total Votes: {props.total}
      {components}
    </div>
  )
};

export default Starsview;