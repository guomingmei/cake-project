import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux"
import CartTab from "./component/CartTab"
import Shopping from "./routes/Shooping zzq/Shopping"
import User from "./routes/User zzq/User"
import Register from "./routes/User zzq/Register"
import {HashRouter,Route} from "react-router-dom"
import store from "./store"
import "./static/css/reset.min.css"
import "./static/css/html.css"
import Home from "./routes/Home gmm/Home";
import Sort from "./routes/Sort hhw/Sort";
import Community from "./routes/Community lyd/Community";

let element = (
    <Provider store={store}>
        <HashRouter>
            <div style={{width:"100%",height:"100%"}}>
                {/*<CartTab/>*/}
                {/*<Shopping/>*/}
                <Route path="/" exact component={User}/>
                <Route path="/home" exact component={Home}/>
                <Route path="/detail" exact component={Sort}/>
                <Route path="/community" exact component={Community}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/register/personal"/>
            </div>
        </HashRouter>
    </Provider>
);

ReactDOM.render(element, document.getElementById('root'));
