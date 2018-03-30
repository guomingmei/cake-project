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
import UserInfo from './routes/User zzq/UserInfo'
import SortDetail from "./routes/Sort hhw/SortDetails/SortDetail";

let element = (
    <Provider store={store}>
        <HashRouter>
            <div style={{width:"100%",height:"100%"}}>
                {/*<CartTab/>*/}
                {/*<Shopping/>*/}
                <Route path="/" exact component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/detail"  component={Sort}/>
                {/*<Route path="/cakeDetail"  component={SortDetail}/>*/}
                <Route path="/SortDetail"  component={SortDetail}/>
                <Route path="/shopping"  component={Shopping}/>
                <Route path="/community"  component={Community}/>
                <Route path="/register"  component={Register}/>
                <Route path="/user"  component={User}/>
                <Route path="/userInfo"  component={UserInfo}/>
                <Route path="/register/personal"/>

            </div>

        </HashRouter>
    </Provider>
);

ReactDOM.render(element, document.getElementById('root'));
