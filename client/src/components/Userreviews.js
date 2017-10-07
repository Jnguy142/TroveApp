import React from 'react';
import { Link, Route } from 'react-router-dom';
import Reviewpage from './Reviewpage';

class Userreviews extends React.Component {
constructor (props) {
super(props);
}
  render () {
    return (
      <div>
        <h1> <Link to="/userwardrobe/UserReviews">Reviews </Link>
        </h1>
          <Route exact path={'/userwardrobe/UserReviews'} component={() => (
            <Reviewpage user_email={this.props.user_email} wardrobe_user_id={this.props.wardrobe_user_id}/>
          )} />
      </div>
    )
  }
};

export default Userreviews;