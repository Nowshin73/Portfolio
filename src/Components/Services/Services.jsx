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
 const list1 = ['Developing responsive websites','Implementing new functionalities using java', 'Handling arrays, objects, ES6 of javascript', 'Storing data on local storage and cookies', 'Fetching different forms of data from json' ];
 const list2 = [];
 const list3 = ['Passing props','Creating Mobile Responsive Components','Using different React hooks for ex:- useState, useEffect, useContext'];
  return (
    <div className="services" id='Services'>
      <div className="awesome">
        <span  style={{color: darkMode? 'white': ''}}>My Awesome</span>
        <span>Skills</span>
        <span  style={{color: darkMode? 'white': ''}}>
          
        </span>

        <a href="https://drive.google.com/file/d/13TqvfPxUORZlLcFY8Xfg2A2IukxvwYr2/view?usp=sharing" target="_blank"> <button className="button s-button">View Resume</button></a>
        <div className="blur s-blur1" style={{ background: 'rgb(213, 172, 238)' }}>
        </div>
      </div>

      <div className="cards">
        <motion.div
           whileInView ={{left: "5rem"}}
           initial ={{left: "0rem"}}
          transition={transition}
          style={{ left: '2rem' }}>
          <Card
          id={"modal1"}
            emoji={glasses}
            heading={'Javascript Developer'}
            detail={'Javascript, ES6, REST API'}
            list={list1}
          />
        </motion.div>
        
        <motion.div
        whileInView ={{left: "13rem"}}
        initial ={{left: "-10rem"}}
          transition={transition}
          style={{ left: '13rem', top: '19rem' }}>
          <Card
          id={"modal2"}
            emoji={humble}
            heading={'Backend Developer'}
            detail={'Node, Express, Mongodb, PHP '}
            list={list2}
          />
        </motion.div>
        <motion.div
         whileInView ={{left: "23rem"}}
           initial ={{left: "33rem"}}
          transition={transition}
          style={{ left: '23rem' }}>
          <Card
          id={"modal3"}
            emoji={heartemoji}
            heading={'React Developer'}
            detail={'React Js'}
            list={list3}
          />
        </motion.div>
        <div className="blur s-blur2" style={{ background: '#52fde9bc' }}>

        </div>

      </div>
    </div>
  )
}

export default Services