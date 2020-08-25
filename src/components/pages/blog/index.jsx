import React from 'react'
import '../../../style/global.css'
import BackNarrow from '../../utils/BackNarrow'
import './stylee.css'
import CardBlog from '../../utils/CardBlog'

function Blog (props){
    return (
        <div className="container-content">
        <BackNarrow/>
        
        <h1>Blog</h1>
        <p className='paragrahBlog'>See posts on development tutorials, programming tips, and technology in general:</p>
        <div className="containerCards">
            <CardBlog tag='API, API RESTFul, JavaScript, Back-End Development'
            title='Qual a diferença entre APi Rest/RestFul ?'
            description='Fala devs beleza? Hoje cedo publiquei um artigo de rápida leitura, explicando a diferença entre as API REST E RESTFUL...'
            data='ago 02, 2020 2min read'
            />
        </div>
        </div>
    )
}
export default Blog