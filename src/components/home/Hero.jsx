import { home } from "../data/data"
import Typewriter from "typewriter-effect"
import CV from '../data/CV-Cristian-Benitez.pdf'

export const Hero = () => {
  return (
    <>
      <section className='hero'>
        {home.map((val, i) => (
          <div className='heroContent'>
            <h3 className='fontSize' data-aos='fade-right'>
              {val.text}
            </h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos='fade-left'>{val.desc}</p>
            <a href={CV} download>
              <button className='primaryBtn' data-aos='fade-up-right' style={{transition: "all 300ms ease"}}>
                Download CV
              </button>
            </a>
          </div>
        ))}
      </section>
    </>
  )
}
