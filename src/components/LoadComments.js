import React from "react";
import dateFormat from "dateformat";

const LoadComments = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div className="my-2" key={comment.id}>
          <p className="m-0">{comment.author}</p>
          <h6 className="mb-0">{comment.comment}</h6>
          <small>
            {dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}
          </small>
        </div>
      ))}
    </div>
  );
};

export default LoadComments;
