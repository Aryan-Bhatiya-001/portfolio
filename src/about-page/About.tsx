import styles from './About.module.css';

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.about_me}>
        <div className={styles.heading}><div className="h-2">About Me</div><div className={styles.photo}><img src="images/About_Photo.jpeg"></img></div></div>
        
        <div className={`${styles.about_me_text} h-4`}>
          <p>Hi I am Aryan and I suck at Communication !</p>
          <p>My journey started in 10th grade when I decided to aspire for IITs and spent 3 years of my teenage in preparation of it.
          Finally after some luck and hard work cracked it and got into B.Tech Instrumentation Engineering at IIT Kharagpur.
          But soon I realised that I hated Electrical Engineering{"(of which Instrumentation is a part off)"} and will
          not survive in IIT and hence droped out of it in my 2nd year.</p>
          <p>I traded my career to keep my Curiosity and Interest intact .</p>
        </div>
      </div>

      <div className={`${styles.what_i_m_into} h-4`}>
        <div className={`${styles.heading} h-2`}>What I am into</div>
        
        <p>Currently I am learning Web Development and exploring SEO.</p>
        <p>I am quite drawn to Programming and Internet Communication and would like to create some positive impact using it.</p>
        <p>I like to tackle hard things and challenge myself with unpleasent Situations.</p>
        <p className={styles.line_break}></p>
        <p>Looking for opportunities to work on some real world projects that includes:</p>
        <p>- 🌐 Anything related to Web Development.</p>
        <p>- 📊 Anything related to SEO and Web Scrapping/Crwaling.</p>
        <p>- 🤖 Some AI, Automation Projects.</p>
        <p>- 🌟 Open Sourse Projects that creates positive impact in any way.</p>

        A bit risky, a bit confused and a lot excited !
      </div>
    </div>
  );
}

export default About; 










