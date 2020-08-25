import React from 'react'
import './style.css'
function Header(props){
    return(
        <div className='navegation'>Navegation <br/>
        <div className="card-margin">
        {props.card1}
        
        </div>
        <div >
        {props.card2}
        </div>
        <div>
            {props.card3}
        </div>
        <div>
            {props.card4}
        </div>
        <div>
            {props.card5}
        </div>
        </div>
    )
}

export default Header