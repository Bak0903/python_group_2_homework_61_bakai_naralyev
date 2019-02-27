import React, { Component } from 'react';
import './App.css';
import Lotto from './containers/Lotto/Lotto';
import Boxes from './containers/Boxes/Boxes';


class App extends Component {

  render() {
    return (
        <div>
            <Lotto/>
            <Boxes/>
        </div>
    );
  }
}

export default App;
