import React from 'react'
import '../landing/style.css'
import '../../../style/global.css'
import blog from '../../images/blog.svg'
import Header from '../../utils/header'
import drops from '../../images/drops.svg'
import projects from '../../images/projects.svg'
import contact from '../../images/contact.svg'
import resume from '../../images/resume.svg'
import CardBlog from '../../utils/cards/card-blog/card'
import CardDrop from '../../utils/cards/card-drop'
import CardProjects from '../../utils/cards/card-projects'
import CardContact from '../../utils/cards/card-contact'
import CardResume from '../../utils/cards/card-resume'
import ModalButton from '../../utils/ModalButton'

function Painel() {
    
    
    return (
    <div id="page-landing-content">
    <Header card1={ <CardBlog blog='/blog' before='SEE'img={blog} titulo='MY' title='Blog' description='Some posts like tutorials, programming tips and more'/>
    }
    card2={<CardDrop drops='/drops' before='SEE'img={drops} title='Drops' titulo='SOME' description='Quick posts on code tips and tricks, best practices, tools, and more'/>}
    card3={<CardProjects Projects='/projects' before='SEE' img={projects}title='Projects' titulo='SOME' description='See some projects i have developed or participated'/>}
    card4={<CardContact before='TALK' img={contact} titulo='TO ME' title='Contact' description="Do you have a project in mind? So contact me and let's make it happen"/>}
    card5={<CardResume before='SEE' img={resume}titulo='MY' title='Resume' description='Find out more about me by viewing my resume' />}
    >
    </Header>
    
    
    <div className='Container'>
        <header>
        
           <ModalButton className='burguer'/>
            <p>About me</p>
               
        </header>
        <strong className='nome'>Hi, i'm Jonathas Oliveira</strong>
        
        <div className="content-header">I am passionate about delivering outstanding projects and promoting unforgettable experiences to people.</div>
        <br/>
        <section className="descricao">
            I'm a Front End Architect focused on React, living in Brazil. I have already developed the most varied applications for people, and developed among others projects individuals. Using the better practices in market.
        </section>

        <div className="container-animation">
            <strong>Expertise in</strong>
            <br/>
            <div className="container-icones">
            <div className="web">
            <i className="fa fa-desktop icone-move" aria-hidden="true"></i>
            <div className="barra"> </div>
            <p className='description-item'>WEB APPLICATIONS</p>
            </div>

            <div className="web">
            <i className="fas fa-drafting-compass icone-move"></i>
            <div className="barra"> </div>
            <p className='description-item'>UI & UX DESING</p>
            </div>
            </div>
        </div>
        <br/>
        
    </div>
    <footer>
            <img className='foto'src="https://avatars2.githubusercontent.com/u/68708850?s=460&u=5973a665c56869650f5b7b16a8d79517e1ba6a6e&v=4" alt=""/>
            <div className="container-moving-icone">
            <a  target="_blank" rel="noopener noreferrer" className='animation-icon' href="https://www.linkedin.com/in/jonathas-cod3r"><i className="fab fa-linkedin-in icone-press"></i> LinkedIn  </a>
            </div>
            <div className="container-moving-icone">
            <a  target="_blank" rel="noopener noreferrer" className='animation-icon' href="https://github.com/Jonathas-Oliveira"><i className="fab fa-github icone-press"></i> GitHub  </a>
            </div>
        </footer>
    </div>
    )
}
export default Painel