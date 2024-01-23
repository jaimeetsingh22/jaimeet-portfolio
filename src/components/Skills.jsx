import React from 'react'
import { motion } from "framer-motion"
import {  AiFillCode, AiFillHtml5 } from 'react-icons/ai'
import { FaCss3, FaJs, FaReact } from 'react-icons/fa';

const Skills = () => {
    const animation = {
        whileInView:{
            x: 0,
            y: 0,
            opacity:1,
        },
        one:{
            opacity:0,
            x: "-100%",
        },
        twoAndThree:{
            opacity:0,
            y:"-100%",
        },
        four:{
            opacity:0,
            x:"100%",
        }
    }

    return (
        <div id='skill' >
            <h2>Skills</h2>
            <section>
                <motion.div className="skillbox1"  whileInView={animation.whileInView} initial={animation.one}>
                    <h3>6+</h3> 
                    <p>Months Experience</p>
                </motion.div>
                <motion.div className="skillbox2" whileInView={animation.whileInView} initial={animation.twoAndThree}>
                    <p>
                    <AiFillHtml5/>
                    <FaCss3 />
                    <FaJs/>
                    </p>
                    <span>HTML CSS Javascript</span>
                </motion.div>
                <motion.div className="skillbox3" whileInView={animation.whileInView} initial={animation.twoAndThree} transition={{delay:0.2,}}>
                    <p><AiFillCode /></p>
                    <span>Basic in C++, Python, Java</span>
                </motion.div>
                <motion.div className="skillbox4" whileInView={animation.whileInView} initial={animation.four}>
                    <p><FaReact/></p>
                    <br />
                    <span>React Framework </span>
                </motion.div>
            </section>
        </div>
    )
}

export default Skills
