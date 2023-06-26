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
      </SwiperSlide>
      <SwiperSlide>
       <img src={jungle} alt="" />
      </SwiperSlide>
      <SwiperSlide>
       <img src={onlineshop} alt="" />
      </SwiperSlide>
      <SwiperSlide>
       <img src={dreamjob} alt="" />
      </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio