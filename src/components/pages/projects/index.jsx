import React from 'react'
import '../../../style/background.css'
import './style.css'
import BackNarrow from '../../utils/BackNarrow'
import proffySmall from '../../images/proffySmall.png'
import proffyHuge from '../../images/proffyHuge.png'
import CardProject from '../../utils/CardsProject'
import flappySmall from '../../images/flappySmall.jpg'
import flappyLarge from '../../images/flappyLarge.jpg'
import cod3rLarge from '../../images/cod3rLarge.png'
import cod3rSmall from '../../images/cod3rSmall.jpg'
import foodSmall from '../../images/foodfySmall.jpg'
import foodLarge from '../../images/foodfyLarge.png'
import devschoolSmall from '../../images/devscroolFront Small.png'
import devschoolLarge from '../../images/devscroolFrontLarge.png'
import spotify from '../../images/spotifyWeb.png'

function Projects (){
    return( 
        <div className="container-project">
        <div className="container-content">
        <BackNarrow/>
        
        <h1>Projetos</h1>
        <p className='descritptionCardProject'>Aqui estão alguns dos projetos que desenvolvi ou participei do processo de desenvolvimento</p>
        </div>
        <div className="containerCards">
        <CardProject small={proffySmall} href="https://github.com/Jonathas-Oliveira/Proffy" large={proffyHuge} titleCard='Proffy'></CardProject>
        <CardProject small={flappySmall} href='https://github.com/Jonathas-Oliveira/Flappy-bird' large={flappyLarge} titleCard='Flappy Bird'/>
        <CardProject small={cod3rSmall} href='https://github.com/Jonathas-Oliveira/SPA-AJAX' large={cod3rLarge} titleCard='Cod3r'  />
        <CardProject small={foodSmall} href='https://github.com/Jonathas-Oliveira/LaunchBase' large={foodLarge} titleCard='FoodFy' />
        <CardProject small={devschoolSmall} href='https://github.com/Jonathas-Oliveira/DevSchool' large={devschoolLarge} titleCard='DevSchool'/>
        <CardProject small={spotify} href='https://github.com/Jonathas-Oliveira/Spotify-Clone' large={spotify} titleCard='Spotify Clone'/>

        </div>
        
        </div>
        
    )
}

export default Projects
