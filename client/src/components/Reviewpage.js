import React from 'react';
import axios from 'axios';
import Comment from './Comments'
import Reviewform from './Reviewform'

class Reviewpage extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        reviews: [],
      };
      this.fetch = this.fetch.bind(this);
  }

    componentDidMount() {
      this.fetch();
    }

    fetch () {
      axios({
        method: 'get',
        url: `/api/user/reviews/${this.props.user_id}`,
      })
      .then((reviews) => {
        this.setState({reviews: reviews.data});
      })
      .catch(err => {
        console.log('Fetch err:', err);
      });
    }

    render () {
        return (
            <div>
                {this.state.reviews.map((comment) => {
                  return (<Comment key={comment.reviewee_id} comment={comment.message} reviewee_id={comment.reviewee_id}/>);
                })}
                <Reviewform user_email={this.props.user_email}/>
            </div>
        )
    }
}

export default Reviewpage;