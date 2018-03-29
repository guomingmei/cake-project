import React,{Component} from 'react';

import './header.less'

export default class Header extends Component{
    render(){
        return <div className='head'>
            <a href="">
                <img src={require('../static/image/logo.png')} alt=""/>
            </a>
        </div>
    }
}
