import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import photography from '../../img/photography.png'
import jungle from '../../img/jungle book.png'
import dreamjob from '../../img/dreamjob.png'
import onlineshop from '../../img/onlineshop.png'
import 'swiper/css'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import { useState } from 'react'
import { useEffect } from 'react'
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch('https://portfolio-dun-six-8uv7josxwu.vercel.app/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [projects])
  console.log(projects)
  return (
    <div className="portfolio" id='Portfolio'>
      <span style={{ color: darkMode ? 'white' : '' }}> Projects </span>
      <span>Portfolio</span>
     
      <div className="projects">
        {projects ? projects.map((project, index) => (
          <div className='project'>
            <h3 style={{ color: darkMode ? 'white' : '' }}>Project Name: {project.title}</h3>
            <a href={project.liveSite} target='_blank'><button className='button'>view live site</button></a>
            <Swiper
              spaceBetween={2}
              slidesPerView={1.5}
              grabCursor={true}
              className='portfolio-slider'
            >
              {project.gallery.map((image, index) =>
                <SwiperSlide key={index}>
                  <img className='portfolio-img' src={image.url} alt={image.title} />
                  <button className='button2'>{image.title}</button>
                </SwiperSlide>)}
            </Swiper>
             <div className="desc">
              <h2>Project Description</h2>
              <ol>
                {
                  project.description.map((desc,index)=>
                  <li key={index}>{desc}</li>
                  )
                }
              </ol>
            </div>
          </div>
        )) : <div>No projects found</div>}
      </div>
       <div className="mbl-projects">
        {projects ? projects.map((project, index) => (
          <div className='project'>
            <h2 style={{ color: darkMode ? 'white' : '' }}>Project {project.title}</h2>
            <a href={project.liveSite} target='_blank'><button className='button'>view live site</button></a>
            <Swiper
              spaceBetween={2}
              slidesPerView={1.5}
              grabCursor={true}
               className='mbl-portfolio-slider'
            >
              {project.gallery.map((image, index) =>
                <SwiperSlide key={index}>
                  <img className='portfolio-img' src={image} alt="" />
                </SwiperSlide>)}
            </Swiper>
            <div className="desc">
              <ol>
                {
                  project.description.map((desc,index)=>
                  <li key={index}>{desc}</li>
                  )
                }
              </ol>
            </div>
          </div>
        )) : <div>No projects found</div>}
      </div>
   
      {/* <Swiper
        spaceBetween={2}
        slidesPerView={1}
        grabCursor={true}
        className='mbl-portfolio-slider'
      >
        <SwiperSlide>
          <img src={photography} alt="" />
          <a href="https://photography-institute.web.app/" target='_blank'><button className='button'>view live site</button></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={jungle} alt="" />
          <a href="https://jungle-book-ea84b.web.app/" target='_blank'><button className='button'>view live site</button></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={onlineshop} alt="" />
          <a href="https://nowshinzonlinestore.000webhostapp.com/" target='_blank'><button className='button'>view live site</button></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={dreamjob} alt="" />
          <a href="https://effulgent-pixie-4cc819.netlify.app/" target='_blank'><button className='button'>view live site</button></a>
        </SwiperSlide>
      </Swiper> */}
    </div>
  )
}

export default Portfolio