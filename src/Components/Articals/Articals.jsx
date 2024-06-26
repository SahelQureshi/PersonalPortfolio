import React from 'react'
import "../Articals/Articals.css"
import Avatar from "../../Assests/Avatar/avatar.svg"
import Arrow from "../../Assests/Avatar/reshot-icon-circle-outline-up-left-ZSFHGNABVT.svg"

export default function Articals() {
  return (
    <div className='arcfirstd1' >
        <div className="container " style={{maxWidth:"1300px"}}>
            <div className="apc1">
                <div className="apctext1">
                    <h3 className='ArticlesMtext'>My Latest Articles </h3>
                </div>
                <div className="apctext2 ">
                    <a href="/">View All Projects</a>
                </div>

            </div>
            <div className="apc2">
                <div className="innerapc d-flex justify-content-center align-items-center">
                    <div className="firstapc">
                        <div className="picarc">

                        </div>
                        <h4 className='Apctexh'>The Easiest Way to Become a <br /> Developer</h4>
                        <div className=' d-flex justify-content-between'> 
                        <img className='ArcFirstImg' src={Avatar} alt=""/><span className='artisah'>Sahel Qureshi</span><img className='ArcSecondImg' src={Arrow}  alt="" />
                        </div>             

                    </div>
                </div>
                <div className="innerapc2" >
                    <div className="everyapc d-flex">
                        <div className="arcimagein">

                        </div>
                        <div className="arctextin">
                            <h5 className="arcth5" >How to design a user centric mobile application?</h5>
                            <div className=' d-flex justify-content-between'>
                            <img className='smallAv' alt="" src={Avatar} /><span>Sahel Qureshi</span><img className='arrowsmall' src={Arrow}  alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="everyapc d-flex">
                        <div className="arcimagein">

                        </div>
                        <div className="arctextin">
                            <h5 className="arcth5" >How to design a user centric mobile application?</h5>
                            <div className=' d-flex justify-content-between'>
                            <img className='smallAv' alt="" src={Avatar} /><span >Sahel Qureshi</span><img className='arrowsmall' src={Arrow}  alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="everyapc d-flex">
                        <div className="arcimagein">

                        </div>
                        <div className="arctextin">
                            <h5 className="arcth5" >How to design a user centric mobile application?</h5>
                            <div className=' d-flex justify-content-between'>
                            <img className='smallAv' alt="" src={Avatar} /><span>Sahel Qureshi</span><img className='arrowsmall' src={Arrow}  alt="" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
