import React from 'react'
import '../style.css'

function CardContact (props){
    //lembre de colocar as props do href
    return(
        <div className="container">
        <a target='_blank' className='animation' href='https://wa.me/+5571982162051' >
        
        <div className='high-a'>
        
        <div className="container-card">
        
        <p className='titulo'>{props.before} {props.titulo}</p>
        <div className="card">
        <div className="flex-card">
        <div className='props-title'>{props.title}</div>
        <img src={props.img} alt="blog"/>
        
        </div>
        
        <p className='description-card'>
            {props.description}
        </p>
        </div>
        
        </div>
        </div>
        </a>
   
        </div>
    )
}
export default CardContact
