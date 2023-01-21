import wiki_shows_img from '../../assets/images/wiki_shows.png'
import books_site_img from '../../assets/images/books_site.png'
import calculator_img from '../../assets/images/calculator.png'
import covid_tracker_img from '../../assets/images/covid_tracker.png'
import ProjectCard from '../ProjectCard/ProjectCard'
import './Projects.css'

const Projects = () => {

    const projects_list = [
        {
            title: 'Wiki Shows',
            desc: "A beautifully designed Movies App built with React.js let's you explore from various tv series, movies, drama, documentary and many more.You can watch the movie trailer and the team cast.With the help of search bar you can search your favorite shows and add them to favorites.",
            image: wiki_shows_img,
            site_link: 'https://wikishows.netlify.app/',
            source_code: 'https://github.com/Parneet-Git/Wiki-Shows'
        },
        {
            title: 'Book Store Website',
            desc: "This amazing books website is made using HTML, CSS and JavaScript including bootstrap. It is fully responsive from laptop to mobile phones and is designed to be user- friendly with a wide collections of books.",
            image: books_site_img,
            site_link: 'https://parneet-git.github.io/Books-Website/',
            source_code: 'https://github.com/Parneet-Git/Books-Website'
        },
        {
            title: 'COVID-19 Tracker',
            desc: "This app let's you know the real-time data about the COVID-19 such as confirmed cases, recovered and deaths and the new arising situations using COVID19 API.",
            image: covid_tracker_img,
            site_link: 'https://parneet-git.github.io/COVID-19-Tracker/',
            source_code: 'https://github.com/Parneet-Git/COVID-19-Tracker'
        },
        {
            title: 'Calculator App',
            desc: "A beautifully designed calculator app made using HTML, CSS and JavaScript with minimum of the code and maximum output.The buttons are held together using display as grid and it works just like the normal calculator should work.",
            image: calculator_img,
            site_link: 'https://parneet-git.github.io/Calculator-App/',
            source_code: 'https://github.com/Parneet-Git/Calculator-App'
        }
    ]

    return (
        <div>
            <div className='projects-container' id='projects'>
                <div className="projects">
                    <div className="heading">
                        &#47;&#47; Projects
                    </div>
                    <div className="projects-cards">
                        {
                        projects_list.map((project) => {
                            return (
                            <ProjectCard 
                            key={project.title}
                            title={project.title} 
                            desc={project.desc} 
                            image={project.image} 
                            site_link={project.site_link}
                            source_code={project.source_code} />
                        )})}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
