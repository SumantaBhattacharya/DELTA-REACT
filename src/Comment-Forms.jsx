import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Use uuid for unique IDs
import "./CommentsForm.css";
import CommentsForm from './CommentsForms';

const Comments = () => {
  const [isComments, setComments] = useState([{
    id: uuidv4(), // Use uuid to generate unique ID
    username: "sumanta2004@gmail.com",
    comment: "Learning REACT to build projects",
    rating: 5
  }]);

  const addComment = (newComment) => {
    setComments((prevComments) => [
      ...prevComments, 
      { ...newComment, id: uuidv4() } // Generate a unique ID for each new comment
    ]);
  };

  return (
    <div>
      <h1><i>All Comments</i></h1>
      <div className='all-comments'>
        {isComments.map((comment) => (
          <div key={comment.id} className='comment'>
            <h3>{comment.username}</h3>
            <p>{comment.comment}</p>
            <p>Rating: {comment.rating}/5</p>
          </div>
        ))}
        <CommentsForm addComment={addComment} />
      </div>
    </div>
  );
};

export default Comments;
