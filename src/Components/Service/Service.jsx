import React from 'react'
import "../Service/service.css"
import Webdev from "../../Assests/My services/web developemnet.jpg"
import Backend from "../../Assests/My services/uiux.jpg"
import Teamwork from "../../Assests/My services/teamwork.jpg"
import Uiux from "../../Assests/My services/bakcend.jpg"
export default function Service() {
  return (
    <div className='servi1'>
        <div className="Serviinner container d-flex sercont" >
            <div className="service1">
                <h3 className='ServiHead'>My Services</h3>
                <p>As a freelancer specializing in web development services, I offer a personalized approach to meet the unique needs of each client. With expertise in HTML, CSS, JavaScript, and various web development frameworks, I deliver tailored solutions ranging from website design and development to e-commerce integration and custom web applications. My services are characterized by flexibility, agility, and a commitment to excellence, ensuring that clients receive high-quality results within their budget and timeline constraints. Whether it's creating responsive and visually stunning websites or optimizing existing platforms for better performance, I prioritize clear communication and collaboration to exceed client expectations. As a freelancer, I am dedicated to providing comprehensive support throughout the development process and beyond, helping clients establish a strong online presence and achieve their business objectives effectively in the digital landscape.</p>
            </div>
            <div className="service2">
                <div className="inservi">
                    <div className="workser">
                        <img className='serimages' src={Webdev} alt="" />
                    </div>
                    <div className="workser">
                        <img className='serimages' src={Backend} alt="" />
                    </div>
                </div>
                <div className="inservi pt-4">
                <div className="workser">
                    <img className='serimages' src={Uiux} alt="" />
                </div>
                    <div className="workser">
                        <img className='serimages' src={Teamwork} alt="" />
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
