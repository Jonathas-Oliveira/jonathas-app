import React from 'react'
import './Style.css'
//import '../../../style/global.css'
import {Link} from 'react-router-dom'
import LeftNarrow from '../../images/leftNarrow.svg'
function BackNarrow(){
    return (
        <div className="containerBack">
            <Link  to="/">
                <img className='leftnarrow'src={LeftNarrow} alt=""/>             
            </Link>
        </div> 
    )
}

export default BackNarrow