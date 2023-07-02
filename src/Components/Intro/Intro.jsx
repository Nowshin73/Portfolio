import React from 'react'
import './Intro.css'
import {BsGithub} from "react-icons/bs"
import {SiLinkedin} from "react-icons/si"
import '../../Components/FloatingDiv/Floating.css'
import Floating from "../../Components/FloatingDiv/Floating";
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import nowshin from '../../img/nowshin2.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/react-logo.png'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import { Link } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation';
const Intro = () => {
    const transition = { duration: 2, type: 'spring' };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name" >
                    <span style={{ color: darkMode ? 'white' : '' }}>Hy! I Am </span>
                    <span className='title'> <TypeAnimation
                        preRenderFirstString={true}
                        sequence={[
                            500,
                            'Nowshin Nawar', // initially rendered starting point
                            1000,
                            'a Web Developer',
                            1000,
                            'a Mern Stack Developer',
                            1000,
                            'a PHP Developer',
                            500,
                        ]}
                        speed={50}
                        style={{ fontSize: '3rem', color:'#FE2EF7', fontWeight:' bold' }}
                        repeat={Infinity}
                    /></span>
                    <span style={{ color: darkMode ? 'white' : '' }}>Web Developer
                        producing the Quality work</span>
                </div>
                <button className="button i-button">
                    <Link spy={true} to='Contact' smooth={true}>Hire me</Link>
                </button>
                <div className="i-icons" >
                   <a href="https://github.com/Nowshin73"><BsGithub style={{fontSize: "4rem", color:"#BF00FF"}}></BsGithub></a>
                    <a href="https://www.linkedin.com/in/nowshin-nawar-nibal" download><SiLinkedin style={{fontSize: "4rem", color:"#BF00FF"}}></SiLinkedin></a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={nowshin} alt="" />
                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={glassesimoji}
                    width={"250px"}
                    alt=""
                    id='f-1' />
                <motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "68%" }}
                    transition={transition}
                    style={{ top: '-4%', left: '55%' }}
                    className='floating-div'>
                    <Floating image={crown} txt1='PHP' txt2='Developer' />
                </motion.div>
                <motion.div
                    initial={{ top: "70%", left: "-36%" }}
                    whileInView={{ left: "5%" }}
                    transition={transition}
                    className='floating-div'
                    style={{ top: '18.3rem', left: '2rem' }}>
                    <Floating image={thumbup} txt1='Mern Stack' txt2='developer' />
                </motion.div>
                <div className="blur" style={{ background: "rgb(238 210 255)" }}>
                </div>
                <div className="blur" style={{
                    background: '#d0fdff',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-12rem'
                }}>
                </div>
            </div>

        </div>
    )
}

export default Intro