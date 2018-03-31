import React,{Component} from 'react';

import './header.less'

export default class Header extends Component{
    render(){
        return <div className='head'>
            <a href="">
                <img src={`http://localhost:8080/favicon.ico`} alt=""/>
            </a>
        </div>
    }
}
