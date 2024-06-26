import React from 'react'
import '../AboutME/about.css'
import Mimage from "../../Assests/MyImage/sahel 2.png"


export default function About() {
  return (
    <div className="mabout">
      <div className="container aboutcon">
        <div className="ab1">
          <div className="abcircle overflow-hidden align-items-center justify-content-right">
            <img className="aboutimg1" src={Mimage} alt=""  />
          </div>
        </div>
        <div className="ab2">
          <h3 className='aboutName' >About Me</h3>
          <p className='abouttextpara' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quos dignissimos voluptatem dolorum repudiandae voluptates reprehenderit inventore qui voluptas, possimus eaque ipsam fuga voluptate deserunt. Quibusdam repellat iusto, repudiandae excepturi temporibus autem. Commodi molestias deleniti voluptas hic odio sapiente, aspernatur voluptates id! Similique nobis error incidunt culpa cumque, voluptate commodi nemo rerum, placeat eos natus sunt illo iure quisquam quaerat aliquid harum aliquam. Tenetur mollitia reiciendis dolorem inventore quidem minima similique, ad, voluptatem quas veritatis, ea saepe veniam error itaque accusantium repudiandae cupiditate laborum eius? </p>
          <div className=' abbt014 d-flex'><button className='btn btn-primary abty' ><span className='abtytext'>Download CV</span></button><button className='btn btn-primary abty'><span className='abtytext'>Contact Me</span></button>
          </div>
        </div>
      </div>
    </div>
  )
}
