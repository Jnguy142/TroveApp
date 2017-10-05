import React from 'react';
import axios from 'axios';

class Reviewpage extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        reviews: [],
      };
  }

    componentDidMount() {
      //axios call
      this.fetch();
    }

    fetch() {
      axios.get('/api/user/reviews')
      .then((reviews) => {
        console.log(reviews.data);
      })
      .catch(err => {
        console.log('Fetch err:', err);
      })
    }

    render () {
        return (
            <div>
                ALL THE USER's REVIEWS GO HERE
            </div>
        )
    }
}

export default Reviewpage;