import React from "react"
import { Heading } from "../common/Heading"
import { services } from "../data/data"

export const Services = () => {
  return (
    <>
      <section className='services'>
        <div className='container'>
          <Heading title='Aptitudes' />
          <div className='content grid3'>
            {services.map((item) => (
              <div className='box cardhover' data-aos='flip-left' style={{transition: "all 250ms ease"}}>
                <i>{item.icon}</i>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
