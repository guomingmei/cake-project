import React,{Component} from 'react';
import Banner from "../../component/Banner";
import './home.less'

import {samll,homeDetail,textDetail} from '../../api/icon'
import Nav from "../../component/Nav";
import Header from "../../component/Header";
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={bannerData:[],homeData:[],homeList:[]}
    }
    async componentWillMount(){
        let data=await samll();
        let homeData=await homeDetail();
        let textList=await textDetail();
           let homeList=textList.splice(0,5);
        console.log(homeList);
        this.setState({bannerData:data,homeData,homeList});
    }
    render(){
        return <div className='home'>
            <section className="navContainer">

                <Header/>
            </section>


<div>
    <Banner data={this.state.bannerData} auto={2000}/>
    <section className='buyer'>
        <ul>
            <li><i className='iconfont icon-xin'></i>新人首单赠小切块</li>
            <li><i className='iconfont icon-xin'></i>满百包邮</li>
            <li><i className='iconfont icon-xin'></i>千万用户选择</li>
        </ul>
    </section>
    <section className='cake'>
        <ul>
            <li><a href=""><img src={require('../../static/image/cakef.png')} alt=""/><span>蛋糕</span></a></li>
            <li><a href=""><img src={require('../../static/image/cakes.png')} alt=""/><span>咖啡</span></a></li>
            <li><a href=""><img src={require('../../static/image/caker.png')}alt=""/><span>小切块</span></a></li>
            <li><a href=""><img src={require('../../static/image/fly.png')} alt=""/><span>企业专区</span></a></li>

        </ul>
    </section>
    <section className='cakeDetail'>

        <h3>
            <span className='people'>人气</span>
            <span className='more'><a href="javascript:;">更多></a></span>
        </h3>
        <ul>

            {
               this.state.homeData.map((item,index)=>{
                   return  <li key={index}>
                       <a href="">
                           <img src={`http://localhost:8080${item.picUrl}`} alt=""/>
                           <p className='textFirst'>{item.smallTitle}<span className='price'>{item.price}</span><span className='weight'>元/2.0磅</span></p>
                           <p className='textSecond'>{item.subtitleArr

                           }<a href=""><i className='iconfont icon-gouwuche1'></i></a></p>

                       </a>

                   </li>
               })
            }


        </ul>
    </section>
    <section className='home-text'>
        <p>廿一客·活动</p>
    </section>
    <section className='home-new'>

        <a href="">

            <div className='home-second'>
                <p>新客权益</p>
                <p>点击查看</p>
                <p>只剩278天</p>
            </div>
            <div className='home-third'>
                <img src={require('../../static/image/nianyike.jpg')} alt=""/>

            </div>
        </a>
    </section>
    <section className='home-text'>
        <p style={{marginTop:'.1rem'}}>廿一客·文章</p>
    </section>
    <section className='home-detail'>
        <ul>
            {
                this.state.homeList.map((item,index)=>{
                  return  <a href="" key={index}>
                        <li><img src={item.picUrl} alt=""/></li>
                        <p>{item.title}</p>
                    </a>
                })
            }



        </ul>

    </section>

</div>
            <section className="navContainer">

                <Nav/>
            </section>

        </div>
    }
}
