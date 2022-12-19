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
				<span class="flag">BigBuddy.in</span>
				<span class="time-wrapper"><span class="time">August '22 - present</span></span>
			</div>
			<div class="desc">Full Stack Web Developer</div>
		</div>
	</li>
  
	
	<li>
		<div class="direction-l">
			<div class="flag-wrapper">
				<span class="flag" style={{width:"100%"}}>IEEE CSBC</span>
				<span class="time-wrapper"><span class="time">Jan - Dec 22</span></span>
			</div>
			<div class="desc">Web Manager | Developer</div>
		</div>
	</li>

	
	<li>
		<div class="direction-r">
			<div class="flag-wrapper">
				<span class="flag">BMSCE, Bangalore</span>
				<span class="time-wrapper"><span class="time">DEC 21-25</span></span>
			</div>
			<div class="desc">Electrical & Electronics Engineering</div>
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
