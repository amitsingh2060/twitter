import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Follow from './components/Follow';
import Tweet from './components/Tweet';
import Comments from './components/Comments';



function App() {
  return (
      <BrowserRouter>
          
          <Route path="/" exact component={Login}/>
          <Route path="/home"  component={Home}/>
          <Route path="/follow" component={Follow}/>
          <Route path="/tweet" component={Tweet}/>
          <Route path="/comment" component={Comments}/>
          
      </BrowserRouter>
  );
}

export default App;
