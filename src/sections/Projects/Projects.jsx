import styles from './Projects.module.css';
import NEWS from '../../assets/NEWS.jpeg';
import CHAT from '../../assets/chat logo.jpeg'
import ProjectCard from '../../common/ProjectCard';
import PORT from'../../assets/portfolio.jpeg'

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
    <ProjectCard 
      src={PORT}
      link="https://github.com/KARTHI-MAKES/PORTFOLIO"
      h3="PORTFOLIO"
      p ="MY PORTFOLIO"
    />
   </div>
   <hr />
  </section>
  )
}

export default Projects;
