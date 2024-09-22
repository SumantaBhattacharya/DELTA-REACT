import React from "react";
import { useFormik } from 'formik';
import "./CommentsForm.css";

const CommentsForm = ({ addComment }) => {

  const validate = (values) => {
    const errors = {};
  
    if (!values.username) {
      errors.username = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
      errors.username = 'Invalid email address';
    }
  
    if (!values.comment) {
      errors.comment = 'Comment is required';
    } else if (values.comment.length > 200) {
      errors.comment = 'Comment must be 200 characters or less';
    }
  
    if (!values.rating) {
      errors.rating = 'Rating is required';
    } else if (values.rating < 1 || values.rating > 5) {
      errors.rating = 'Rating must be between 1 and 5';
    }
  
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      comment: '',
      rating: 1
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      addComment(values);  // Pass form data to the parent Comments component
      resetForm();         // Clear form after submission
    },
  });

  return (
    <div className="main">
      <div style={{ borderBottom: "2px solid black", width: "34vw" }}> 
        <h2>Give a comment</h2>
      </div>
      <div className="form">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="username">Your Username...</label>
          <input
            type="email" 
            name="username" 
            id="username" 
            placeholder="Write your username..."
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="error">{formik.errors.username}</div>
          ) : null}
          <br />

          <label htmlFor="comment">
            <b>Your valuable comment:</b>
          </label>
          <textarea
            id="comment" 
            name="comment" 
            placeholder="Write your comment..."
            rows="4" 
            cols="50"
            style={{ resize: "none" }}
            value={formik.values.comment}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.comment && formik.errors.comment ? (
            <div className="error">{formik.errors.comment}</div>
          ) : null}
          <br />

          <label htmlFor="rating">Rating...</label>
          <input 
            type="number"
            name="rating" 
            id="rating" 
            placeholder="1-5"
            min={1} 
            max={5}
            value={formik.values.rating}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.rating && formik.errors.rating ? (
            <div className="error">{formik.errors.rating}</div>
          ) : null}
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CommentsForm;
