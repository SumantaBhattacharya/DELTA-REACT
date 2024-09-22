import React from "react";
import "./CommentsForm.css";
import { useState } from "react";
import { useFormik } from 'formik';

const CommentsForm = ({addComment}) => {

const [isFormData, setFormData] = useState({
    username: "",
    comment: "",
    rating: 1
  });

  const handleChange = (event) => {
    setFormData((currData)=>{
      // gave name to access target.name
        currData[event.target.name] =event.target.value 
        
        return({
            ...currData
        })
        // return (...currData , [event.target.name]: event.target.value);
    })
  };

  const handleUserInputs = (e) => {
    /*if (!FormData.username) {
      console.log("username is null");
      e.preventDefault();
      return;
    }*/
    e.preventDefault();
    console.log(isFormData);
    // Add the new comment by calling the function passed from the parent
    addComment(isFormData)
    // to clear form data
    setFormData(()=>{
        return({
            username: "",
            comment: "",
            rating: 1
        })
    })
  };

 

  return (
    <>
      <div className="main">
        <div
        className=""
        style={{borderBottom: "2px solid black", width: "34vw"
        }}
        > 
            
          <h2>Give a comment</h2>
        </div>
        <div className="form">
          <form action="" onSubmit={handleUserInputs}>
            <label htmlFor="username">Your Username...</label>
            <input
              type="email" name="username" id="username" placeholder="Write your username..."
              value={isFormData.username}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="comment">
              <b>Your're valuable comment:</b>
            </label>
            <textarea
              id="comment" name="comment" placeholder="Write your comment..."
              rows="4" cols="50"
              style={{ resize: "none" }}
              value={isFormData.comment}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="rating">rating...</label>
            <input type="number" 
            name="rating" id="rating" placeholder="1-5"
            min={1} max={5}
            value={isFormData.rating}
            onChange={handleChange}
            />
            <br />
          <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CommentsForm;
