/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
export default function PricingSection() {
    const title = "Choose the plan that works for you";
    const description = "Our pricing works for enterprises of all sizes. Starting at just $19 per month";
    const pricingTable = [
        {
            name:"Basic",
            description:"Only the basics - Everything you need to get started. Best for startup",
            price:"19",
            features:[
                {
                    active : true,
                    content:"5 Analytics Campaign"
                },
                {
                    active : false,
                    content:"Branded Reports"
                },
                {
                    active : true,
                    content:"500 Keywords"
                },
                {
                    active : false,
                    content:"0 Social Account"
                },
                {
                    active : true,
                    content:"Phone & Email Support"
                }
            ],
        },
        {
            name:"Standard",
            description:"When you are ready to grow, We will grow with you. Get a Standard plan",
            price:"39",
            features:[
                {
                    active : true,
                    content:"30 Analytics Campaign"
                },
                {
                    active : false,
                    content:"Branded Reports"
                },
                {
                    active : false,
                    content:"700 Keywords"
                },
                {
                    active : true,
                    content:"100 Social Account"
                },
                {
                    active : true,
                    content:"Phone & Email Support"
                }
            ],
        },
        {
            name:"Professional",
            description:"Ready to kick it up a notch? Go for big with Professional membership",
            price:"69",
            features:[
                {
                    active : true,
                    content:"50 Analytics Campaign"
                },
                {
                    active : true,
                    content:"Branded Reports"
                },
                {
                    active : true,
                    content:"900 Keywords"
                },
                {
                    active : true,
                    content:"200 Social Account"
                },
                {
                    active : true,
                    content:"Phone & Email Support"
                }
            ],
        }
    ]
  return (
    <section className="space-ptb bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="section-title text-center">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="row">
            {
                pricingTable.map((item, index)=>(
                    <div className="col-md-4 pb-4 pb-md-0" key={index}>
                        <div className={`pricing ${index === 1 ? "active" : ''}`} key={index}>
                            <h4 className="pricing-title">{item.name}</h4>
                            <p className="mb-0">{item.description}</p>
                            <span className="pricing-price">
                                <sup>$</sup>
                                <strong>{item.price}</strong>
                                /month  
                            </span>
                            <ul className="list-unstyled pricing-list">
                                {
                                    item.features.map((item,index)=>(
                                        <li key={index}>{item.active ? item.content : <s>{item.content}</s>}</li>
                                        
                                    ))
                                }
                            </ul>
                            <a href="#" className="btn btn-light-round btn-round">Select Plan<i className="fas fa-arrow-right ps-3"></i></a>
                        </div>
                    </div>
                ))
            }          
        </div>
    </div>
</section>
  )
}
