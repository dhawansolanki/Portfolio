import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import DhawanSolanki from "../../img/DhawanSolanki.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Dhawan Solanki</span>
          <span>
          </span>
          <span>
          A passionate 21-year-old Software Engineer living my Dreams in city of Bangalore.
          <br/>
          Join me on my exciting journey as I explore the world of technology, share my coding insights, and weave captivating stories and recently, I've embarked on a new venture by creating videos on <a style={{textDecoration:"none"}} href="https://youtube.com/@dhawansolanki" target="_blank">YouTube</a>
          <br/>
          My Tech Stack includes VueJs, ReactJs, NodeJs, Python & much more.
          <br/><br/>
          Building <a style={{textDecoration:'none'}} href="https://magicroll.ai.com" target="_blank">@Magicroll.ai</a>
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div class="social-menu">
        <ul>
            <li><a href="https://github.com/dhawansolanki" target="blank"><i class="fab fa-github"></i></a></li>
            <li><a href="https://www.instagram.com/dhawansolanki_/" target="blank"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/dhawansolanki" target="blank"><i class="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://youtube.com/@DhawanSolanki" target="blank"><i class="fab fa-youtube"></i></a></li>
        </ul>
    </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
{/*         <img src={DhawanSolanki} alt="Dhawan Solanki" /> */}
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Designer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Web" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
