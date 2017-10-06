import React from 'react'
import {ProgressBar} from 'react-bootstrap';

var Starsview = (props) => {
  return (
    <div id="stars-view">
      {props.avg} STARS
      <div>
        1 Stars: <ProgressBar striped now={40} />
        2 Stars: <ProgressBar striped now={20} />
        3 Stars: <ProgressBar striped now={60} />
        4 Stars: <ProgressBar striped now={60} />
        5 Stars: <ProgressBar striped now={80} />
      </div>
    </div>
  )
};

export default Starsview;