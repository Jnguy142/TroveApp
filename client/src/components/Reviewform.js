import React from 'react';
import axios from 'axios';
import { Button, FormGroup, FormControl, Grid, Row, Col, Modal} from 'react-bootstrap';

class Reviewform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup:false,
      popupInfo: '',
    }
    this.postReview = this.postReview.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.closePopup = this.closePopup.bind(this);
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
          this.setState({ 
            showPopup: true, 
            popupInfo:'You cannot give yourself a review, Kiddo'});
        } else if (response.data === 1) {
          this.setState({ showPopup: true, 
            popupInfo:'You can only review a user once, buster'});
        }else { 
          this.setState({ showPopup: true, 
            popupInfo:'You successfully posted a review'});
        }
      })
      .catch((err) => {
      console.log('error posting comment')
    }) 
  }

  closePopup () {
    this.setState({showPopup: false});
  }

  render () {
    return(
      <div>
        <FormGroup id="user-review-form">
          <Grid id="review-form-grid">
            <Row id="review-form-row">
              <Col xs={2} md={5}><FormControl id="user-review" componentClass="textarea" /></Col>
              <Col xs={6} md={4}><Button onClick={this.onClickHandler} id="submit-review" bsStyle="primary" bsSize="large" >Submit</Button></Col>
            </Row>
          </Grid>
        </FormGroup>
        <Modal show={this.state.showPopup} onHide={this.closePopup}>
            <Modal.Header closeButton>
              <Modal.Body>
                {this.state.popupInfo}
              </Modal.Body>
            </Modal.Header>
          </Modal>
      </div>
      );
  }
}

export default Reviewform;