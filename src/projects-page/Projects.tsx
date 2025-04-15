import styles from './Projects.module.css';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <div className={styles.project_page}>

      <ProjectCard 
      imageUrl= "../public/images/demo.png" 
      title='Project 1' 
      description='dgwedeqwcgjchgvc ervvev  trbrbgrbrbgrtbg  etwvtrbgrberbrbeb rbrbbrybyerbyrebyetbyet bntyntntrn trntn brqwcqeggv vtberbecwvrwebn etberb vbwb rgbt rbtr b b brbrtbrberyb rwbrwbr ' 
      projectUrl='https://www.google.com'/>

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