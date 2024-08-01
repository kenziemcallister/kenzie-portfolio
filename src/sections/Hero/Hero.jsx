import styles from './HeroStyles.module.css'
import heroImg from '../../assets/kenzie-hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
  const { theme, toggleTheme } = useTheme()

  //if the themeIcon/theme is equal to light, use light icons, otherwise use dark icons
  const themeIcon = theme === 'light' ? sun : moon
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark
  const githubIcon = theme === 'light' ? githubLight : githubDark
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark

 
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
                className={styles.hero}
                src={heroImg } 
                alt="Profile picture of Kenzie McAllister" 
            />
            <img 
                className={styles.colorMode}
                src={themeIcon} 
                alt="Color mode icon" 
                onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
          <h1>Kenzie 
            <br />
            McAllister
          </h1>
          <h2>
            Computer Science @ Mizzou
          </h2>
          <span>
            <a href="https://twitter.com" target="_blank">
              <img src={twitterIcon} alt="Twitter Icon" />
            </a>
            <a href="https://github.com" target="_blank">
              <img src={githubIcon} alt="Ggithu Icon" />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <img src={linkedinIcon} alt="Linkedin Icon" />
            </a>
          </span>
          <p className={styles.description}>
            Interests in data analytics and application development.
          </p>
          <a href={CV} download>
            <button className="hover">
              Resume
            </button>
          </a>
        </div>
    </section>
  )
}

export default Hero