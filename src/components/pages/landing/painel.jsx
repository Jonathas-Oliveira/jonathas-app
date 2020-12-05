import React from 'react'
import '../landing/style.css'
import '../../../style/background.css'
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
    <Header card1={ <CardBlog blog='/blog' before='VEJA'img={blog} titulo='MEU' title='Blog' description='Algumas postagens como tutoriais, dicas de programação e muito mais'/>
    }
    card2={<CardDrop drops='/drops' before='VEJA'img={drops} title='Drops' titulo='ALGUNS' description='Postagens rápidas sobre dicas e truques de código, práticas recomendadas, ferramentas e muito mais'/>}
    card3={<CardProjects Projects='/projects' before='VEJA' img={projects}title='Projetos' titulo='ALGUNS' description='Veja alguns projetos que desenvolvi ou participei'/>}
    card4={<CardContact contact=' https://wa.me/+5571982162051' before='CONVERSE' img={contact} titulo='COMIGO' title='Contato' description="você tem um projeto em mente? Então entre em contato comigo e vamos fazer acontecer"/>}
    card5={<CardResume before='VEJA' img={resume}titulo='MEU' title='Resume' description='Descubra mais sobre mim visualizando meu currículo' />}
    >
    </Header>
    
    
    <div className='Container'>
        <header>
        
           <ModalButton className='burguer'/>
            <p>Sobre mim</p>
               
        </header>
        <strong className='nome'>Olá, Eu sou Jonathas </strong>
        
        <div className="content-header">m desenvolvedor movido a desafios</div>
        <br/>
        <section className="descricao">
        Programador Front End focado em React. Já desenvolvi as mais variadas aplicações como freelancer, e também outros projetos de estudo, usando as melhores práticas do mercado.
        </section>

        <div className="container-animation">
            <strong>Expertise em</strong>
            <br/>
            <div className="container-icones">
            <div className="web">
            <i className="fa fa-desktop icone-move" aria-hidden="true"></i>
            <div className="barra"> </div>
            <p className='description-item'>APLICAÇÕES WEB</p>
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