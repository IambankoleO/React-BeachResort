import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'


export class Services extends Component {

    state={
        services: [
            {
               icon:  <FaCocktail />,
               title: "Free Cocktail",
               info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, maxime."
            },
            {
                icon:  <FaHiking />,
                title: "Endless Hiking",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, maxime."
             },
             {
                icon:  <FaShuttleVan />,
                title: "Free Shuttle",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, maxime."
             },
             {
                icon:  <FaBeer />,
                title: "Strongest Beer",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, maxime."
             }
        ]
    }


  render() {
    return (
      <section className="services">
        <Title title='Services' />
        <div className="services-center">
            { 
                this.state.services.map((item, index) => {
                    return <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                    
                    </article>
                })
            }
        </div>
      </section>
    )
  }
}

export default Services
