import React, { useState } from 'react'
import vg from '../assets/vg.png'
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import {addDoc,collection} from 'firebase/firestore'
import db from '../firebase'

const Contact = () => {

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');
  const [disableBtn, setDisableBtn] = useState(false);

 const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);

    try {
      
      await addDoc(collection(db,"contacts"),{
        Name,
        Email,
        Message,
      });
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Your message has been sent successfully!");
      setDisableBtn(false)
    } catch (error) {
      console.log(error);
      toast.error("Error sending your message! Please try again later.");
      setDisableBtn(false)
    }

  }
  



  const animations = {
    form:{
      initial:{
        x:"-100%",
        opacity:0,
      },
      whileInView:{
        x:0,
        opacity:1,
      }
    },
    button:{
      initial:{
        x:"100%",
        opacity:0,
      },
      whileInView:{
        x:0,
        opacity:1,
      },
      transition:{
        delay:0.5
      } 
    }
}
return (
  <div id='contact'>
    <section>
      <motion.form {...animations.form} onSubmit={submitHandler} >
        <h2>Contact Me</h2>
        <input type="text" value={Name} onChange={(e) => {
          setName(e.target.value);
        }} placeholder='Your Name' required />
        <input type="email" value={Email} onChange={(e) => {
          setEmail(e.target.value);
        }} placeholder='Your Email' required />
        <input type="text" value={Message} onChange={(e) => {
          setMessage(e.target.value);
        }} placeholder='Your Message' required />
        <motion.button className={disableBtn ? "disableBtn": ""} type="submit" disabled={disableBtn} {...animations.button}>
          Send
        </motion.button>
      </motion.form>
    </section>
    <aside>
      <img src={vg} alt="Graphics" />

    </aside>

  </div>
)
}

export default Contact