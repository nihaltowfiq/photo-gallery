import dateFormat from 'dateformat';
import React from 'react';

const LoadComments = ({ comments }) => (
    <div>
        {comments.map((comment) => (
            <div className="my-2" key={comment.id}>
                <p className="m-0">{comment.author}</p>
                <h6 className="mb-0">{comment.comment}</h6>
                <small>{dateFormat(comment.date, 'dddd, mmmm dS, yyyy, h:MM TT')}</small>
            </div>
        ))}
    </div>
);

export default LoadComments;
