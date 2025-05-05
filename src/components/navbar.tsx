import { useState } from 'react';
import { Link} from 'react-router-dom'
import styles from './navbar.module.css'


function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  
    return(
      <>
        <nav className={styles.navigation}>
          <div className={`${styles.logo}`}><img src="images/portfolio_logo.PNG"></img></div>

          {/* in case of desktop */}
          <div className={styles.navLinks}>
            <Link to="/" className={`${styles.btn} h-6`}>Home</Link>
            <Link to="/about" className={`${styles.btn} h-6`}>About</Link>
            <Link to="/projects" className={`${styles.btn} h-6`}>Projects</Link>
            <Link to="/contact" className={`${styles.btn} h-6`}>Contact Me</Link>
          </div>
          <div className={styles.downbtn}>
            <a href="Aryan-Resume-hidden.docx" download className={`${styles.cv} h-6`}><img src="images/download_icon.png"></img>Download CV</a>
          </div>

          {/* in case of mobile */}
          <div className={styles.menuIcon} onClick={()=>{setIsMobileMenuOpen(!isMobileMenuOpen);}}><img src="images/hamburger-menu.png"></img></div>
        
        </nav>


        {/* menu */}

        {isMobileMenuOpen && (
        <div className={styles.menu}>
          <div className={styles.closebtn} onClick={()=>{setIsMobileMenuOpen(false);}}><img src="images/close_icon.png"></img></div>
          <div className={styles.menuLinks}>
            <Link to="/" className={`${styles.btn} h-4`} onClick={()=>{setIsMobileMenuOpen(false);}}>Home</Link>
            <Link to="/about" className={`${styles.btn} h-4`} onClick={()=>{setIsMobileMenuOpen(false);}}>About</Link>
            <Link to="/projects" className={`${styles.btn} h-4`} onClick={()=>{setIsMobileMenuOpen(false);}}>Projects</Link>
            <Link to="/contact" className={`${styles.btn} h-4`} onClick={()=>{setIsMobileMenuOpen(false);}}>Contact Me</Link>
          </div>
        </div>
        )}
      </> 
    )
}

export default Navbar;