import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/ShopPage/ShopPage'
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp'
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
     <Switch>
        <Route exact path ='/' component ={HomePage} />
        <Route exact path ='/shop' component ={ShopPage} />
        <Route exact path ='/signin' component ={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
