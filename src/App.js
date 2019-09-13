import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import {Switch, Route, Link} from 'react-router-dom'
import './App.css';


const HatsPage = (props) => (

  <div>
<Link to='/topic'>Topics</Link>
<button onClick={()=>props.history.push('/topic')}>Topics</button>
    <h1>Hats Page</h1>
  </div>
);
const Topic = () => (

  <div>
    <h1>Topic Page</h1>
  </div>
);

const TopicDetails = (props) => (

  <div>
    <h1>Topic Deatiasl Page: {props.match.params.id}</h1>
  </div>
);
function App() {
  return (
    <div className="App">
     <Switch>
        <Route exact path ='/' component ={HomePage} />
        <Route exact path ='/hats' component ={HatsPage} />
        <Route exact path ='/topic' component ={Topic} />
        <Route exact path ='/topic/:id' component ={TopicDetails} />
      </Switch>
    </div>
  );
}

export default App;
