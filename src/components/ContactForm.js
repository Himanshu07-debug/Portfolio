import React from "react";
import "./ContactForm.css";

const ContactForm = () => {

    return (
        <div className="contact-form-content">
            <h5>Questions, Thoughts, Or just want to say hello?</h5>
            <form action="mailto:himanshusharma2002.2000@gmail.com">
               <div className="name-container">
                    <input type="text" name="firstName" placeholder="firstName"></input>
                    <input type="text" name="lastName" placeholder="lastName" />
                </div> 
                <input type="text" name="email" placeholder="Email"></input>
                <textarea type="text" name="message" placeholder="Message" rows={3} />

                <button type="submit" >SEND</button>
            </form>
        </div>
    )

}

export default ContactForm;