import React from 'react';

var Comment = (props) => {
  return (
    <div>
      <p>
        {props.reviewee_id} :
      </p>
      <p>
        {props.comment}
      </p>
    </div>
  )
}

export default Comment;