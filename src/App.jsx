import React, { useEffect, useState } from 'react'
import Header, { SideMenu } from './components/Header'
import Home from './components/Home'
import JsProject from './components/JsProject'
import ReactProjects from './components/ReactProjects'
import TimeLine from './components/TimeLine'
import Skills from './components/Skills.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer.jsx'

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
const [ratio, setRatio] = useState(window.innerHeight);

useEffect(() => {
  window.addEventListener('resize',()=>{
    setRatio(window.innerHeight);
  })
  

  return () => {
    window.removeEventListener('resize',()=>{
      setRatio(window.innerHeight);
    })
  }
}, [ratio]);


  if(ratio < 600)
  return   (<em id='customMessage'> Please Change the Ratio to view content</em>
  );

  return (
    <>
      <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <JsProject />
      <ReactProjects />
      <TimeLine />
      <Skills />
      <About />
      <Contact />
      <Footer />
      <Toaster />
    </>

  )
}

export default App
