import React from 'react';
import { Link, Route } from 'react-router-dom';
import Reviewpage from './Reviewpage';

class Userreviews extends React.Component {
constructor (props) {
super(props);
}
  render () {
    console.log(this.props.user);
    return (
      <div>
        <h1> <Link to="/userwardrobe/UserReviews">Reviews </Link> </h1>
          <Route exact path={'/userwardrobe/UserReviews'} component={() => (
            <Reviewpage user={this.props.user} user_id={this.props.user_id}/>
          )} />
      </div>
    )
  }
};

export default Userreviews;