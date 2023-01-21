import './About.css'

const About = () => {

  return (
    <div className='about-container' id='about'>
      <div className="about">
        <div className="heading">
          &#47;&#47; ABOUT
        </div>
        <div className="about-info">
          <div className="about-line">
              <span className='imp-word'>Interacting</span> with great minds improves my work and gaining <span className='imp-word'>amazing skills</span> from my field.
          </div>
          <div className="about-line">
              By profession, I'm a <span className='imp-word'>college student</span> right now, aspiring to be <span className='imp-word'>Software / Web Developer</span> by acquiring <span className='imp-word'>Programing, Designing and Soft skills</span>.
          </div>
          <div className="about-line">
              <span className='imp-word'>Java</span> | <span className='imp-word'>JavaScript</span> | <span className='imp-word'>React.js</span> | <span className='imp-word'>SQL</span> | are some of the languages I excel in.
          </div>
          <div className="about-line">
              I like doing <span className='imp-word'>photography</span>, <span className='imp-word'>photo editing</span> and I love <span className='imp-word'>writing poems</span>
              <br />
          </div>
          <div className="about-line">
            Checkout my <a className='imp-word' href='https://www.instagram.com/__lit_it_up__/' target='_blank' rel='noreferrer'>photography page <i className='bi bi-box-arrow-up-right'></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
