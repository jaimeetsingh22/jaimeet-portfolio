import React from 'react'
import me from '../assets/1.jpg'

const About = () => {
  return (
    <div id="about">
      <section>

        <img src={me} alt='user' />
        <h2>About Me</h2>
        <p>
          Hi! I'm a B.Tech 3rd year Computer Science student, passionate about web development and programming. I have a solid foundation in programming languages such as Python, Java, C++, and C.
        </p>
        <br />
        <p>
          In the frontend development realm, I primarily work with React, and I also have knowledge of HTML, CSS, and JavaScript. My experience in programming languages and frontend technologies enables me to tackle a wide range of challenges and build visually appealing and user-friendly websites.
        </p>
      </section>
    </div>
  )
}

export default About
