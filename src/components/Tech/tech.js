import React from 'react'
import './tech.css';
import html from '../../assets/html5.png'
import css from '../../assets/css3.png'
import js from '../../assets/js.png'
import angular from '../../assets/angular.png'
import react from '../../assets/react.png'
import coldfusion from '../../assets/coldfusion.png'
import sass from '../../assets/sass.png'
import bootstrap from '../../assets/bootstrap.png'

import git from '../../assets/git.png'
import github from '../../assets/github.png'
import bitbucket from '../../assets/bitbucket.png'
import sourcetree from '../../assets/sourcetree.png'
import vscode from '../../assets/vscode.png'
import postman from '../../assets/postman.png'
import sql from '../../assets/sqlserver.png'
import asana from '../../assets/asana.png'



const Tech = () => {
  return (
    <section id='techtools' className='techtools'>
        <div className='technologies'>
            <h1 className='techHeading'>Tech Tools</h1>
            <h1 className='techHeading2'>Tech<span className='techHdngTools'> Tools</span></h1>
        </div>

        <h1 className='technologiesHeading pd012'>Technologies</h1>
        <div className='tech'>
            <div className='techicons'>
                <div className='icon tooltip'><img src={html} alt="html" className='techImg'/><span class="tooltiptext">Html</span></div>
                <div className='icon tooltip'> <img src={css} alt="css" className='techImg'/><span class="tooltiptext">Css</span></div>
                <div className='icon tooltip'> <img src={js} alt="js" className='techImg'/><span class="tooltiptext">Javascript</span></div>
                <div className='icon tooltip'> <img src={angular} alt="angular" className='techImg'/><span class="tooltiptext">Angular</span></div>
            </div>
            
            <div className='techicons'>
                <div className='icon tooltip'><img src={react} alt="react" className='techImg'/><span class="tooltiptext">React</span></div>
                <div className='icon tooltip'><img src={coldfusion} alt="coldfusion" className='techImg'/><span class="tooltiptext">Coldfusion</span></div>
                <div className='icon tooltip'><img src={sass} alt="sass" className='techImg'/><span class="tooltiptext">Sass</span></div>
                <div className='icon tooltip'><img src={bootstrap} alt="bootstrap"  style={{width:"100%"}} className='techImg'/><span class="tooltiptext">Bootstrap</span></div>
            </div>
        </div>

        <h1 className='toolsHeading pd012'>Tools</h1>

        <div className='tools'>
            <div className='techicons'>
                <div className='icon tooltip'><img src={git} alt="git" className='techImg'/><span class="tooltiptext">Git</span></div>
                <div className='icon tooltip'><img src={github} alt="github" className='techImg'/><span class="tooltiptext">Github</span></div>
                <div className='icon tooltip'><img src={sourcetree} alt="sourcetree" className='techImg'/><span class="tooltiptext">Sourcetree</span></div>
                <div className='icon tooltip'><img src={bitbucket} alt="bitbucket" className='techImg'/><span class="tooltiptext">Bitbucket</span></div>
            </div>
            <div className='techicons'>
                <div className='icon tooltip'><img src={postman} alt="postman"  className='techImg'/><span class="tooltiptext">Postman</span></div>
                <div className='icon tooltip'><img src={vscode} alt="vscode"  className='techImg'/><span class="tooltiptext">Visual studio code</span></div>
                <div className='icon tooltip'><img src={sql} alt="sql server"  className='techImg ml-30 w-60 w-100'/><span class="tooltiptext">SQL server</span></div>
                <div className='icon tooltip'><img src={asana} alt="asana"   className='techImg w-60 w-100'/><span class="tooltiptext">Asana</span></div>

            </div>
        </div>
    </section>
  )
}

export default Tech