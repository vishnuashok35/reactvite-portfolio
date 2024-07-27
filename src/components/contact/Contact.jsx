import React from 'react'
import './contact.css'
import email from '../../assets/email.png'
import call from '../../assets/call.png'
import location from '../../assets/location.png'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "d1f3ef95-fba4-4a9c-8b17-583addb905c3");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            Get in touch
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>feel free to send me a message about anything that you want me to work on. you can contact anytime</p>
                <div className="contact-deatils">
                    <div className="contact-detail">
                        <img src={email} alt="" /><p>vishnuashok35@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call} alt="" /><p>8086698357</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location} alt="" /><p>perambra,calicut,kerala</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Enter your name</label>
                <input type="text" placeholder='please enter your name'  name='name'/>
                <label htmlFor="">enter your email address</label>
                <input type="email" placeholder='please enter your email' name='email' />
                <label htmlFor="">write your message here</label>
                <textarea name="message" rows="8" placeholder='enter your message'></textarea>
                <button type='submit' className='contact-submit'>submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact