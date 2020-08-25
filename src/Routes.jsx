import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Landing from '../src/components/pages/landing/painel'
import Blog from '../src/components/pages/blog'
import Drops from '../src/components/pages/drops'
import Projects from '../src/components/pages/projects'


function Rota (){
    return(
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Landing}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/drops' component={Drops}/>
            <Route path='/projects' component={Projects}/>
        </Switch>

        </BrowserRouter>
    )
}

export default Rota