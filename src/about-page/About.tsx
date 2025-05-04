import styles from './About.module.css';

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.about_me}>
        <div className={styles.heading}><div className="h-2">About Me</div><div className={styles.photo}><img src="images/About_Photo.jpeg"></img></div></div>
        
        <div className={`${styles.about_me_text} h-4`}>
          <p>Hi I am Aryan and I suck at Communication !</p>
          <p>My journey started in 10th grade when I decided to aspire for IITs and spent 3 years of my teenage in preparation of it.
          Finally after some luck and some hard work cracked it and got into B.Tech Instrumentation Engineering at IIT Kharagpur.
          But soon I realised that I didn't like Electrical Engineering and hence droped out of it in my 2nd year.</p>
          <p>I enjoy learning and exploring, and see every obstacle and setback as an opportunity to grow and improve myself.</p>
          <p>- A bit risky, A bit confused and A lot excited !</p>
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
        <p>- 🌟 Open Sourse Projects.</p>
      </div>

      <div className={styles.tech_stack}>
        <div className={`${styles.heading} h-2`}>Tech Stack</div>

        <div className={`${styles.stack} styles.{programming}`}>
          <div className={styles.title}><img src="images/programming.png"></img>Programming</div>
          <div className={styles.list}>
            <img src="images/python.png"/>
            <img src="images/C.png"/>
          </div>
        </div>
        <div className={`${styles.stack} ${styles.frontend}`}>
          <div className={styles.title}><img src="images/frontend.png"></img>Frontend</div>
          <div className={styles.list}>
            <img src="images/html.png"/>
            <img src="images/css.png"/>
            <img src="images/javascript.png"/>
            <img src="images/react.png"/>
            <img src="images/tailwind.png"/>
          </div>
        </div>
        <div className={`${styles.stack} ${styles.backend}`}>
          <div className={styles.title}><img src="images/backend.png"></img>Backend</div>
          <div className={styles.list}>
            <img src="images/fastapi.png"/>
            <img src="images/node.png"/>
          </div>
        </div>
        <div className={`${styles.stack} ${styles.database}`}>
          <div className={styles.title}><img src="images/database.png"></img>Database</div>
          <div className={styles.list}>
            <img src="images/supabase.png"/>
          </div>
        </div>
        <div className={`${styles.stack} ${styles.devops}`}>
          <div className={styles.title}><img src="images/devops.png"></img>Dev-Ops</div>
          <div className={styles.list}>
            <img src="images/git.png"/>
            <img src="images/github.png"/>
          </div>
        </div>
        <div className={`${styles.stack} ${styles.ai}`}>
          <div className={styles.title}><img src="images/ai.png"></img>AI and Automation</div>
          <div className={styles.list}>
            <img src="images/anthropic.png"/>
            <img src="images/playwright.png"/>
            <img src="images/crawl4ai.png"/>
          </div>
        </div>
        <div className={`${styles.stack} ${styles.seo}`}>
          <div className={styles.title}><img src="images/SEO.png"></img>SEO</div>
          <div className={`${styles.list} h-4`}>
            <p>Technical SEO</p>
            <p>Site Archetecture and Crawling</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About; 










