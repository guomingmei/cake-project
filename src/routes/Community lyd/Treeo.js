import React from 'react'
import './Treeo.less'
export default class Treeo extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div>
            <div className='content'>
                <h4 className='time '>主题</h4>
                <span className='h4style '>Who is No.1</span>
                <img className='treeoimg' src={require('../../static/image/shouyebiaoqian.png')} alt=""/>
                </div>
            </div>
    }
}