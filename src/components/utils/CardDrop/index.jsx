import React  from 'react'
import './stylE.css'
import Flag from '../Flag'
function CardDrop(props){
    return(

        <div type='button' className="containerCardDrop">
            <Flag flag={props.flag}></Flag>
            
            <h3 className='titleCardDrop'>{props.title}</h3>
            <p className='descriptionDropCard'>{props.data}</p>
        </div>
    )
}

export default CardDrop