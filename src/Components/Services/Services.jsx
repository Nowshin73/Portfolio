import React from 'react'
import './Services.css'
import Card from '../Card/Card'
import heartemoji from '../../img/heartemoji.png'
import glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { themeContext } from '../../Context'
const Services = () => {
  const transition = { duration: 2, type: 'spring' };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>
      <div className="awesome">
        <span  style={{color: darkMode? 'white': ''}}>My Awesome</span>
        <span>services</span>
        <span  style={{color: darkMode? 'white': ''}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio alias dolor cum,
          <br />
          repellat magni similique odit earum rem accusamus reprehenderit?
        </span>

        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{ background: 'rgb(213, 172, 238)' }}>
        </div>
      </div>

      <div className="cards">
        <motion.div
         whileInView ={{left: "23rem"}}
           initial ={{left: "33rem"}}
          transition={transition}
          style={{ left: '23rem' }}>
          <Card
            emoji={heartemoji}
            heading={'Design'}
            detail={'Pencil, Adobe Illustrator, Photoshop'}
          />
        </motion.div>
        <motion.div
           whileInView ={{left: "2rem"}}
           initial ={{left: "-3rem"}}
          transition={transition}
          style={{ left: '2rem' }}>
          <Card
            emoji={glasses}
            heading={'Frontend Developer'}
            detail={'Html, CSS, Javascript, React '}
          />
        </motion.div>
        <motion.div
        whileInView ={{left: "13rem"}}
        initial ={{left: "-10rem"}}
          transition={transition}
          style={{ left: '13rem', top: '19rem' }}>
          <Card
            emoji={humble}
            heading={'Backend Developer'}
            detail={'Node, Express, Mongodb, PHP '}
          />
        </motion.div>
        <div className="blur s-blur2" style={{ background: '#52fde9bc' }}>

        </div>

      </div>
    </div>
  )
}

export default Services