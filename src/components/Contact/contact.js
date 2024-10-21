import React from 'react'
import './contact.css'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import xtwitter from '../../assets/xTwitter.png'
import github from '../../assets/github.png'
import gmail from '../../assets/gmail.png'

const Contact = () => {
  return (
    <div id='contactInfo' className='contactInfo'>
        <div className='queries'>
            <p>If you have any queries, please drop a mail</p>
        </div>
        <div className='email'>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=harishprvn@gmail.com&su=Hello Harish&body=Hi, I want to reach out to you!"
                    target="_blank" rel="noopener noreferrer">
                <h1>harishprvn@gmail.com</h1>
            </a>
        </div>
        <div className='socialMedia'>
            <div className='contactIcon'>
                <a href="https://www.linkedin.com/in/harish-r-6aa545204" target="_blank"
                rel="noopener noreferrer">
                    <img src={linkedin} alt="linkedin" className='contactImg'/>
                </a>
            </div>
            <div className='contactIcon'> 
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=harishprvn@gmail.com&su=Hello Harish&body=Hi, I want to reach out to you!"
                    target="_blank" rel="noopener noreferrer">
                    {/* You can use an icon here */}
                    <img src={gmail} alt="gmail" className='contactImg' />
                </a>
            </div>
            <div className='contactIcon'>
                <a href="https://github.com/Harish05032001" target="_blank"
                rel="noopener noreferrer">
                    <img src={github} alt="github" className='contactImg'/>
                </a>
            </div>
            <div className='contactIcon'>
                <a href="https://www.instagram.com/haris_mahra/" target="_blank"
                rel="noopener noreferrer">
                    <img src={instagram} alt="instagram" className='contactImg'/>
                </a>
            </div>
            <div className='contactIcon'>
                <a href="https://www.linkedin.com/in/harish-r-6aa545204" target="_blank"
                rel="noopener noreferrer">
                    <img src={xtwitter} alt="xtwitter" className='contactImg'/>
                </a>
            </div>
            
            


        </div>
    </div>
  )
}

export default Contact