import React, { useRef } from 'react'
import { animate, motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { BsArrowUpRight, BsChevronDown } from 'react-icons/bs'
import me from '../assets/8.png'
7

const Home = ({ratio}) => {
    const projectCount = useRef();

    const animationProjectCount = () => {
        animate(0, 15, {
            duration: 1,
            onUpdate: (v) => (projectCount.current.textContent = v.toFixed())
        })
    }

    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,

            },
            whileInView: {
                x: "0%",
                opacity: 1,
            },
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,

            },
            whileInView: {
                y: "0%",
                opacity: 1,
            },
        }
    }

    return (
        <div id="home">
            <section>
                <div>
                    <motion.h1 {...animations.h1} >
                        Hi, I am <br /> Jaimeet Singh
                    </motion.h1>

                    <Typewriter
                        options={{
                            strings: ['A Developer', 'An Aspiring Designer', "A Creator"],
                            autoStart: true,
                            loop: true,
                            cursor: "",
                            wrapperClassName: "typerwriterpara",
                        }}
                    />

                    <div>
                        <a href="mailto:jaimeetsingh24@gmail.com">Hire Me</a>
                        <a href="#project">Projects <BsArrowUpRight /> </a>
                    </div>


                    <article>
                        <p>
                            <span>Need Clients!!</span>
                        </p>
                    </article>

                    <aside>

                        <article>
                            <p>
                                {
                                    ratio < 600 && <motion.span ref={projectCount} whileInView={animationProjectCount}>10</motion.span>
                                }+
                            </p>
                            <span>Projects Done</span>
                        </article>

                        <article data-special>
                            <p>Contact</p>
                            <span>jaimeetsingh24@gmail.com</span>
                        </article>
                    </aside>
                </div>
            </section>
            <section>
                <img src={me} alt="jaimeet singh" />
            </section>
            <BsChevronDown />
        </div>)
}

export default Home
