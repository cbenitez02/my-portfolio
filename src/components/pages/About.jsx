import React from "react"
import { Heading } from "../common/Heading"
import { about } from "../data/data"
import CV from '../data/CV-Cristian-Benitez.pdf'

export const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container flex'>
          {about.map((val) => (
            <>
              <div className='left' data-aos='fade-down-right'>
                <img src={val.cover} alt='' />
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title='About Me' />
                <p>{val.desc}</p>
                <p>Among the programming languages that I handle, tools and agile methodologies are: <b>HTML, CSS, SASS, JavaScript, React, Redux, Node, Express, MySQL.</b> Practices and Knowledge: <b>AJAX, Promises, Web Server, Web API's, Testing, Agile methodologies (SCRUM)</b></p>
                <a href={CV} download>
                  <button>Download CV</button>
                </a>
                <button className='primaryBtn'>GitHub Projects</button>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}
