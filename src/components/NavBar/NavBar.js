import { useRef } from 'react'
import './NavBar.css'

const NavBar = () => {

    const navbarNavLinkRef = useRef(null);
    const navbarSocialLinkRef = useRef(null);
    const toggleNavBar = () => {
        navbarNavLinkRef.current.classList.toggle('show-nav-menu');
        navbarSocialLinkRef.current.classList.toggle('show-nav-menu');
    }

  return (
    <div className='navbar-container animate__animated animate__fadeInDown'>
      <div className="navbar">
        <a className="title-container" href='#home'>
            <div className="nav-title">
                &lt; Parneet S. Sarao &#47;&gt;
            </div>
        </a>
        <div className="nav-links-container" ref={navbarNavLinkRef}>
            <div className="nav-links">
                <div className="nav-link-container" onClick={toggleNavBar}>
                    <a className="nav-link" href='#home'>&#47;home</a>
                </div>
                <div className="nav-link-container" onClick={toggleNavBar}>
                    <a className="nav-link" href='#about'>&#47;about</a>
                </div>
                <div className="nav-link-container" onClick={toggleNavBar}>
                    <a className="nav-link" href='#projects'>&#47;projects</a>
                </div>
                <div className="nav-link-container" onClick={toggleNavBar}>
                    <a className="nav-link" href='#contact'>&#47;contact</a>
                </div>
            </div>
        </div>
        <div className="social-links-container" ref={navbarSocialLinkRef}>
            <div className="social-links">
                <a className='social-link' href='https://www.linkedin.com/in/parneet-singh-sarao/' target='_blank' rel='noreferrer' onClick={toggleNavBar}>
                    <i className="bi bi-linkedin"></i>
                </a>
                <a className='social-link' href='https://github.com/Parneet-Git' target='_blank' rel='noreferrer' onClick={toggleNavBar}>
                    <i className="bi bi-github"></i>
                </a>
                <a className='social-link' href='https://www.instagram.com/jinx_iris/' target='_blank' rel='noreferrer' onClick={toggleNavBar}>
                    <i className="bi bi-instagram"></i>
                </a>
                <a className='social-link' href='https://wa.me/+917814590044' target='_blank' rel='noreferrer' onClick={toggleNavBar}>
                    <i className="bi bi-whatsapp"></i>
                </a>
            </div>
        </div>
        <div className="menu" onClick={toggleNavBar}>
            Menu <i className='bi bi-three-dots menu-icon'></i>
        </div>
      </div>
    </div>
  )
}

export default NavBar
