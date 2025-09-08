import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import photography from '../../img/photography.png'
import jungle from '../../img/jungle book.png'
import dreamjob from '../../img/dreamjob.png'
import onlineshop from '../../img/onlineshop.png'
import 'swiper/css'
import { useContext } from 'react'
import { themeContext } from '../../Context'
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='Portfolio'>
      <span  style={{color: darkMode? 'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>
      <Swiper 
       spaceBetween={2}
      slidesPerView = {1.5}
      grabCursor = {true}
      className = 'portfolio-slider'
      >
      <SwiperSlide>
       <img src={photography} alt="" />
       <a href="https://photography-institute.web.app/" target='_blank'><button  className='button'>view live site</button></a>
      </SwiperSlide>
      <SwiperSlide>
       <img src={jungle} alt="" />
       <a href="https://jungle-book-ea84b.web.app/" target='_blank'><button  className='button'>view live site</button></a>
      </SwiperSlide>
      <SwiperSlide>
       <img src={onlineshop} alt="" />
       <a href="https://nowshinzonlinestore.000webhostapp.com/" target='_blank'><button  className='button'>view live site</button></a>
      </SwiperSlide>
      <SwiperSlide>
       <img src={dreamjob} alt="" />
       <a href="https://effulgent-pixie-4cc819.netlify.app/" target='_blank'><button  className='button'>view live site</button></a>
      </SwiperSlide>
      </Swiper>
      <Swiper 
       spaceBetween={2}
      slidesPerView = {1}
      grabCursor = {true}
      className = 'mbl-portfolio-slider'
      >
       <SwiperSlide>
       <img src={photography} alt="" />
       <a href="https://photography-institute.web.app/" target='_blank'><button  className='button'>view live site</button></a>
      </SwiperSlide>
      <SwiperSlide>
       <img src={jungle} alt="" />
       <a href="https://jungle-book-ea84b.web.app/" target='_blank'><button  className='button'>view live site</button></a>
      </SwiperSlide>
      <SwiperSlide>
       <img src={onlineshop} alt="" />
       <a href="https://nowshinzonlinestore.000webhostapp.com/" target='_blank'><button  className='button'>view live site</button></a>
      </SwiperSlide>
      <SwiperSlide>
       <img src={dreamjob} alt="" />
       <a href="https://effulgent-pixie-4cc819.netlify.app/" target='_blank'><button  className='button'>view live site</button></a>
      </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio