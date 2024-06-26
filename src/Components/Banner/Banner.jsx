import React from 'react'
import "../Banner/banner.css"
import Facebook from "../../Assests/Social Media Icons/facebook.png"
import Gmail from "../../Assests/Social Media Icons/Mail.png"
import Linkedin from "../../Assests/Social Media Icons/linkedin.png"
import Instagram from "../../Assests/Social Media Icons/instagram.png"
import Github from "../../Assests/Social Media Icons/github.png"
import Circle from "../../Assests/Patterns/circles 2.png"
import Pattern1 from "../../Assests/Patterns/1.png"
import Myimage from "../../Assests/MyImage/sahel 2.png"


export default function Banner() {
  return (
    <div className="meinbanner">
      <img className='movingimage' src={Circle} alt="" />
      <img className='movingimage2' src={Pattern1} alt="" />
    <div className="container meincontainer">

      <div className="mb1">
        <h4 className='text1' >Hi! I'm</h4>
        <h3 className='bannerName'>Sahel Qureshi</h3>
        <h6 className='typedevn' style={{fontWeight:"bold"}}>Frontend Web Developer</h6>
        <p className='text2' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quo reiciendis modi, facilis accusantium, omnis reprehenderit, soluta molestias numquam et eos animi voluptatibus maxime rerum?</p>
        <div className="icons">
          <a href="/"><img className='banimgt1'  src={Facebook} alt="" /></a>
          <a href="/"><img className='banimgt1'  src={Instagram} alt="" /></a>
          <a href="/"><img className='banimgt1'  src={Linkedin} alt="" /></a>
          <a href="/"><img className='banimgt1'  src={Github} alt="" /></a>
          <a href="/"><img className='banimgt1'  src={Gmail} alt="" /></a>
        </div>
        <div className=' bacasrc d-flex'>
        <button className='btn btn-primary abtymbn' ><span className='abtymbntext'>Download CV</span></button> <a href="/"><span className='text3'>Let's Talk</span></a></div>
      </div>
      <div className="mb2 ">
        <div className="mb2imagportion d-flex justify-content-center align-items-center overflow-hidden">
          <img className='mb2myimage' src={Myimage} alt="" />

        </div>
      </div>
      </div>
    </div>
  )
}
