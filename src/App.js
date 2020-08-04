import React from 'react';
import Form from './Form';
import Terms from './Terms';
import {BrowserRouter as Router, Switch,Route,Link, BrowserRouter} from 'react-router-dom';
import "./styles.css";
import './App.css';

function App() {

  return (
    <React.Fragment>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Form} />
                <Route exact path="/terms" component={Terms} />
                </Switch>
            </BrowserRouter>
    </React.Fragment>
     
  );
}

export default App;
