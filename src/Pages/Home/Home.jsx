import React, { useRef } from 'react'
import Banner from '../../Components/Banner/Banner'
import About from "../../Components/AboutME/About"
import Projects from '../../Components/MyProjects/Projects'
import Skills from '../../Components/Myskills/Skills'
import Education from '../../Components/Education/Education'
import Contact from '../../Components/ContactMe/Contact'
import Allsk from '../../Components/Allsk/Allsk'
import Articals from '../../Components/Articals/Articals'
import Service from '../../Components/Service/Service'
import "../Home/navbar.css"
import LogoName from "../../Assests/Avatar/name avatar.png"
import Contacts from "../../Assests/smallico/contact-information.png"
import Skill from "../../Assests/smallico/software-engineering.png"
import Blog from "../../Assests/smallico/blog.png"
import Abouts from "../../Assests/smallico/information.png"
import Project from "../../Assests/smallico/operator.png"
import Banners from "../../Assests/smallico/hacker.png"
import Services from "../../Assests/smallico/support.png"
import Educations from "../../Assests/smallico/education (1).png"
import Pattern from "../../Assests/burger-menu.png"


export default function Home() {
  const section1=useRef();
  const section2=useRef();
  const section3=useRef();
  const section4=useRef();
  const section5=useRef();
  const section6=useRef();
  const section7=useRef();
  const section8=useRef();
  const scrollHandler=(elmRef)=>{
    window.scrollTo({ top:elmRef.current.offsetTop, behavior:"smooth"});
  };
  return (
    <>
     <div className=' d-flex justify-content-center'>
    <nav className='NavBar  justify-content-center '>

      <div className="navcon1" >
        <img className='NavIMGS' src={LogoName} alt="" />
      </div>
      <div className="navcon2  align-items-center d-flex">
        <ul className=' NavULI justify-content-between d-flex p-0'>
          <li className=' navnamehov list-unstyled' onClick={()=>scrollHandler(section1)}>Home</li>
          <li className=' navnamehov list-unstyled' onClick={()=>scrollHandler(section2)}>About</li>
          <li className=' navnamehov list-unstyled'onClick={()=>scrollHandler(section3)}>Education</li>
          <li className=' navnamehov list-unstyled'onClick={()=>scrollHandler(section4)}>Skills</li>
          <li className=' navnamehov list-unstyled'onClick={()=>scrollHandler(section5)}>Projects</li>
          <li className=' navnamehov list-unstyled'onClick={()=>scrollHandler(section6)}>Blogs</li>
          <li className=' navnamehov list-unstyled'onClick={()=>scrollHandler(section7)}>Services</li>
          <li className=' navnamehov list-unstyled'onClick={()=>scrollHandler(section8)}>Contact</li>
        </ul>
      </div>
      <div className="navcon3 d-flex justify-content-center align-items-center">
        <button className='btn btnsnav btn-primary'><span className='btnnavtext'>Hire Me</span></button>
      </div>

    </nav>
    <nav className='HiddenNavBar'>
          <button class="HiddenNavInner btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img style={{width:"32px"}} src={Pattern} alt="" /></button>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
        <img style={{width:"114px"}} src={LogoName} alt="" />
     <    button type="button" class="btn btnsM" data-bs-dismiss="offcanvas" >X</button>
          </div>
          <ul className='NavULI'>
          <li className=' KINavB list-unstyled'onClick={()=>scrollHandler(section1)}> <img className='MenuIMG' src={Banners} alt="" /> Home</li>
          <li className=' KINavB list-unstyled'onClick={()=>scrollHandler(section2)}><img className='MenuIMG' src={Abouts} alt="" /> About</li>
          <li className=' KINavB list-unstyled'onClick={()=>scrollHandler(section3)}><img className='MenuIMG' src={Educations} alt="" /> Education</li>
          <li className=' KINavB list-unstyled'onClick={()=>scrollHandler(section4)}><img className='MenuIMG' src={Skill} alt="" /> Skills</li>
          <li className=' KINavB list-unstyled'onClick={()=>scrollHandler(section5)}><img className='MenuIMG' src={Project} alt="" /> Projects</li>
          <li className=' KINavB list-unstyled'onClick={()=>scrollHandler(section6)}><img className='MenuIMG' src={Blog} alt="" /> Blogs</li>
          <li className=' KINavB list-unstyled'onClick={()=>scrollHandler(section7)}><img className='MenuIMG' src={Services} alt="" /> Services</li>
          <li className=' KINavB list-unstyled'onClick={()=>scrollHandler(section8)}><img className='MenuIMG' src={Contacts} alt="" /> Contact</li>
        </ul>
      </div>
    </nav>
    </div>
    <div ref={section1}>
    <Banner />
    </div>
    <div ref={section2}>
    <About />
    </div>
    <div ref={section3}>
    <Education />
    </div>
    <div ref={section4}>
    <Skills/>
    </div>
    <Allsk/>
    <div ref={section5}>
    <Projects/>
    </div>
    <div ref={section6}>
    <Articals/>
    </div>
    <div ref={section7}>
    <Service/>
    </div>
    <div ref={section8}>
    <Contact/>
    </div>
    </>
  )
}
