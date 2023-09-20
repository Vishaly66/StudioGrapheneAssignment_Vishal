import React, { useState } from 'react'

const Contact = () => {
    const [query,setquery]=useState({name:"",email:"",message:""})
    
    var emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    const submitForm = ()=>{
        if(query.name === "")alert("plaese enter your name")
        if(query.email === "")alert("please enter your email")
    if (!emailRegex.test(query.email)) {
      alert("invalid email")
    } 
        if(query.message === "")alert("please enter your message")
        console.log("Submitted sucessfully")
    }
    const handelChange = (e)=>{
    setquery({...query,[e.target.name]:e.target.value})
    }
  return (
    <>
       <div className="contact-form">
          <div className="text">
            <h1>Newslleter</h1>
            <p style={{ fontSize: "larger" }}>
              Get news about articles and updates in your inbox.
            </p>
          </div>
          <div className="form">
            <form>
              <input type="text" name='name' id="name" placeholder="Name"  required onChange={handelChange} />
              <input type="email" name='email' id="email" placeholder="Email" required onChange={handelChange} />
              <input type="text"name='message' id="msg" placeholder="Message" required  onChange={handelChange}/>
            </form>
            <button onClick={submitForm} id='send'>Send</button>
          </div>
        </div>
        <div className="quote">
          GET
          <br />
          IN TOUCH
        </div>
    </>
  )
}

export default Contact
