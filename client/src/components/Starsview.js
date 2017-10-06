import React from 'react'
import {ProgressBar} from 'react-bootstrap';

var Starsview = (props) => {
  return (
    <div id="stars-view">
      {props.avg} STARS
      <div>
        1 Stars: <ProgressBar striped bsStyle="success" now={40} />
        2 Stars: <ProgressBar striped bsStyle="info" now={20} />
        3 Stars: <ProgressBar striped bsStyle="warning" now={60} />
        4 Stars: <ProgressBar striped bsStyle="warning" now={60} />
        5 Stars: <ProgressBar striped bsStyle="danger" now={80} />
      </div>
    </div>
  )
};

export default Starsview;