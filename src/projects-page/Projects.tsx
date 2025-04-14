import styles from './Projects.module.css';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <div className={styles.project_page}>

      <ProjectCard 
      imageUrl='image' 
      title='Project 1' 
      description='description1' 
      projectUrl='abcd'/>

      <ProjectCard 
      imageUrl='image2' 
      title='Project 2' 
      description='description2' 
      projectUrl='abcd2'/>

      <ProjectCard 
      imageUrl='image3' 
      title='Project 3' 
      description='description3' 
      projectUrl='abcd3'/>


    </div>
  );
}

export default Projects; 