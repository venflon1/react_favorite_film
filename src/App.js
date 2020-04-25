import React, {Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import Template from './components/mainLayout/template/Template';

import './App.css';

class App extends Component{

  constructor(props){
    super(props);
  }


  render(){

    return (
      <BrowserRouter>
        <Template>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Template>
      </BrowserRouter>
    );

  }
}

export default App;
