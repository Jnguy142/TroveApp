import React from 'react';

class Reviewform extends React.Component {
  constructor(props) {
    super(props);
  }

  onClickHandler (event) {
    var comment = document.getElementById("user-review").value;
    document.getElementById("user-review").value = "";
    console.log(comment);
    event.preventDefault();
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