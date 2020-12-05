import React from 'react'
import API from '../../images/API.png'
import './Stylle.css'
function CardBlog (props){
    return(
        <a href="https://medium.com/@jonathascod3r/diferen%C3%A7a-entre-api-rest-e-api-restful-e4818ffe3c82" target="_blank" rel="noopener noreferrer">
        <div className="container-blog">
            <img className='img-blog' src={API} alt=""/>
            <div className='containerContent'><p className='descriptionCardBlog'><i className="fas fa-tags"></i>{props.tag}</p>
                <h2 className='title'>{props.title}</h2>
                    <p className='descriptionCardBlog'>{props.description}</p>
                    <p className='descriptionCardBlog'><i className="fas fa-clock"></i>{props.data}</p>
            </div>
        </div>
        </a>
    )
}

export default CardBlog