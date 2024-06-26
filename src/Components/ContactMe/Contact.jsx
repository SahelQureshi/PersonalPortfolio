import React from "react";
import "../ContactMe/contact.css";
import Phone from "../../Assests/Social Media Icons/add-contact.png"
import Gmail from "../../Assests/Social Media Icons/Mail.png"
import Map from "../../Assests/Social Media Icons/map.png"


export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "39892bf2-61bd-4f09-8ce6-d62cc66ef296");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="Contact1" >
      <div className="container ContactInner d-flex">
        <div className="conta">
          <h3 className="ContacHead">Contact US</h3>
          <p className="contactPara">Fill out the contact form and send your message, I will contact you shorlty! </p>
          <ul style={{paddingLeft:"1rem"}}>
            <li className="ContacLi"><img className="contactImgs" src={Phone} alt="" /><span>+91-9007947586</span></li>
            <li className="ContacLi"><img className="contactImgs" src={Gmail} alt="" /><span>sahelqureshi0089@gmail.com</span></li>
            <li className="ContacLi"><img className="contactImgs" src={Map} alt="" /><span>Birlagate, Barrackpore, North 24pgs, Kolkata</span></li>
          </ul>
          
        </div>
        <div className=" contaimgd">
          <form onSubmit={onSubmit} id="contactForm" name="contactForm">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    id="message"
                    cols="30"
                    rows="7"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <button type="submit" className="btnse">Send Message</button>
                  <div className="submitting"></div>
                </div>
              </div>
            </div>
          </form>
          <span style={{color:"black"}}>{result}</span>
        </div>
      </div>
    </div>
  );
}
