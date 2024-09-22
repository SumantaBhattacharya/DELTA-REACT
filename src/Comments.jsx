import React, { useState } from 'react'
import { useId } from 'react';
import "./CommentsForm.css";
import CommentsForm from './CommentsForm';

const Comments = () => {

  let [isComments,setComments]= useState([{
    username: "sumanta2004@gmail.com",
    comment: "Learning REACT to build projects",
    rating: 5
  },])

  //addComment(isFormData)
  const addComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };// prevC is the previous all isCommnets and add newComment

  // adding useId we can even perform crud operations

  return (
    <div>
      <h1><i>All Comments</i></h1>
      <div className='all-comments'>
        {isComments.map((comment, index) => (
          <div key={index} className='comment'>
            <h3>{comment.username}</h3>
            <p>{comment.comment}</p>
            <p>Rating: {comment.rating}/5</p>
          </div>
        ))}
        <CommentsForm addComment={addComment} />
      </div>
    </div>
  )
}

export default Comments

/*
CommentsForm when the user sublits it should pass the values to to the comments

CommentsForm to the comments in the approach all the new comments will not be shown all the new comment will be displayed 

Comment - CommentsForm the apprach we are using


*/