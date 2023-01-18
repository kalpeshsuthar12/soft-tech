import React,{useState} from 'react'
import axios from 'axios'

export default function ServiceContactFrom() {
    const [name, setName] = useState("");
    const [errname, setErrname] = useState(false);
    const [contact, setContact] = useState("");
    const [errcontact, setErrContact] = useState(false);
    const [email, setEmail] = useState("");
    const [erremail, setErrEmail] = useState(false);
    const [message, setMessage] = useState("");
    const [errmessage, setErrMessage] = useState(false);
    const [agree, setAgree] = useState(false);
    const [erragree, setErrAgree] = useState(false);
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

        Promise.all([agreePromiss, namePromiss, contactPromiss, emailPromiss, messagePromiss]).then((values) => {
            axios({
                method: 'post',
                url: 'http://localhost:5000/api/contact',
                data: {
                  name: name,
                  email: email,
                  contact: contact,
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
                    setMessage("");
                    setAgree("");
                }
            }).catch((response) => console.log('error', response))
        });
    }  
    return (
    <section className="space-pb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="service-details">
            <h4 className="fw-bold mb-4">Please contact us via below from for more info</h4>              
              <form className="row" onSubmit={submitHandler}>
                <div className="col-md-4 mb-4">
                  <input type="text" className={`form-control ${errname ? 'is-invalid' : ''}`} placeholder="Name" name="name" onChange={(e)=>setName(e.target.value)}/>
                  <div className="invalid-feedback">Please provide a Name.</div>
                </div>
                <div className="col-md-4 mb-4">
                  <input type="text"className={`form-control ${errcontact ? 'is-invalid' : ''}`} placeholder="Phone Number" name="contact" onChange={(e)=>setName(e.target.value)}/>
                  <div className="invalid-feedback">Please provide a Contact Number.</div>
                </div>
                <div className="col-md-4 mb-4">
                  <input type="email"  className={`form-control ${erremail ? 'is-invalid' : ''}`} placeholder="Email Address" name="email" onChange={(e)=>setEmail(e.target.value)}/>
                  <div className="invalid-feedback">Please provide a Email.</div>
                </div>
                <div className="col-md-12 mb-4">
                  <textarea className={`form-control ${errmessage ? 'is-invalid' : ''}`} rows="5" placeholder="Enquiry Description" name="message" onChange={(e)=>setMessage(e.target.value)}></textarea>
                  <div className="invalid-feedback">Please provide a Message.</div>
                </div>
                <div className="col-md-12 mb-4">
                  <div className="form-check">
                  <input className={`form-check-input ${erragree ? 'is-invalid' : ''}`} type="checkbox" value="" onChange={(e)=>setName(e.target.checked)} />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                   i agree to talk about my project with Hi-soft
                  </label>
                  <div className="invalid-feedback">Please agree conditions.</div>
                </div>
                </div>
                <div className="col-md-12 mb-0">
                  <button type="submit" className="btn btn-primary">Send Massage<i className="fas fa-arrow-right ps-3"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
