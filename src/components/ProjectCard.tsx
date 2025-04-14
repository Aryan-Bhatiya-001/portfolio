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
            <div className={styles.image}>{props.imageUrl}</div>
            <div className={styles.info}>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.urlLink}>{props.projectUrl}</div>
            </div>
        </div>
    )
}

export default ProjectCard;