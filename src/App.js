import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import GetMapping from './Component/GetMapping';
import PostMapping from './Component/PostMapping';
import Nav from "./Component/Nav";
import "./App.css";

function App() {
  return (
    <div className="app">
    <BrowserRouter>
    <Nav />
    <Switch>
    <Route path="/" exact component={Home}></Route>
      <Route path="/list" exact component={GetMapping} />
      <Route path="/edit/:idCard" exact component={PostMapping} />
      <Route path="/adding" exact component={PostMapping} />
      <Route path="/**" component={Error}></Route>
    </Switch>

    </BrowserRouter>
    </div>
  );
}

function Home(){
  return(
    <div className="container mt-3">
      <div className="django">
          <h3>Welcome to My first project</h3>
          <p>direct by Ulugbek Qurbanov</p>
      </div>
    </div>
  )
}

function Error(){
  return(
    <div className="container mt-3 bg-blue">
      <div className="justify-content-center">
          <h1 className="font-size-xl text-danger">404</h1>
          <p>Cannot Found This Page</p>
      </div>
    </div>
  )
}

export default App;
