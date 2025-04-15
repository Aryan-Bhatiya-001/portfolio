import styles from './projectCard.module.css';

interface ProjectCardProps {
    imageUrl: string;
    title: string;
    description: string;
    projectUrl: string;
}

function ProjectCard(props: ProjectCardProps){
    return(
        <div className={styles.card}>
            <div className={styles.image}><img src={props.imageUrl}></img></div>
            <div className={styles.info}>
                <div className={`${styles.title} h-3`}>{props.title}</div>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.urlLink} onClick={()=>{window.open(`${props.projectUrl}`, "_blank");}}>View Project<img src='../public/images/link_icon.png'></img></div>
            </div>
        </div>
    )
}

export default ProjectCard;