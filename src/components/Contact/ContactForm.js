import React, { useState } from 'react'
import axios from 'axios'

export default function ContactForm() {
    
    const [name, setName] = useState("");
    const [errname, setErrname] = useState(false);
    const [contact, setContact] = useState("");
    const [errcontact, setErrContact] = useState(false);
    const [email, setEmail] = useState("");
    const [erremail, setErrEmail] = useState(false);
    const [subject, setSubject] = useState("");
    const [errsubject, setErrSubject] = useState(false);
    const [message, setMessage] = useState("");
    const [errmessage, setErrMessage] = useState(false);
    const [agree, setAgree] = useState(false);
    const [erragree, setErrAgree] = useState(false);
    const title = "Let’s talk about what you want to accomplish and how we can make it happen.";
    const subtitle = "This is the beginning of creating the life that you want to live.";
    const description = "Drop us a line! We’ll set up a time to chat over the phone or in-person to know more about your business needs. All primary conferences are free of charge.";
    const submitHandler = (e) =>{
        e.preventDefault();
        const agreePromiss = new Promise((resolve, reject) => {
            if(agree === false)
            {
                setErrAgree(true)
                reject(false)
            }
            else
            {
                resolve(true);
            }
        });
        const namePromiss = new Promise((resolve, reject) => {
            if(name.length <= 0 || name.length <= 3)
            {
                setErrname(true)
                reject(false)
            }
            else
            {
                resolve(true);
            }
        });
        const contactPromiss = new Promise((resolve, reject) => {
            if(contact.length <= 5 )
            {
                setErrContact(true)
                reject(false)
            }
            else
            {
                resolve(true);
            }
        });
        const emailPromiss = new Promise((resolve, reject) => {
            if(email.length <= 5 )
            {
                setErrEmail(true)
                reject(false)
            }
            else
            {
                resolve(true);
            }
        });
        const subjectPromiss = new Promise((resolve, reject) => {
            if(subject.length <= 0 )
            {
                setErrSubject(true)
                reject(false)
            }
            else
            {
                resolve(true);
            }
        });
        const messagePromiss = new Promise((resolve, reject) => {
            if(message.length <= 0 )
            {
                setErrMessage(true)
                reject(false)
            }
            else
            {
                resolve(true);
            }
        });

        Promise.all([agreePromiss, namePromiss, contactPromiss, emailPromiss, subjectPromiss, messagePromiss]).then((values) => {
            axios({
                method: 'post',
                url: 'http://localhost:5000/api/contact',
                data: {
                  name: name,
                  email: email,
                  contact: contact,
                  subject: subject,
                  message: message
                },
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }).then((response) => {
                if (response.status === 200) {
                    setName("");
                    setContact("");
                    setEmail("");
                    setSubject("");
                    setMessage("");
                    setAgree("");
                }
            }).catch((response) => console.log('error', response))
        });
    }  
    return (
    <section className="space-ptb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h1>Contact us</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-lg-around position-relative pt-5">
          <div className="col-lg-4 col-md-5 mb-4">
            <div className="is-sticky">
              <h4 className="mb-4">{title}</h4>
              <h5 className="text-light">{subtitle}</h5>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 pe-lg-5">
            <div className="p-4 p-md-5 bg-white shadow">
              <h3>Need assistance? please fill the form</h3>
              <form className="mt-4" onSubmit={submitHandler}>
                <div className="mb-3">
                  <input type="text" className={`form-control ${errname ? 'is-invalid' : ''}`} name="name" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                  <div className="invalid-feedback">Please provide a Name.</div>
                </div>
                <div className="mb-3">
                  <input type="text" className={`form-control ${errcontact ? 'is-invalid' : ''}`} name="contact" placeholder="Contact Number" onChange={(e)=>setContact(e.target.value)}/>
                  <div className="invalid-feedback">Please provide a Contact Number.</div>
                </div>
                <div className="mb-3">
                  <input type="email" className={`form-control ${erremail ? 'is-invalid' : ''}`} name="email" placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)}/>
                  <div className="invalid-feedback">Please provide a Email.</div>
                </div>
                <div className="mb-3">
                  <input type="text" className={`form-control ${errsubject ? 'is-invalid' : ''}`} name="subject" placeholder="Enquiry Type" onChange={(e)=>setSubject(e.target.value)}/>
                  <div className="invalid-feedback">Please provide a Subject.</div>
                </div>
                <div className="mb-4">
                  <textarea className={`form-control ${errmessage ? 'is-invalid' : ''}`} name="description" placeholder="Enquiry Description" onChange={(e)=>setMessage(e.target.value)} rows="5"></textarea>
                  <div className="invalid-feedback">Please provide a Message.</div>
                </div>
                <div className="mb-4">
                  <div className="form-check ms-1">
                    <input className={`form-check-input ${erragree ? 'is-invalid' : ''}`} type="checkbox" value="" onChange={(e)=>setAgree(e.target.checked)}/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      I agree to talk about my project with Hi-soft
                    </label>
                    <div className="invalid-feedback">Please agree conditions.</div>
                  </div>
                </div>
                <div className="mb-0">
                  <button type="submit" className="btn btn-primary">Send Massage<i className="fas fa-arrow-right ps-3"></i></button>
                </div>
              </form>
            </div>
          </div>
          <div className="contact-bg-logo text-center">
            <i className="fas fa-comment"></i>
          </div>
        </div>
      </div>
    </section>
  )
}
