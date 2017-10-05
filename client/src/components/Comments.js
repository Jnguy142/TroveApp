import React from 'react';

var Comment = (props) => {
  return (
    <div>
      <p>
        <span>{props.reviewee_id}  </span>
        {props.comment}
      </p>
    </div>
  )
}

export default Comment;