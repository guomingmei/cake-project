import React,{Component} from 'react';

import {NavLink} from 'react-router-dom';

import './nav.less'
export default class Nav extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className='footer'>
<<<<<<< HEAD
           <ul>

               <li><NavLink  to='/home' ><i className='iconfont icon-home'></i><span>首页</span></NavLink></li>
              <li><NavLink to='/ff'><i className='iconfont icon-fenlei1'></i><span>详情</span></NavLink></li>
              <li><NavLink to='/fg'><i className='iconfont icon-gouwuche'></i><span>购物</span></NavLink></li>
              <li><NavLink to='/ft'><i className='iconfont icon-shequ-active1'></i><span>社区</span></NavLink></li>
              <li><NavLink to='/fr'><i className='iconfont icon-wode'></i><span>个人</span></NavLink></li>





           </ul>
        </div>
    }
}
=======
            <ul>
                <li><a href=""><i className='iconfont icon-home'></i></a></li>
                <li><a href=""><i className='iconfont icon-fenlei1'></i></a></li>
                <li><a href=""><i className='iconfont icon-gouwuche'></i></a></li>
                <li><a href=""><i className='iconfont icon-shequ-active1'></i></a></li>
                <li><a href=""><i className='iconfont icon-wode'></i></a></li>

            </ul>
        </div>
    }
    }
>>>>>>> hhw
