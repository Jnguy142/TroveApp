import React from 'react';

class Reviewform extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <form id="user-review-form">
          <textarea id="user-review">
          </textarea>
      </form>
      )
  }
}

export default Reviewform;