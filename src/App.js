import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import GetMapping from './Component/GetMapping';
import PostMapping from './Component/PostMapping';
import Nav from "./Component/Nav";


function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/list" component={GetMapping} />
      <Route path="/edit/:idCard" component={PostMapping} />
      <Route path="/adding" component={PostMapping} />

    </Switch>

    </BrowserRouter>
  );
}

function Home(){
  return(
    <div>
      <h3>This is a home page</h3>
    </div>
  )
}

export default App;
