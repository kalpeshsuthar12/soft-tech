import React from 'react'
import CountUp from 'react-countup';

export default function CounterSectionTwo() {
    const count = [
        {
            icon:"flaticon-emoji",
            count:"1790",
            title:"Happy Clients",
        },
        {
            icon:"flaticon-trophy",
            count:"32",
            title:"Skilled Experts",
        },
        {
            icon:"flaticon-strong",
            count:"491",
            title:"Finished Projects",
        },
        {
            icon:"flaticon-icon-149196",
            count:"1090",
            title:"Media Posts",
        }
    ]
  return (
    <section className="py-4 bg-transparant border">
      <div className="container">
        <div className="row">
            {
                count.map((item,index)=>(
                    <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0" key={index}>
                        <div className="counter counter-02">
                        <div className="counter-icon align-self-center">
                            <i className={item.icon}></i>
                        </div>
                        <div className="counter-content align-self-center">
                            <span className="timer"><CountUp start={0} end={item.count} duration={3} /></span>
                            <label>{item.title}</label>
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
