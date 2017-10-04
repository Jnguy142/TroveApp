import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserWardrobeItem from './UserWardrobeItem';
import Userreviews from './Userreviews';
import axios from 'axios';

class UserWardrobe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      userRating: '',
    }
    this.fetch = this.fetch.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    axios.get(`/api/user/owner/${this.props.getThisUser}`)
    .then(user => {
      this.setState({ name: user.data.userName, userRating: user.data.userRating });
    })
    .catch(err => {
      console.log('User fetch err:', err);
    })
  }

  render() {
    return (
      <div className='list-section'>
      <div className='list-section-title'>
          <span>{this.state.name}</span>
        </div>
        <div className='row'>
          {this.props.passItems.map(item => 
            {if(item.rentee_id === this.props.getThisUser) {
              return <UserWardrobeItem passItem={item} key={item.id} /> }
            }
          ).reverse()}
        </div>
        <BrowserRouter>
          <Userreviews userRating={this.state.userRating} />
        </BrowserRouter>
      </div>
    );
  }
}

export default UserWardrobe;