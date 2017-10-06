import React from 'react';
import axios from 'axios';
import { Button, FormGroup, FormControl, Grid, Row, Col} from 'react-bootstrap';

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
        if (response.data === 0) {    
          alert('You cannot give yourself a review, Kiddo');
        } else if (response.data === 1) {
          alert('You can only review a user once, buster');
        }else { 
          alert('You successfully posted a review');
        }
      })
      .catch((err) => {
      console.log('error posting comment')
    }) 
  }

  render () {
    return(
      <FormGroup id="user-review-form">
        <Grid id="review-form-grid">
          <Row id="review-form-row">
            <Col xs={2} md={5}><FormControl id="user-review" componentClass="textarea" /></Col>
            <Col xs={6} md={4}><Button onClick={this.onClickHandler} id="submit-review" bsStyle="primary" bsSize="large" >Submit</Button></Col>
          </Row>
        </Grid>
      </FormGroup>
      );
  }
}

export default Reviewform;