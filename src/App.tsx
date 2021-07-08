import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./view/Home/Home";
import NavBar from './Components/Navbar/Navbar';
import Login from "./view/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
