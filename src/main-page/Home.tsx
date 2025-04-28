import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.intro}>
        <div className={styles.text}>
          <div className={`${styles.l1} h-3`}>Hello, I am</div>
          <div className={`${styles.l2} h-1`}>Aryan Bhatiya</div>
          <div className={`${styles.l3} h-4`}>A Full Stack Web Developer</div>
          <div className={`${styles.l4} h-5`}>Turning coffee into clean code, keywords into traffic, and monotony into automation.</div>
        </div>
        <div className={styles.hirectr}>
          <div className={`${styles.hirebtn} h-4`} onClick={() => window.open('https://www.linkedin.com/in/aryan-bhatiya', '_blank')}>Hire Me</div>
          <div className={styles.downbtn}>
            <a href="Aryan-Resume.docx" download className={`${styles.cv} h-6`}><img src="images/download_icon.png"></img>Download CV</a>
          </div>
        </div>
      </div>

      <div className={styles.photo}>
        <div className={styles.otr_cir}>
          <div className={styles.inr_cir}><img src="images/Profile_Photo.png"></img></div>
        </div>
      </div>
    </div>
  );
}

export default Home; 