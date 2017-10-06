import React from 'react';
import axios from 'axios';

class Reviewform extends React.Component {
  constructor(props) {
    super(props);
  }

  onClickHandler (event) {
    var comment = document.getElementById("user-review").value;
    event.preventDefault();
  }

  postReview (comment) {
    axios({
      method:'post',
      url:'api/user/reviews',
    })
  }

  render () {
    return(
      <form id="user-review-form">
          <textarea id="user-review">
          </textarea>
          <span><button onClick={this.onClickHandler} id="submit-review">Submit</button></span>
      </form>
      )
  }
}

export default Reviewform;