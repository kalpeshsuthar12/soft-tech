import React from 'react'
import {Link} from 'react-router-dom'

export default function Performance() {
    const title = "Smart strategy & excellent performance";
    const description = "Process that guarantees high productivity and profitability for your solution.";
    const history = [
        {
            title:"Analysis",
            description:"Then with that thing in mind, follow these simple steps. Step One: Get yourself nice and relaxed and settled. Concentrate on your breathing, engage in the moment and spend some time being still, quiet and drift inside of your own mind. Hypnotize yourself here."
        },
        {
            title:"Design",
            description:"That is your imagination doing that. You know the sound that your feet make when you walk across gravel don’t you? You can imagine it, but you are not hearing it in your ears, are you? Just imagine these things as best as you can."
        },
        {
            title:"Development",
            description:"Become aware of the temperature, the sights, the sounds and enjoy walking along the path of your life. Make it sensory rich and get comfortable with the idea. Imagine the feeling of your feet walking along the path and the sound they make."
        },
        {
            title:"Testing",
            description:"Engage with the idea of really being there. Step Three: Imagine that a few more steps ahead there is a place where the path splits, where is goes off to the left and off to the right. Pause here for a few moments and have a think."
        },
        {
            title:"Go-Live",
            description:"Think about that as you stand at this place where the path splits. You want to make a decision and commit to one of these paths. Before you make that decision, we are going to see what each path holds for your future."
        }
    ]
  return (
    <section className="space-pb">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="section-title is-sticky">
              <h2>{title}</h2>
              <p className="mb-4 mb-md-5">{description}</p>
              <Link to="/case-studies" className="btn btn-light-round btn-round">Let's Start Project<i className="fas fa-arrow-right ps-3"></i></Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="feature-info feature-info-style-08">
              <div className="feature-info-inner">
                {
                    history.map((item, index)=>(
                        <div className="feature-info-item" key={index}>
                            <div className="feature-info-number"><span>{index+1}</span></div>
                            <div className="feature-info-content">
                                <h5 className="mb-3 feature-info-title">{item.title}</h5>
                                <p className="mb-0">{item.description}</p>
                            </div>
                        </div>
                    ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
