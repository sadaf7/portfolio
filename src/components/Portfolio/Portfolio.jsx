import React from 'react'
import './Portfolio.css'
import pic1 from '../../assets/live-chat.png'
import pic2 from '../../assets/notebook.png'
import pic3 from '../../assets/news.png'
import pic4 from '../../assets/weather.png'

const Portfolio = () => {

 const data = [
  {
    id: 1,
    image: pic1,
    title: "Live-Chat App",
    github: "https://github.com/sadaf7/MERN-LIVECHAT-APP"
  },
  {
    id: 2,
    image: pic2,
    title: "E-NotePad",
    github: "https://github.com/sadaf7/E-NotePad"
  },
  {
    id: 3,
    image: pic3,
    title: "E-News",
    github: "https://github.com/sadaf7/E-News"
  },
  {
    id: 4,
    image: pic4,
    title: "Weather-Update",
    github: "https://github.com/sadaf7/Weather-App"
  },
 ]


  return (
    <section id='portfolio'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map((item,index)=>{
          return(
            <article key={index} className="portfolio_item">
              <div className="portfolio_item_img">
                <img src={item.image} alt="" />
              </div>
                <h3>{item.title}</h3>
                <a href={item.github} className='btn btn-primary' target='_blank'>Github</a>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
