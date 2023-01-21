import Button from '../Button/Button'
import './ProjectCard.css'

const ProjectCards = (
  {title, desc, image, site_link, source_code}
  ) => {
  return (
    <div className="project-card-container">
      <div className='project-card'>
          <div className="card-info">
            <div className="title">
              {title}
            </div>
            <div className="desc">
              {desc}
            </div>
          </div>
          <div className="image">
            <img src={image} alt="project_img.jpg" />
          </div>
          <div className="link-btns">
            <Button name='View Site' link={site_link} newpage={true}/>
            <Button name='Source Code' link={source_code} newpage={true}/>
          </div>
      </div>
    </div>
  )
}

export default ProjectCards