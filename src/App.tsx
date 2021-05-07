import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import StartPage from './pages/startPage';

const App = (props: any) => {
  return (
    <div className="App">
      {props.children}
    </div>
  );
}

const RouterApp = () => {
return(
  <Router>
    <Switch>
          <Route exact path="/">
          <App path="/">
          <StartPage/>
          </App>
          </Route>
          <Route path="/about">
           <App path="/"><div>123</div></App>
          </Route>
        </Switch>
</Router>
)
}

export default RouterApp;
