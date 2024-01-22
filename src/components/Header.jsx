import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = ({ menuOpen, setMenuOpen }) => {
    return (
        <>
            <nav>
                <NavContent setMenuOpen={setMenuOpen} />
            </nav>
            <button className='navBtn' onClick={() => { setMenuOpen(!menuOpen) }}>
                <AiOutlineMenu size={32} />
            </button>
        </>
    )
}

export default Header

const NavContent = ({ setMenuOpen }) => {
    return (


        <>
            <h2>Jaimeet.</h2>
            <div>
                <a href="#home" onClick={() => {
                    setMenuOpen(false)
                }}>Home</a>
                <a href="#project" onClick={() => {
                    setMenuOpen(false)
                }}>Projects</a>
                <a href="#timeline" onClick={() => {
                    setMenuOpen(false)
                }}>Timeline</a>
                <a href="#skill" onClick={() => {
                    setMenuOpen(false)
                }}>Skills</a>
                <a href="#about" onClick={() => {
                    setMenuOpen(false)
                }}>About Me</a>
                <a href="#contact" onClick={() => {
                    setMenuOpen(false)
                }}>Contact</a>
            </div>
            <a href="mailto:jaimeetsingh24@gmail.com">
                <button>
                    Email
                </button>
            </a>
        </>

    )
}

export const SideMenu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={`sideMenu ${menuOpen ? "sideMenuOpen" : ""}`}>
            <NavContent setMenuOpen={setMenuOpen} />
        </div>
    )
}