import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Profile from './components/auth/Profile';
import PublicProfile from './components/users/PublicProfile';
import Home from './components/home/Home';
import Menu from './components/cards/Menu';
import Nab from './components/home/Nab';
import MenuDetail from './components/cards/MenuDetail';
import Comida from './components/Comidas/Comida';

const Routes = () => {
    return(
        <Switch>
            <Route path='/comida' component={Comida}/>
            <Route path='/ourmenu' component={Menu}/>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/users/:id" component={PublicProfile} />         
            <Route path='/nab' component ={Nab}/>
            <Route path='/detail/:id' component = {MenuDetail} />
            <Route exact path='/' component = {Home} />
        </Switch>
    )
}

export default Routes