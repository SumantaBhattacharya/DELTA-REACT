import React, { useState } from 'react'

const Form = () => {

    // let [isFullName , setFullName] = useState("")
    // let [isUsername, setUsername] = useState("")

    let [isFormData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
    })

    // let handleNameChange = (e)=>{
    //     setFullName(e.target.value)
    //     console.log(e.target.value);
    // }

    // let handleUsernameChange = (e)=>{
    //     setUsername(e.target.value)
    // }// update the value of isFullname and isUsername

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(isFormData);
        
        setFormData({
            fullName: "",
            username: "",
            password:"",
        })//refresh
        //console.log('Form submitted')
        // console.log(`Name: ${isFullName}, Email: ${isUsername}`);
    }

    let handleInputChange = (e)=>{
        // setFormData({...isFormData, [e.target.id]: e.target.value })
        // setFormData({...isFormData, [e.target.name]: e.target.value })
        // console.log(e.target.id); // field name
        // console.log(e.target.value); // new value of the field
        // console.log(isFullName, isUsername);
        // event.target.name (change field) | evenet.target.value (new value of the field)
        //console.log(isFormData);

        let fieldName = e.target.name;
        let newValue = e.target.value;
        //console.log(newValue); // fullname 

        setFormData((currData)=> {
            //return {...currData, [e.target.name]: newValue }  // return the updated object with new value of the field
            // return {...currData, [fieldName]: newValue } // using object destructuring to update the value of the field directly
            //currData[e.target.name]// using square brackets called computed property name 
            currData[fieldName] = newValue
            return({
                ...currData
            })
        })
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Your Name!</label>
            <input id='fullName' value={isFormData.fullName} onChange={handleInputChange}  type="text" placeholder='name?' name='fullName' 
            />

            <label htmlFor="username">Your email_id!</label>
            <input id='username' value={isFormData.username} onChange={handleInputChange}  type="email" placeholder='email?' name='username' 
            />

            <label htmlFor="password">Your password!</label>
            <input id='password' value={isFormData.password} onChange={handleInputChange}  type="password" placeholder='password?' name='password' 
            />
            <button>Submit</button>
        </form>
        </>
    )

}

export default Form

/* 

The name in the input should be same as the object name eg- name="username"

useState is used to manage the state of the component

Form Component
useState for Full Name and Email
handleInputChange for Full Name and Email
Form Submit Event


Forms in React
The standcard way with Forms is to use Controlled Componenets. So we make React state to be "single source of truth.

Markdown
In HTML, form element such as <input>, <textarea>, and <select> typically maintain their own state and updates it based on user input. In React, mutable state is typically kept in the state property of components and only updated with setState().

We can combine the two by making the React state to be the "single source of truth". Then the React component that renders a form also controls what happend in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a "controlled component

react old docs


Handling Multiple Inputs
We create a common handleInputChange() for all elements

evenet.target.name changed field
evenet.target.value new value of the field
*/
