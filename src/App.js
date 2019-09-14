import React, { Component } from 'react'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/ShopPage/ShopPage'
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp'
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import {auth} from './firebase/firebase.utilities'
import './App.css';


export default class App extends Component {


  constructor(props) {
    super(props)
  
    this.state = {
       currentUser : null
    }
  }
  unsubscripFromAuth = null
  componentDidMount(){
   this.unsubscripFromAuth= auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});

    
    });

  }

  componentWillUnmount(){
    this.unsubscripFromAuth();
  }



  render() {
    return (
      <div className="App">
      <Header currentUser= {this.state.currentUser}/>
      <Switch>
          <Route exact path ='/' component ={HomePage} />
          <Route exact path ='/shop' component ={ShopPage} />
          <Route exact path ='/signin' component ={SignInAndSignUp} />
        </Switch>
    </div>
    )
  }
}

