import React from "react";
import "./styles.css";
import Form from "./Form";
import Info from "./Info";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {

  return (
    <React.Fragment>
      {console.time()}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route path="/info" component={Info} />
        </Switch>
      </BrowserRouter>
      {console.timeEnd()}
    </React.Fragment>
  );
}
