import React from 'react'
import './sTyle.css'


function Flag(props){
    return(
        <div className="background">
            <div className="textSpan">
                {props.flag}
            </div>
        </div>
    )
}

export default Flag