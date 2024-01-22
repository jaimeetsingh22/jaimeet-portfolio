import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineArrowUp } from 'react-icons/ai'
import img from '../assets/2.jpg'

const Footer = () => {
  return (
   <footer>
  <div>
    <img src={img} alt="founder" />

    <h2>Jaimeet Singh</h2>
    <p>Be a Good Person, But don't Waste Your Time to Prove It</p>
  </div>

  <aside>
    <h2>Social Media</h2>
    <article>
    <a href="https://www.youtube.com/@JaimeetCreation" target='blank'>
      <AiFillYoutube/>
    </a>
    <a href="https://www.instagram.com/jaimeet.s" target='blank'>
      <AiFillInstagram/>
    </a>
    <a href="https://github.com/jaimeetsingh22" target='blank'>
      <AiFillGithub/>
    </a>
    </article>
  </aside>
  <a href="#home"> <AiOutlineArrowUp/> </a>
   </footer>
  )
}

export default Footer