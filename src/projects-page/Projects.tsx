import Search_Component from "../components/search_component.tsx";
import styles from './Projects.module.css';

function Projects() {
  return (
    <div className={styles.projects}>
      <h1>My Projects</h1>
      <p>Explore my portfolio of work and projects</p>
      <Search_Component />
    </div>
  );
}

export default Projects; 