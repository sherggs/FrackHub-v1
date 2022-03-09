import React from "react";
import {createGlobalStyle} from "styled-components";
import {BrowserRouter , Switch, Route } from "react-router-dom";
import Home from "components/pages/Home";
import Login from "components/pages/Login";

const GlobalStyle  = createGlobalStyle`
Body{
  background: white;
  min-height: 100vh;
  margin: 0;
  color: black;
  font-family: 'Open Sans';
  background-color: #ffff;
}
`;


function App(){
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Route path="/Login" component={Login}>
        <Login />
        </Route>
        <Route path='/' component={Home}>
        <Home />
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
