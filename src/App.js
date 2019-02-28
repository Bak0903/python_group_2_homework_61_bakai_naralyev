import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Lotto from './containers/Lotto/Lotto';
import Boxes from './containers/Boxes/Boxes';
import Layout from "./Layout";
import Main from './containers/Main/Main';

class App extends Component {

    render() {
        return (
            <div className={"App"}>
                <BrowserRouter>
                    <Layout>
                        <Switch>
                            <Route path="/lotto" component={Lotto}/>
                            <Route path="/boxes" exact component={Boxes}/>
                            <Route path="/" component={Main}/>
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
