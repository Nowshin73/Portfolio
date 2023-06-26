import React from 'react'
import './Intro.css'
import '../../Components/FloatingDiv/Floating.css'
import Floating from "../../Components/FloatingDiv/Floating";
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import {Link} from 'react-scroll'
const Intro = () => {
    const transition = { duration: 2, type: 'spring' };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name" >
                    <span style={{ color: darkMode ? 'white' : '' }}>Hy! I Am </span>
                    <span>Nowshin Nawar </span>
                    <span style={{ color: darkMode ? 'white' : '' }}>Frontend Developer with high level
                        of experience in web designing and development,
                        producing the Quality work</span>
                </div>
                <button className="button i-button">
                <Link spy = {true} to='Contact' smooth={true}>Hire me</Link>
                </button>
                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={glassesimoji}
                    alt=""
                    id='f-1' />
                <motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "68%" }}
                    transition={transition}
                    style={{ top: '-4%', left: '55%' }}
                    className='floating-div'>
                    <Floating image={crown} txt1='Web' txt2='Developer' />
                </motion.div>
                <motion.div
                    initial={{ top: "70%", left: "-36%" }}
                    whileInView={{ left: "5%" }}
                    transition={transition}
                    className='floating-div'
                    style={{ top: '18.3rem', left: '2rem' }}>
                    <Floating image={thumbup} txt1='Best Design' txt2='Award' />
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