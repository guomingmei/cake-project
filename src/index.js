import React from 'react';
import ReactDOM from 'react-dom';
import Community from "./routes/Community lyd/Community";
import './static/css/reset.min.css'
import './static/css/index.less'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import Mytitle from './routes/Community lyd/Mytitle'
import Subtree from "./routes/Community lyd/Subtree";
import Treeo from "./routes/Community lyd/Treeo";
ReactDOM.render(<div>
        {/*<Community/>*/}
        {/*<Mytitle/>*/}
        <Subtree/>
    </div>,window.root);


