import React from "react";
import "../Myskills/skills.css";

export default function Skills() {
  return (
    <div
      className=" d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "black", color: "white" }}
    >
      <div className="container skillcontainer d-flex flex-wrap">
        <div className="skillp1 skilljs">
        <h3 className="skillnamehead">Coding Skills</h3>
          <h4 className="skillnamesh">HTML</h4>
          <div className="skillb">
            <div
              className="innerskillb"
              style={{
                width: "100%",
                backgroundColor: "red",
                height: "100%",
                borderRadius: "20px",
              }}
            ></div>
          </div>
          <h4 className="skillnamesh">CSS</h4>
          <div className="skillb">
            <div
              className="innerskillb"
              style={{
                width: "100%",
                backgroundColor: "red",
                height: "100%",
                borderRadius: "20px",
              }}
            ></div>
          </div>
          <h4 className="skillnamesh">JavaScripts</h4>
          <div className="skillb">
            <div
              className="innerskillb"
              style={{
                width: "95%",
                backgroundColor: "red",
                height: "100%",
                borderRadius: "20px",
              }}
            ></div>
          </div>
          <h4 className="skillnamesh">ReactJs</h4>
          <div className="skillb">
            <div
              className="innerskillb"
              style={{
                width: "85%",
                backgroundColor: "red",
                height: "100%",
                borderRadius: "20px",
              }}
            ></div>
          </div>
          <h4 className="skillnamesh">Node js</h4>
          <div className="skillb">
            <div
              className="innerskillb"
              style={{
                width: "79%",
                backgroundColor: "red",
                height: "100%",
                borderRadius: "20px",
              }}
            ></div>
          </div>
          <h4 className="skillnamesh">Express js</h4>
          <div className="skillb">
            <div
              className="innerskillb"
              style={{
                width: "",
                backgroundColor: "red",
                height: "100%",
                borderRadius: "20px",
              }}
            ></div>
          </div>
          <h4 className="skillnamesh">MongoDB</h4>
          <div className="skillb">
            <div
              className="innerskillb"
              style={{
                width: "89%",
                backgroundColor: "red",
                height: "100%",
                borderRadius: "20px",
              }}
            ></div>
          </div>
          <h4 className="skillnamesh">Bootstrap</h4>
          <div className="skillb">
            <div
              className="innerskillb"
              style={{
                width: "96%",
                backgroundColor: "red",
                height: "100%",
                borderRadius: "20px",
              }}
            ></div>
          </div>
          <h4 className="skillnamesh">Tailwind CSS</h4>
          <div className="skillb">
            <div
              className="innerskillb"
              style={{
                width: "94%",
                backgroundColor: "red",
                height: "100%",
                borderRadius: "20px",
              }}
            ></div>
          </div>
          <h4 className="skillnamesh">C</h4>
          <div className="skillb">
            <div
              className="innerskillb"
              style={{
                width: "89%",
                backgroundColor: "red",
                height: "100%",
                borderRadius: "20px",
              }}
            ></div>
          </div>
          <h4 className="skillnamesh">Java</h4>
          <div className="skillb">
            <div
              className="innerskillb"
              style={{
                width: "93%",
                backgroundColor: "red",
                height: "100%",
                borderRadius: "20px",
              }}
            ></div>
          </div>
          <h4 className="skillnamesh">Python</h4>
          <div className="skillb">
            <div
              className="innerskillb"
              style={{
                width: "96%",
                backgroundColor: "red",
                height: "100%",
                borderRadius: "20px",
              }}
            ></div>
          </div>
        </div>
        <div className="skillp2 skilljs d-flex flex-wrap justify-content-between">
        <h3 className="skillnamehead">Other Skills</h3>
          <div>
            <div class="progress-bar valueprog1">
              <progress
                value="78"
                min="0"
                max="100"
                style={{ visibility: "hidden", height: "0", width: "0" }}
              ></progress>
              <h4 className="skillnumbers">70%</h4>
            </div>
            <h4 className="skillothname" style={{ textAlign: "center" }}>Communication</h4>
          </div>
          <div>
            <div class="progress-bar valueprog2">
              <progress
                value="75"
                min="0"
                max="100"
                style={{ visibility: "hidden", height: "0", width: "0" }}
              ></progress>
              <h4 className="skillnumbers">85%</h4>
            </div>
            <h4 className="skillothname" style={{ textAlign: "center" }}>Team Work</h4>
          </div>
          <div>
            <div class="progress-bar valueprog3">
              <progress
                value="75"
                min="0"
                max="100"
                style={{ visibility: "hidden", height: "0", width: "0" }}
              ></progress>
              <h4 className="skillnumbers">90%</h4>
            </div>
            <h4 className="skillothname" style={{ textAlign: "center" }}>Problem-solving</h4>
          </div>
          <div>
            <div class="progress-bar valueprog4">
              <progress
                value="75"
                min="0"
                max="100"
                style={{ visibility: "hidden", height: "0", width: "0" }}
              ></progress>
              <h4 className="skillnumbers">82%</h4>
            </div>
            <h4 className="skillothname" style={{ textAlign: "center" }}>
              Project <br />
              Manangement
            </h4>
          </div>
          <div>
            <div class="progress-bar valueprog5">
              <progress
                value="75"
                min="0"
                max="100"
                style={{ visibility: "hidden", height: "0", width: "0" }}
              ></progress>
              <h4 className="skillnumbers">79%</h4>
            </div>
            <h4 className="skillothname" style={{ textAlign: "center" }}>Leadership</h4>
          </div>{" "}
          <div>
            <div class="progress-bar valueprog6">
              <progress
                value="75"
                min="0"
                max="100"
                style={{ visibility: "hidden", height: "0", width: "0" }}
              ></progress>
              <h4 className="skillnumbers">98%</h4>
            </div>
            <h4 className="skillothname" style={{ textAlign: "center" }}>Creativity</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
