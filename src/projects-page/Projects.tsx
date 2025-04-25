import styles from './Projects.module.css';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <div className={styles.project_page}>

      <ProjectCard 
      imageUrl= "images/demo.png" 
      title='Search Volume Finder' 
      description='Work in progress ...' 
      projectUrl='https://github.com/Aryan-Bhatiya-001/Search_Volume_Finder'/>

      <ProjectCard 
      imageUrl='image2' 
      title='Project 2' 
      description='Work in progress ...' 
      projectUrl='abcd2'/>

      <ProjectCard 
      imageUrl='image3' 
      title='Project 3' 
      description='Work in progress ...' 
      projectUrl='abcd3'/>


    </div>
  );
}

export default Projects; 