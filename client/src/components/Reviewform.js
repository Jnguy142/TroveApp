import React from 'react';
import axios from 'axios';

class Reviewform extends React.Component {
  constructor(props) {
    super(props);
    this.postReview = this.postReview.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler (event) {
    event.preventDefault();
    var comment = document.getElementById("user-review").value;
    document.getElementById("user-review").value = "";
    this.postReview(comment);
  }

  postReview (comment) {
    console.log(this.props.user_email);
    axios({
      method:'post',
      url:`/api/user/reviews/${this.props.wardrobe_user_id}`,
      data: { 
        comment:comment,
        rentee_id: this.props.wardrobe_user_id,
        reviewee_email: this.props.user_email,
      }
    }).then( (response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log('error posting comment')
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