import React,{useState} from 'react'
import HorizontalTimeline from "react-horizontal-timeline";

export default function History() {
    const [value, setValue] = useState(0);// eslint-disable-next-line
    const [previous, setPrevious] = useState(0); 
    const VALUES = ["2010-01-01", "2012-01-01", "2014-01-01", "2016-01-01", "2018-01-01", "2020-01-01"];
    const timelineDescription = [
        {
            year : "2010",
            title : "They often mean leaving the perception of security in order to discover your personal freedom. These are the changes that will bring happiness and satisfaction into your life. Just go there now.",
            subtitle : "10 years out… having made a decade of changes. Imagine living the life you want to live.",
            description : "The best way is to develop and follow a plan. Start with your goals in mind and then work backwards to develop the plan. What steps are required to get you to the goals? Make the plan as detailed as possible. Try to visualize and then plan for, every possible setback. Commit the plan to paper and then keep it with you at all times. Review it regularly and ensure that every step takes you closer to your Vision and Goals."
        },
        {
            year : "2012",
            title : "What is the exact sequence of events that will take you to where you want to be? Have a think consciously of what you need to do. Every outcome begins with the first step.",
            subtitle : "What is the exact sequence of events that will take you to where you want to be? Have a think consciously of what you need to do. Every outcome begins with the first step.",
            description : "This is the beginning of creating the life that you want to live. Know what the future holds for you as a result of the choice you can make today."
        },
        {
            year : "2014",
            title : "Have some fun and hypnotize yourself to be your very own “Ghost of Christmas future” and see what the future holds for you. Success is something of which we all want more. Most people believe that success is difficult.",
            subtitle : "What is the exact sequence of events that will take you to where you want to be? Have a think consciously of what you need to do. Every outcome begins with the first step.",
            description : "The price is something not necessarily defined as financial. It could be time, effort, sacrifice, money or perhaps, something else. The point is that we must be fully aware of the price and be willing to pay it"
        },
        {
            year : "2016",
            title : "He sells his farm and hikes off over the horizon, never to be heard from again. Rumors say that years later he died destitute, never having found the diamonds he spent his life seeking.",
            subtitle : "I don’t think the deciding factor was the desire. Lots of people come here to Japan, but never quite find out how to stay.",
            description : "This is the beginning of creating the life that you want to live. Know what the future holds for you as a result of the choice you can make today."
        },
        {
            year : "2018",
            title : "Introspection is the trick. Understand what you want, why you want it and what it will do for you. This is a critical factor, and as such, is probably the most difficult step. For this reason, most people never complete this aspect – then wonder why life is so difficult!",
            subtitle : "“Nothing changes until something moves” – this is the battle cry of author and journalist Robert Ringer. And he is absolutely correct",
            description : "Without clarity, you send a very garbled message out to the Universe. We know that the Law of Attraction says that we will attract what we focus on, so if we don’t have clarity, we will attract confusion."
        },
        {
            year : "2020",
            title : "Make no mistake, the new owner already had money, or he could not have bought the land. There’s nothing in this story to make us think he was dreaming about riches, vast or otherwise. No burning desire. But he got the goodies.",
            subtitle : "Once you have a clear understanding of what you want, it is critical that you engage in goal setting – specifically setting SMART goals.",
            description : "Focus is having the unwavering attention to complete what you set out to do. There are a million distractions in every facet of our lives."
        }
     ];
    const title = "Established 2010 in Soft-Tech has been offering world-className information technology.";
    const description = "Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones. Although each is successful separately, the right combination of both is the most powerful motivational force known to humankind.";
    return (
    <section className="space-ptb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="section-title text-center">
              <h2>{title}</h2>
              <p className="px-xl-5">{description}</p>
            </div>
          </div>
        </div>       
        <div className="row justify-content-center">
            <div className="col-md-10">
                <div className="root-div cd-horizontal-timeline">
                    <div style={{ height: "100px", margin: "0 auto" }}>
                        <HorizontalTimeline styles={{ outline: "#dfdfdf", foreground: "#ef3139" }}
                        index={value} indexClick={(index) => {setValue(index);setPrevious(value);}} values={VALUES} />
                    </div>
                    <div className="events-content">                        
                        <div className="row">
                            <div className="col-md-4 position-relative">
                                <h1 className="year">{timelineDescription[value].year}</h1>
                            </div>
                            <div className="col-md-8">
                                <div className="timeline-text">
                                <h6 className="text-dark"> {timelineDescription[value].title}</h6>
                                <p className="border-start ps-3 font-italic">{timelineDescription[value].subtitle}</p>
                                <p className="mb-0">{timelineDescription[value].description}</p>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
          </div>
        </div>
      </div>
    </section>
  )
}
