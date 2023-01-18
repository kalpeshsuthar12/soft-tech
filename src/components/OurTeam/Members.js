import React from 'react'

export default function Members() {
    const title = "Meet our heroes";
    const description = "Our team is friendly, talkative, and fully reliable.";
    const teams = [
        {
            image : "/assets/images/team/01.jpg",
            name : "Aaron Sharp",
            position : "Chief People Officer",
            facebook : "https://www.facebook.com/",
            twitter : "https://twitter.com/home",
            linkedin : "http://linkedin.com/",
        },
        {
            image : "/assets/images/team/02.jpg",
            name : "Homer Reyes",
            position : "Team Leader",
            facebook : "https://www.facebook.com/",
            twitter : "https://twitter.com/home",
            linkedin : "http://linkedin.com/",
        },
        {
            image : "/assets/images/team/03.jpg",
            name : "Felica Queen",
            position : "Production Manager",
            facebook : "https://www.facebook.com/",
            twitter : "https://twitter.com/home",
            linkedin : "http://linkedin.com/",
        },
        {
            image : "/assets/images/team/04.jpg",
            name : "Sara Lisbon",
            position : "Quality control",
            facebook : "https://www.facebook.com/",
            twitter : "https://twitter.com/home",
            linkedin : "http://linkedin.com/",
        },
        {
            image : "/assets/images/team/05.jpg",
            name : "Michael Bean",
            position : "Marketing manager",
            facebook : "https://www.facebook.com/",
            twitter : "https://twitter.com/home",
            linkedin : "http://linkedin.com/",
        },
        {
            image : "/assets/images/team/06.jpg",
            name : "Alice Williams",
            position : "Human resources",
            facebook : "https://www.facebook.com/",
            twitter : "https://twitter.com/home",
            linkedin : "http://linkedin.com/",
        },
        {
            image : "/assets/images/team/07.jpg",
            name : "Anne Smith",
            position : "Sales and Marketing",
            facebook : "https://www.facebook.com/",
            twitter : "https://twitter.com/home",
            linkedin : "http://linkedin.com/",
        },
        {
            image : "/assets/images/team/08.jpg",
            name : "Mellissa Doe",
            position : "Marketing Expert",
            facebook : "https://www.facebook.com/",
            twitter : "https://twitter.com/home",
            linkedin : "http://linkedin.com/",
        }
    ]
    return (
    <section className="space-pb overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="section-title text-center">
              <h2>{title}</h2>
              <p className="lead">{description}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
            {
                teams.map((item, index)=>(
                    <div className="col-xl-2 col-md-3 col-sm-4 col-6" key={index}>
                        <div className="team">
                        <div className="team-bg"></div>
                        <div className="team-img">
                            <img className="img-fluid" src={item.image} alt="" />
                        </div>
                        <div className="team-info">
                            <h4 className="team-name">{item.name}</h4>
                            <p>{item.position}</p>
                            <ul className="list-unstyled">
                            <li><a href={item.facebook} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href={item.twitter} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                            <li><a href={item.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                ))
            }          
        </div>
      </div>
    </section>
  )
}
