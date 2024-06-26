import React from 'react'
import "../Navbar/navbar.css"
import LogoName from "../../Assests/Avatar/name avatar.png"
import Contact from "../../Assests/smallico/contact-information.png"
import Skill from "../../Assests/smallico/software-engineering.png"
import Blog from "../../Assests/smallico/blog.png"
import About from "../../Assests/smallico/information.png"
import Project from "../../Assests/smallico/operator.png"
import Banner from "../../Assests/smallico/hacker.png"
import Services from "../../Assests/smallico/support.png"
import Education from "../../Assests/smallico/education (1).png"
import Pattern from "../../Assests/burger-menu.png"


export default function navbar() {
  return (
    <div className=' d-flex justify-content-center'>
    <nav className='NavBar  justify-content-center '>

      <div className="navcon1" >
        <img className='NavIMGS' src={LogoName} alt="" />
      </div>
      <div className="navcon2  align-items-center d-flex">
        <ul className=' NavULI justify-content-between d-flex p-0'>
          <li className=' navnamehov list-unstyled'>Home</li>
          <li className=' navnamehov list-unstyled'>About</li>
          <li className=' navnamehov list-unstyled'>Education</li>
          <li className=' navnamehov list-unstyled'>Skills</li>
          <li className=' navnamehov list-unstyled'>Projects</li>
          <li className=' navnamehov list-unstyled'>Blogs</li>
          <li className=' navnamehov list-unstyled'>Services</li>
          <li className=' navnamehov list-unstyled'>Contact</li>
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
          <li className=' KINavB list-unstyled'> <img className='MenuIMG' src={Banner} alt="" /> Home</li>
          <li className=' KINavB list-unstyled'><img className='MenuIMG' src={About} alt="" /> About</li>
          <li className=' KINavB list-unstyled'><img className='MenuIMG' src={Education} alt="" /> Education</li>
          <li className=' KINavB list-unstyled'><img className='MenuIMG' src={Skill} alt="" /> Skills</li>
          <li className=' KINavB list-unstyled'><img className='MenuIMG' src={Project} alt="" /> Projects</li>
          <li className=' KINavB list-unstyled'><img className='MenuIMG' src={Blog} alt="" /> Blogs</li>
          <li className=' KINavB list-unstyled'><img className='MenuIMG' src={Services} alt="" /> Services</li>
          <li className=' KINavB list-unstyled'><img className='MenuIMG' src={Contact} alt="" /> Contact</li>
        </ul>
      </div>
    </nav>
    </div>
  )
}
