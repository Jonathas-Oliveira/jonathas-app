import React from 'react'
import ModalImage from 'react-modal-image'
import './Style.css'

function CardProject (props){
    return(
        <div className="cards-container">
            <div className="proffy">
            <ModalImage
            className='project-img-zoom'
            small={props.small}
            large={props.large}
            ></ModalImage>
                <span className='title-card'>{props.titleCard}</span> <br/>
                <a rel="noopener noreferrer" target='_blank' className='project-link' href={props.href}>Open project<i className="fa fa-external-link" aria-hidden="true"></i></a>
            </div>
           
        </div>
    )
}

export default CardProject