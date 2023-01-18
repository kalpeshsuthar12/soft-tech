import React from 'react'

export default function Process() {
    const step = [
        {
            title:"We know your business already",
            description:"The sad thing is the majority of people have no clue about what they truly want. They have no clarity."
        },
        {
            title:"Building context – not just code",
            description:"The sad thing is the majority of people have no clue about what they truly want. They have no clarity."
        },
        {
            title:"We are responsive and flexible",
            description:"This is perhaps the single biggest obstacle that all of us must overcome in order to be successful."
        },
        {
            title:"10 years experience – and counting",
            description:"To make these virtues a habit, Franklin can up with a method to grade himself on his daily actions."
        },
        {
            title:"Making the decision",
            description:"If success is a process with a number of defined steps, then it is just like any other process."
        },
        {
            title:"Clarity – developing the Vision",
            description:"Having clarity of purpose and a clear picture of what you desire, is probably the single most important."
        },
        {
            title:"Focus – having a plan",
            description:"So, make the decision to move forward. Commit your decision to paper, just to bring it into focus."
        }
    ]
  return (
    <section className="space-pt">
      <div className="container">
        <div className="row">
            {
                step.map((item, index)=>(
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-5" key={index}>
                        <div className="feature-info feature-info-style-06">
                        <div className="feature-info-number mb-0">
                            <span>{index+1}</span>
                            <h5 className="mb-0 ms-4 feature-info-title">{item.title}</h5>
                        </div>
                        <p className="mt-4 mb-0">{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </section>
  )
}
