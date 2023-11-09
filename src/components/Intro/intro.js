import React from 'react'
import './intro.css';
import bg from '../../assets/image.png'
import {Link} from 'react-scroll'
import btnImg from '../../assets/hireme.png'
const Intro = () => {
  return (
    <section id="intro">
    <div className="introContent">
        <span className="hello">Hello,</span>
        <span className='introText'>I'm <span className="introName">Sagar</span><br/>Full-stack Developer</span>
        <p className="introPara">Seeking an entry-level position to begin my career in a high-level professional environment.</p>
        <Link><button className="btn"><img src={btnImg} alt="" className='btnImg' />Hire Me</button></Link>
    </div>
    
    <img src={bg} alt="Sagar" className="bg" />
    </section>
  )
}

export default Intro