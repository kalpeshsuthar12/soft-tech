import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Iframe from 'react-iframe'
import Modal from 'react-bootstrap/Modal';

export default function About() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const title = "Our values mold the way we work with our clients, delivering excellent user experience supported by cutting-edge technologies";
    const description = " Each week he focused his attention on a different virtue. Over time, through repetition, he hoped to one day experience the pleasure of, He says that he carried out this personal examination for years.";
    const image = "/assets/images/blog/01.jpg";
    const video = "https://www.youtube.com/embed/eTfVcagDbPg";
    return (
    <>
    <section className="space-ptb pb-md-5 bg-dark">
      <div className="container">
        <div className="row text-center justify-content-center">
          <div className="col-lg-10 text-center text-white">
            <h2 className="text-white mb-4">{title}</h2>
            <p className="mb-0"> {description}</p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-dark-half-sm">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="position-relative">
            <img className="img-fluid border-radius" src={image} alt="" />
                <button onClick={handleShow} className="icon-btn icon-btn-lg icon-btn-all-center btn-animation popup-youtube" data-toggle="modal" data-target="#exampleModal"><i className="fas fa-play fa-1x"></i></button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <Iframe url={video}
            width="100%"
            height="320px"
            id=""
            className=""
            display="block"
            position="relative"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
    </Modal>
  </>
  )
}
