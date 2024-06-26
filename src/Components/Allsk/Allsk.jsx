import React from 'react'
import "../Allsk/Allsk.css"
import Boostrap from "../../Assests/Skills/bootstrap-svgrepo-com.svg"
import Python from "../../Assests/Skills/python-svgrepo-com.svg"
import Java from "../../Assests/Skills/java-4-logo-svgrepo-com.svg"
import JavaScript from "../../Assests/Skills/javascript-svgrepo-com.svg"
import Html from "../../Assests/Skills/html-5-svgrepo-com.svg"
import Css from "../../Assests/Skills/css-3-svgrepo-com.svg"
import Express from "../../Assests/Skills/express-svgrepo-com.svg"
import MongoDb from "../../Assests/Skills/mongodb-svgrepo-com.svg"
import Nodejs from "../../Assests/Skills/nodejs-svgrepo-com.svg"
import Ractimg from "../../Assests/Skills/react-svgrepo-com.svg"
import image1 from "../../Assests/Addiskill/—Pngtree—computer technology elements of cartoon_3871037.png"
export default function Allsk() {
  return (
    <div className='skicona' >
      <div className="container Allskip2">
        <div className="allp">
          <img className='Allskimg' src={image1} alt="" />
        </div>
        <div className="allp2">
          <h4 className='Allskinames'>Here are few technologies I've been working and worked with:</h4>
          <img className="allsimages" src={Html} alt="" />
            <img className="allsimages" src={Css} alt="" />
            <img className="allsimages" src={JavaScript} alt="" />
            <img className="allsimages" src={Nodejs} alt="" />
            <img className="allsimages" src={Ractimg} alt="" />
            <img className="allsimages" src={Express} alt=""  style={{backgroundColor:"white",borderRadius:"6px"}}/>
            <img className="allsimages" src={Boostrap} alt="" />
            <img className="allsimages" src={MongoDb} alt="" />
            <img className="allsimages" src={Java} alt="" />
            <img className="allsimages" src={Python} alt="" />
        </div>
      </div>

    </div>
  )
}
