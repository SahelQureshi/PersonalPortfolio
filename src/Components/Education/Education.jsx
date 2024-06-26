import React from 'react'
import "../Education/education.css"
import Eduimage from "../../Assests/Education/—Pngtree—a male student is studying_7649439.png"

export default function Education() {
  return (
    <div className="meinEdu">
      <div className="container Educon">
        <div className="upperportion">
        <div className="contentBox change"><h3 className='edutext1'>I'm great in what I do <br /> and I'm loving it</h3></div>
        <div className="contentBox change2"><a href="/"><span>Hire me</span></a></div>
        </div>
        <div className="lowerportion">
        <div className="contentBox change3 p-1">
          <h3 className='edutext2' >Education</h3>
          <div className="firstedud d-flex">
          <div className="firstimagediv">
            </div><div className="edutextinner"><h6 className='edutextsub1' >Swami Vivekananda Institute Of Modern Studies</h6><h4 className='edutextsub2' >Bachelor Of Computer Application</h4></div>
          </div>
          <div className="firstedud d-flex">
          <div className="firstimagediv">
            </div><div className="edutextinner"><h6 className='edutextsub1' >NCP Manmatha Nath Higher Secondary School</h6><h4 className='edutextsub2' >Higher Secondary Education</h4></div>
          </div>
          <div className="firstedud d-flex">
          <div className="firstimagediv">
            </div><div className="edutextinner"><h6 className='edutextsub1' >NCP Manmatha Nath Secondary School</h6><h4 className='edutextsub2' >Higher Secondary Education</h4></div>
          </div>
          
          
        </div>
        <div className="contentBox change4">
          <img className='eduimag1' src={Eduimage} alt="" />
        </div>
        </div>

      </div>
    </div>
  )
} 
