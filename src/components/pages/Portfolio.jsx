import React, { useState } from "react"
import { Heading } from "../common/Heading"
import { portfolio } from "../data/data"
import GitHubIcon from "@mui/icons-material/GitHub"
import VisibilityIcon from '@mui/icons-material/Visibility';

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))]
export const Portfolio = () => {
  const [list, setLists] = useState(portfolio)
  const [category, setCategory] = useState(allCategory)
  console.log(setCategory)

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category)
    setLists(newItems)
    if (category === "all") {
      setLists(portfolio)
      return
    }
  }

  return (
    <>
      <article>
        <div className='container'>
          <Heading title='Portfolio' />
          <div className='catButton'>
            {category.map((category) => (
              <button className='primaryBtn' onClick={() => filterItems(category)} data-aos='zoom-out-down' style={{transition: "all 300ms ease"}}>
                {category}
              </button>
            ))}
          </div>
          <div className='content grid3'>
            {list.map((item) => (
              <div className='box' data-aos='fade-up'>
                <div className='img'>
                  <img src={item.cover} alt='' />
                </div>
                <div className='overlay'>
                  <h3>{item.title}</h3>
                  <span>{item.name}</span>
                  <div className="buttonProject">
                    <a href={item.urlGit} target="_blank" rel="noreferrer" className="linkOverlay">
                      <GitHubIcon />
                      <span>Code</span>
                    </a>
                    <a href={item.urlDemo} target="_blank" rel="noreferrer" className="linkOverlay">
                      <VisibilityIcon/>
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  )
}
