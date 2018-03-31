import React from 'react'
import './community-1.less'
import Mycom from '../../component/Mycom'
// import {Link} from 'react-router-dom'
// import {connect} from 'react-redux'
export default class Community extends React.Component{
    constructor(){
        super()
        this.state={
            flag:0
        }
    }

    render(){
        let {flag}=this.state;
        return <div className='community'>
            <h3>社区</h3>
            <div className='list' onClick={e=>{
                e.target===this.refs.one?this.setState({flag:1}):this.setState({flag:2});
            }}>
                <span ref='one' className={
                    flag===1?'active':''
                }>21客志</span>
                <span ref='two' className={
                    flag===2?'active':''
                }>树洞</span>
            </div>
            {/*树洞子页*/}
            <div className='title'>


            </div>
            {/*21客志子页*/}
            {/*<span className='title'>3月1日</span>*/}
            {/*<a href="#"><Mycom/></a>*/}

        </div>
    }
}

