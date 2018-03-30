import React,{Component} from 'react';

import {NavLink} from 'react-router-dom';

import './nav.less'
export default class Nav extends Component{
    render(){
        return <div className='footer'>
           <ul>
               <li><NavLink  to='/home' ><i className='iconfont icon-home'></i><span>首页</span></NavLink></li>
              <li><NavLink to='/detail/cake'><i className='iconfont icon-fenlei1'></i><span>详情</span></NavLink></li>
              <li><NavLink to='/shopping'><i className='iconfont icon-gouwuche'></i><span>购物</span></NavLink></li>
              <li><NavLink to='/community'><i className='iconfont icon-shequ-active1'></i><span>社区</span></NavLink></li>
              <li><NavLink to='/user'><i className='iconfont icon-wode'></i><span>个人</span></NavLink></li>
           </ul>
        </div>
    }
}
