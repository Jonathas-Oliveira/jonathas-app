/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import '../style.css'
//import {Link} from 'react-router-dom'

function CardResume (props){
    //lembre de colocar as props do href
    return(
        <div className="container">
        <a target='_blank' className='animation' href='https://resume.io/r/b0uf5siPh' >
        
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
export default CardResume