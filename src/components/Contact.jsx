import React,{ useRef, useState } from 'react'
import "./contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_no69h9k', // Replace with your EmailJS service ID
                'template_98ei4wg', // Replace with your EmailJS template ID
                form.current,
                'vu8NQbdo_al3pcY5t' // Replace with your EmailJS public key
            )
            .then(
                (result) => {
                    console.log('Email successfully sent!', result.text);
                    setIsSent(true);
                    setErrorMessage('');
                    form.current.reset(); // Reset the form after submission
                },
                (error) => {
                    console.error('Error sending email:', error.text);
                    setIsSent(false);
                    setErrorMessage('Failed to send the email. Please try again.');
                }
            );
    };

  return (
    <section className='contact section' id='contact'>
        <h2 className="section__title">Contact Me</h2>
        <span className="section__subtitle">Get in touch</span>

        <div className="contact__container container grid section__border">
            <div className="contact__content">
                <h3 className="contact__title">
                <i class="ri-chat-3-line"></i> Talk to me
                </h3>
                <div className="contact__info">
                    <div className="contact__data">
                        <span className="contact__data-title">Email
                        </span>
                        <span className="contact__data-info">vipulgoyal776@gmail.com</span>
                        
                    </div>
                    <div className="contact__data">
                        <span className="contact__data-title">Whatsapp
                        </span>
                        <span className="contact__data-info">+91 9520417250</span>
                        <a href="https://api.whatsapp.com/send?phone=919520417250&text=Hello,more information" target='_blank' className='contact__button'>
                            Write me <i class="ri-arrow-right-line"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="contact__content">
                <h3 className="contact__title">
                <i class="ri-send-plane-line"></i> Write me your project
                </h3>

                <form ref={form} onSubmit={sendEmail} className="contact__form" id='contact-form'>
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type="text" name='user-name' required className="contact__form-input" id='contact-name' placeholder='Write your name'/>
                    </div>
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Mail</label>
                        <input type="email" name='user-email' required className="contact__form-input" id='contact-email' placeholder='Write your email'/>
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Project</label>
                        <textarea name="user_project" placeholder='Write your project' id="contact__form-input" className="contact__form-input"></textarea>
                    </div>

                    <button type="submit" className="contact__button">
                        Submit <i class="ri-arrow-right-up-line"></i>
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact