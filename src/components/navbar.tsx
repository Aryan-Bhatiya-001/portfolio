import { Link } from 'react-router-dom'
import styles from './navbar.module.css'

function Navbar() {
    return(
        <nav className={styles.navigation}>
          <div className={`${styles.logo}`}><img src="images/portfolio_logo.PNG"></img></div>
          <div className={styles.navLinks}>
            <Link to="/" className={`${styles.btn} h-6`}>Home</Link>
            <Link to="/about" className={`${styles.btn} h-6`}>About</Link>
            <Link to="/projects" className={`${styles.btn} h-6`}>Projects</Link>
            <Link to="/contact" className={`${styles.btn} h-6`}>Contact Me</Link>
          </div>
          <div className={styles.downbtn}>
            <a href="Aryan-Resume.docx" download className={`${styles.cv} h-6`}><img src="images/download_icon.png"></img>Download CV</a>
          </div>
        </nav>
    )
}

export default Navbar;