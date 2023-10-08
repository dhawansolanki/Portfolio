import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}></span>
        <span>About Me</span>
        <span></span>
        <span>
    The Code Artisan: I don't merely code; I orchestrate digital symphonies. As a Software Engineer and Full Stack Developer, I wield JavaScript as my brush to paint intricate front-end landscapes with React.js and Vue.js. On the back-end, Node.js and Ruby on Rails conduct harmonious melodies of functionality. Databases like PostgreSQL and MongoDB provide the colors, while Git stands sentinel, guarding my digital creations for eternity.
</span>
<br/>
<span>
    Cloud Whisperer: I'm no ordinary developer; I'm a cloud sorcerer! In the ethereal realms of AWS and Azure, I conjure serverless spells with Lambda and Docker. CI/CD pipelines are my incantations, ensuring seamless deployment of my digital magic. When the digital tempests rage, I soar on the cloud, navigating towards triumph.
</span>
<br/>
<span>
    YouTube Odyssey: Recently, I embarked on a new adventure—a YouTube channel where I unravel the mysteries of my digital journey. Join me as I explore the intricacies of coding, share insights into the tech world, and unveil the magic of innovation. It's not just code; it's a narrative of creativity and inspiration.
</span>
<br/>
<span>
    Harmony Beyond Code: When I'm not deciphering code, I'm decoding melodies. I wield a guitar as deftly as a keyboard, combining singing and strumming to create harmonious symphonies.
</span>
<br/>
<span>
    Join My Digital Odyssey: My tale is ever-evolving, and I'm thrilled to have you as a fellow traveler. Whether you're a budding collaborator or an adventurer in the digital cosmos, reach out. Together, we'll script new adventures and redefine the boundaries of imagination. Don't forget to subscribe to my YouTube channel to join me on this digital journey!
</span>

        <br/><br/>
        <span style={{ color: darkMode ? "white" : "#fca61e" }}>Age : 20</span>
        <span style={{ color: darkMode ? "white" : "#fca61e" }}>Languages : English, Gujarati, Hindi</span>
        <span style={{ color: darkMode ? "white" : "#fca61e" }}>Hobby : Music - Guitar</span>
        <span style={{ color: darkMode ? "white" : "#fca61e" }}>Email : workspace.dhawan@gmail.com</span>
        <span style={{ color: darkMode ? "white" : "#fca61e" }}>Address : Bengaluru, India || Silvassa, DNH</span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      {/* <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Front-End"}
            detail={"ReactJs, NextJs, VueJs, Material-UI, Bootstrap, TailwindCSS."}
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Back-End"}
            detail={"NodeJs, ExpressJs, PHP, Ruby on Rails. "}
          />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Others"}
            detail={
              "GraphQL, MongoDB, MySQL, AWS, Github."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div> */}
    </div>
  );
};

export default Services;
