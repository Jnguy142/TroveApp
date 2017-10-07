import React from 'react'
import {ProgressBar, Image} from 'react-bootstrap';

var Starprog = (props) => {
  var imgurl = 'https://cdn2.iconfinder.com/data/icons/flat-christmas-icons/600/xmas-icons-09-512.png';
  var starimgs = [];
  for (var i = 0; i < props.star_rating; i++) {
    starimgs.push(<Image className="star-img" src={`${imgurl}`} rounded />);
  }
  return (
    <div className="stars-and-bar">
      {starimgs}
      <ProgressBar striped now={Math.floor((props.amount / props.total) * 100)} label={props.amount} />
    </div>
  );
}

export default Starprog;