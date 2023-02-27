import me from '../../assets/images/iris.jpg'
import Button from '../Button/Button'
import './Intro.css'

const Intro = () => {
  return (
    <div className='intro-container' id='home'>
        <div className="intro">
          <div className="img-container animate__animated animate__fadeInLeft">
              <div className="img">
                <img className='my-img' src={me} alt="parneet.jpg" />
              </div>
            </div>
            <div className="brief animate__animated animate__fadeInRight">
              <div className="name-desc">
                <div className="name">
                  Hi, I'm <br />
                  <span className='my-name'>Parneet Singh Sarao</span>
                </div>
                <div className="desc">
              A college student , constantly learning and creating awesome websites like the one you are watching right now &nbsp; :&#41;
                </div>
              </div>
              <div className="btns">
                <Button name='Resume' link='https://drive.google.com/drive/folders/11JxftbJLv9IaB8xeZ7i1CsWXKp6qYNTr?usp=sharing' newpage={true}/>
                <Button name='Hire Me !' link='#contact' newpage={false}/>
              </div>
            </div>
            <a className="scroll-down" href='#about'>
              <i className='bi bi-mouse'></i>
            </a>
        </div>
    </div>
  )
}

export default Intro
