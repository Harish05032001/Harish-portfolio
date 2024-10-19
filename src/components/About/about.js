import React from 'react';
import './about.css';
import company from '../../assets/company.png'
import location from '../../assets/location.png'


const About = () => {
  return (
    <section id='aboutMe' className='aboutMe'>
        <div className='about'>
            <h1 className='aboutHeading'>About Me</h1>
            <h1 className='aboutHeading2'>About<span className='abtHdngMe'> Me</span></h1>
        </div>

        
        <div className='workExp'>
            <div className='para'>
                <p className='aboutPara'>Frontend developer with 2 years of experience and creates the digital softwarethat entices the user into a seamless interaction between humans and computers.Expertise on focusing the UI Development and user experience and proficient inHTML5, CSS3, JavaScript, TypeScript, Angular and creating self-contained,reusable, and testable modules and components.</p>
            </div>
            <h1 className='heading pd012'>Work Experience</h1>
            <div className='expCard pd012'>
                <div className='position'>
                    <p className='SE'>SoftWare Engineer</p>
                    <div className='fulltime'>
                        <p>Full-time</p>
                    </div>
                </div>
                <div className='company'>
                    <div className='chetu'>
                        <img src={company} alt="" className='companyImg'/>
                        <p>Chetu.Inc</p>
                        <img src={location} alt="" className='locationImg'/>
                        <p>Noida</p>
                    </div>
                </div>
            </div>
            
            <div className='expCard pd012'>
                <div className='position'>
                    <p className='SE'>Trainee Programmer</p>
                    <div className='fulltime'>
                        <p>Full-time</p>
                    </div>
                </div>
                <div className='company'>
                    <div className='chetu'>
                        <img src={company} alt="" className='companyImg'/>
                        <p>Ionixx technologies</p>

                        <img src={location} alt="" className='locationImg'/>
                        <p>Chennai</p>
                    </div>
                </div>
            </div>

            {/* <hr /> */}


            <h1 className='heading pd012'>Education</h1>
            <div className='expCard pd012'>
                <div className='position'>
                    <p className='SE'>B.E Computer Science</p>
                    <div className='fulltime'>
                        <p>Full-time</p>
                    </div>
                </div>
                <div className='company'>
                    <div className='chetu'>
                        <img src={company} alt="" className='companyImg'/>
                        <p>MKCE</p>

                        <img src={location} alt="" className='locationImg'/>
                        <p>Karur</p>
                    </div>
                </div>
            </div>
            
            
        </div>
    </section>

    
    
  )
}

export default About