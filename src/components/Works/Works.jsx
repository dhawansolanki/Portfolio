import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import timeline from "../../img/timeline.png"
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
       

<ul class="timeline">

	
	<li>
		<div class="direction-r">
			<div class="flag-wrapper">
				<span class="flag">BigbuddyAI</span>
				<span class="time-wrapper"><span class="time">August '22 - present</span></span>
			</div>
			<div class="desc">
      <span class="time">Software Engineer</span><br/>
      •   Development and Design of Bigbuddy AI platform, driving to  Million $  of valuation using the latest technologies of AWS and Azure Functions, Vue.JS, React.JS, Node.js Django and Python Scripts.
•   Designed and implemented scalable APIs and background workers for managing first- and third-party video editing tools using Django and Nodejs.
•   Led the development of an IOT System from connecting IOT Device to AWS Iot Core and Open Source software implementation like OpenRemote and ThingsBoard for engineering, testing, and configuring metrics, alarms, monitors, and dashboards.
•   Continuous Integration/Deployment Pipeline Integration, pull requests, code reviews.
•   Actively involved in the early stages of a Startup formation, contributing to strategic decision making and shaping the company's technical direction.
      </div>
		</div>
	</li>
  
	
	<li>
		<div class="direction-l">
			<div class="flag-wrapper">
				<span class="flag" style={{width:"100%"}}>CIIE Developer's Wing</span><br/><br/>
				<span class="time-wrapper"><span class="time">July'22 - October'22</span></span>
			</div>
			<div class="desc">
      <span class="time">Full Stack Developer</span><br/>
        •  Gained proficiency in JavaScript and its libraries, including React, Vue.js, and Node.js, through comprehensive training. 
•  Created a Full Stack E-commerce web application using React.js, Node.js, and PostgreSQL. Implemented payment integration for seamless online transactions.
•   Worked as part of a cross-functional team to ideate, design, and implement web solutions for various projects.
•   Contributed to the successful completion of multiple web projects, fostering a collaborative and productive work environment.</div>
		</div>
	</li>

	
	<li>
		<div class="direction-r">
			<div class="flag-wrapper">
				<span class="flag">IEEE Computer Society BC</span>
        <br/>
        <br/>
				<span class="time-wrapper"><span class="time">January'22 - December'22</span></span>
			</div>
			<div class="desc">
      <span class="time">Web Developer</span><br/>
      •   Led Web Developer role at IEEE Computer Society Bangalore Chapter. Managed and created new pages for the organization's website  using HTML, CSS, and PHP and Wordpress. Successfully implemented updates and improvements to enhance the website's functionality and user experience.
•   Designed and Created a website for the International Conference for Data Decisions and Systems 2022 using HTML, CSS,  Bootstrap, and deployed and maintained it throughout the conference.
•   Reported Directly to the Chairperson, providing regular updates on website development and managing web-related tasks.
Ensured effective communication and coordination, leading to seamless execution of web projects and achieving organizational goals.
      </div>
		</div>
	</li>
  
</ul>


        {/* <img src={timeline}  width="50%" height="100%" style={{margin:"auto"}}/> */}

      {/* <div className="w-left"> */}
        {/* <div className="awesome">
      
          <span style={{ color: darkMode ? "white" : "" }}>
            Timeline
          </span>
          <span></span>
          
          <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div> */}

        {/* right side */}
      {/* </div> */}
      {/* <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>

        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div> */}
    </div>
  );
};

export default Works;
