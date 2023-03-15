import styles from "./About.module.css";
import Developers from "./Helper/Developers";
import AboutLyrics from "./Helper/AboutLyrics";
import Terms from "./Helper/Terms";

const About = () => {
  return (
    <div className={styles.container}>
      <AboutLyrics />
      <Developers />
      <Terms />
    </div>
  );
};

export default About;
