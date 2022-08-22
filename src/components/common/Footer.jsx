import React from "react"
import { social } from "../data/data"

const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item) => (
          <>
            <a href={item.url} target="_BLANK" rel="noreferrer">
              <i data-aos='zoom-in'>{item.icon}</i>
            </a>
          </>
        ))}
        <p data-aos='zoom-in'>All Right Resceved - Cristian Benitez</p>
      </footer>
    </>
  )
}

export default Footer
