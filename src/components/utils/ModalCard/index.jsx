import React,{useState} from 'react'
import  Modal from 'react-modal'
import CardDrop from '../CardDrop'
import './styyle.css'
 function ModalCard (props){
    const [ModalOpen,setModalOpen]= useState(false)

    return(
        <div>
        <button   onClick={() => setModalOpen(true)}><CardDrop flag={props.flag} title={props.title} data={props.data}/></button>
        
        <Modal className='ModalBody' onRequestClose={() => setModalOpen(false)}  isOpen={ModalOpen} >
        <div className="containerModal">
        <h2 className='ModalTitle'>{props.ModalTitle}</h2>
        <p className='subtitleModal'>{props.ModalSubtitule}</p>
        <p className='contentModal'>{props.ModalContent}</p>
        <img className='imgModal' src={props.img} alt=""/>
        <p className="contentModal">{props.ModalContent2}</p>
        </div>
        
        
        <button className='mobileButton'  onClick={() => setModalOpen(false)}>Fechar</button>

        </Modal>
        </div>
       
    )
}

export default ModalCard