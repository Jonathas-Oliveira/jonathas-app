import React,{useState} from 'react'
import  Modal from 'react-modal'
import  HamburgerButton  from 'react-hamburger-menu'
import './styles.css'
import {Link} from 'react-router-dom'
import blog from '../../images/blog.svg'
import projects from '../../images/projects.svg'
import drops from '../../images/drops.svg'
import contact from '../../images/contact.svg'
import resume from '../../images/resume.svg'



function ModalButton (props){
    const [ModalOpen,setModalOpen]= useState(false)

    return(

        <div className="buttonModal">
            <button className='globalbutton' onClick={() => setModalOpen(!ModalOpen)}>
                <HamburgerButton
                    width={18}
                    height={15}
                    color='#fff'
                    className='burguer'/>
            </button>

        <Modal className='Modalbutton' onRequestClose={() => setModalOpen(false)}  isOpen={ModalOpen} >
        <div className="ContainerButtonModal">
        <button className='close' onClick={() => setModalOpen(false)}><i class="fas fa-times"></i></button>
        <div className="ContentModalButton">
            <Link className='itemButton' to='/blog'><img src={blog} alt="blog"/><span >Blog</span></Link>
            
            <Link to='/drops' className='itemButton'><img src={drops} alt=""/><span >Drops</span></Link>
            
            <Link to='/projects' className='itemButton'><img src={projects} alt=""/><span >Projects</span></Link>
            
            <a href='https://resume.io/r/b0uf5siPh'  className='itemButton' target='_blank' rel="noopener noreferrer"><img src={resume} alt=""/><span>Resume</span></a>
           <a  target='_blank' rel="noopener noreferrer" href="https://wa.me/+5571981871072"> <span className='itemButton'><img src={contact} alt=""/>Contact</span></a>
        </div>
        </div>
        </Modal>
        </div>
        
  
  )
}

export default ModalButton