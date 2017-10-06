import React from 'react';
import axios from 'axios';
import Comment from './Comments';
import Reviewform from './Reviewform';
import Starsview from './Starsview';

class Reviewpage extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        reviews: [],
        rating: {},
      };
      this.fetch = this.fetch.bind(this);
  }

    componentDidMount() {
      this.fetch();
    }

    fetch () {
      axios({
        method: 'get',
        url: `/api/user/reviews/${this.props.wardrobe_user_id}`,
      })
      .then((reviewsInfo) => {
        this.setState({reviews: reviewsInfo.data.reviews});
      })
      .catch(err => {
        console.log('Fetch err:', err);
      });
    }

    render () {
        var key = 0;
        return (
            <div id="review-component">
                <Starsview />
                { this.state.reviews.map((comment) => {
                  key = key + 1;
                  return (<Comment key={key} comment={comment.message} reviewee_id={comment.reviewee_id}/>);
                })}
                <Reviewform user_email={this.props.user_email} wardrobe_user_id={this.props.wardrobe_user_id}/>
            </div>
        )
    }
}

export default Reviewpage;