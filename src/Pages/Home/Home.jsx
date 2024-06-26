import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Navbar from '../../Components/Navbar/Navbar'
import About from "../../Components/AboutME/About"
import Projects from '../../Components/MyProjects/Projects'
import Skills from '../../Components/Myskills/Skills'
import Education from '../../Components/Education/Education'
import Contact from '../../Components/ContactMe/Contact'
import Allsk from '../../Components/Allsk/Allsk'
import Articals from '../../Components/Articals/Articals'
import Service from '../../Components/Service/Service'


export default function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <About/>
    <Education/>
    <Skills/>
    <Allsk/>
    <Projects/>
    <Articals/>
    <Service/>
    <Contact/>
    </>
  )
}
