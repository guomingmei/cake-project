import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import Home from "./routes/Home gmm/Home";
import './index.less'
import Header from "./component/Header";
import Nav from "./component/Nav";
import './static/css/reset.min.css'
import CartHeader from "./component/CartHeader";
import Sort from './routes/Sort hhw/Sort';
ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path='/' component={Home} exact/>   
            <Route path='/home' component={Home} exact/>   
            <Route path='/detail' component={Sort} />   
        </Switch>
    </HashRouter>
    ,window.root);

/*
ReactDOM.render(<div>
    <Header/>
    <Home/>
    <Nav/>
</div>,window.root);

import './static/css/reset.min.css';
import './static/css/index.less';
// import './static/css/bootstrap.css';
// import "./sort.less"


// import App from './App';
import Sort from "./routes/Sort hhw/Sort"
import Header from "./component/Header";
import Nav from "./component/Nav";

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div className="sort">
    <Header/>
    <Sort/>
    <Nav/>
</div>, document.getElementById('root'));
// registerServiceWorker();
*/
