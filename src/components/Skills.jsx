import React from 'react'
import { delay, motion } from "framer-motion"
import { AiFillAndroid, AiFillApi, AiFillBuild, AiFillCode, AiFillCodeSandboxCircle, AiFillCodeSandboxSquare, AiFillCodepenCircle, AiFillIeCircle, AiFillWindows } from 'react-icons/ai'

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
                    <AiFillIeCircle />
                    <span>Frontend Skill</span>
                </motion.div>
                <motion.div className="skillbox3" whileInView={animation.whileInView} initial={animation.twoAndThree} transition={{delay:0.2,}}>
                    <AiFillCode />
                    <span>Coding Skills</span>
                </motion.div>
                <motion.div className="skillbox4" whileInView={animation.whileInView} initial={animation.four}>
                    <AiFillWindows />
                    <br />
                    <span>Responsive Design Experience </span>
                </motion.div>
            </section>
        </div>
    )
}

export default Skills