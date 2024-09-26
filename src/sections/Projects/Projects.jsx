import styles from './Projects.module.css';
import NEWS from '../../assets/NEWS.jpeg';
import CHAT from '../../assets/chat logo.jpeg'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
    <h1 className="sectionTitle">PROJECTS</h1>
    <div className={styles.projectsContainer}>
    <ProjectCard 
      src={NEWS}
      link="https://github.com/KARTHI-MAKES/NEWS-FETCH-WEBSITE"
      h3="NEWS APP"
      p="NEWS WEBSITE"
    />
    <ProjectCard 
      src={CHAT}
      link="https://github.com/KARTHI-MAKES/REACT-CHATAPP"
      h3="CHAT APP"
      p ="CHAT WEBSITE"
    />
   </div>
   <hr />
  </section>
  )
}

export default Projects;
