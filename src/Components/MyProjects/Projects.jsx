import React from 'react'
import "../MyProjects/projects.css"

export default function Projects() {
  return (
    <div className=' meinproject1' style={{backgroundColor:"black",color:"white"}}>
      <div className="container meinpcontain p-3" style={{maxWidth:"1300px",}}>
        <div className="prc1 mb-5" >
          <h3 className='projectname'>My Latest Projects</h3>
          <p className='projectpara'>Greetings, fellow digital explorers! I am Sahel Qureshi, passionate and innovative web developer. <br /> I created all projects and website by my own practical experience and knowledge.</p>
        </div>
        <div className="prc2  d-flex justify-content-evenly">
          <div className="proj d-flex align-items-end">
            <div className="lowerp" style={{width:"100%",backgroundColor:"black",height:"81px",borderRadius: "17px"}}>

            </div>
          </div>
          <div className="proj d-flex align-items-end mt-5">
            <div className="lowerp" style={{width:"100%",backgroundColor:"black",height:"81px",borderRadius: "17px"}}>

            </div>
          </div>
          <div className="proj d-flex align-items-end">
            <div className="lowerp" style={{width:"100%",backgroundColor:"black",height:"81px",borderRadius: "17px"}}>

            </div>
          </div>
          <div className="proj d-flex align-items-end mt-5">
            <div className="lowerp" style={{width:"100%",backgroundColor:"black",height:"81px",borderRadius: "17px"}}>

            </div>
          </div>
        </div>
        <div className=' d-flex justify-content-center' style={{padding:"2rem"}}>
        <button className='btn btn-primary abty' ><span className='abtytext'>Show More</span></button>
        </div>
      </div>
    </div>
  )
}
