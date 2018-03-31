import React from 'react'
import './Mycom.less'
// import {getImg} from '../api/lydata'
export default class Mycom extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(<div>
            <div className='content-com'>
                <h4 className='h4style'>【廿一志】 二月刊·蛋糕.JPEG</h4>
                <span className='time'>3月1日</span>
                <img className='cakelyd' src="http://static.21cake.com//upload/images/441c962bf85d5fb1b5fb2f15fc0e0fbd.jpg" alt=""/>
                <span className='vip'>21cake会员杂志-每月更新</span>
                <div className='subnav'>
                    <p></p>
                    <span>阅读全文</span>
                    <span className='iconfont icon-jiantou myiconfont'></span>
                </div>
            </div>
        </div>)
    }
}