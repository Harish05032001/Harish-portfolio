import React from 'react'
import './intro.css';
// import me from '../../assets/me.png'
import me from '../../assets/photo1.png'
import ReactTypingEffect from 'react-typing-effect';

const Intro = () => {


  return (
    <section id="intro">
        {/* <img src={me} alt="profile" className='me'/> */}
        <div className='profileDiv'>
          <img src={me} alt="profile" className='me'/>
        </div>
        <div className='introContent'>
            <span className="hello">Hello</span>
            {/* <span className="name">I'm <h1 className='harish'>Harish</h1> <br/>Frontend Developer</span>
             */}
            <div className='typingText'>
                <ReactTypingEffect
                  text={["I'm Harish!","Frontend Developer", "Welcome to my portfolio.", "Let's create something amazing!"]}
                  speed={100} // Speed of typing
                  eraseSpeed={50} // Speed of erasing
                  eraseDelay={2000} // Delay before erasing
                  typingDelay={500} // Delay before typing starts
                />
            </div>
            <p className='intro'>I am a skilled web developer with 3 years of experience in creating user friendly website.</p>
            {/* <Link> */}
              <a
                href="/Harish R (SE) resume.pdf"
                download="Harish-CV.pdf"                 
                target="_blank"                          
                rel="noopener noreferrer"
              >
                <button className='hireMe hireMe1'>Download CV</button>
              </a>
            {/* </Link> */}
        </div>
    </section>
  )
}

export default Intro