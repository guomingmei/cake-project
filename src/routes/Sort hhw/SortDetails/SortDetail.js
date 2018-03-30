import React from "react"
import {querySort,ListSort} from "../../../api/sort"
import "./sortDetail.less"
import Header from "../../../component/Header";

export default class SortDetail extends React.Component {
    constructor() {
        super();
        this.state={
            data:[]
        }
    };

    async componentWillMount(){
        let {location: {search}} = this.props,
            reg=/([^&?]+)=([^&?]+)/g;
        let obj={};
        search.replace(reg,function(){
            obj[arguments[1]] = arguments[2];
        });
        console.log(obj);
        let data = await ListSort(obj.type,obj.goodsId);

        this.setState({data});
        console.log(data);
        console.log(1);
    }
    /*componentWillReceiveProps(nextState){

     }*/

    render() {
        let {history}=this.props;
        console.log(this.props);
        return (this.state.data.length? <div className="container">


            <section className="navContainer">
                <Header/>
                <i className='iconfont icon-fanhui' onClick={()=>{history.goBack(-1)}}>

                </i>
            </section>
            {/*轮播区域*/}
            <div className='avatar'><img src={`http://localhost:8080${this.state.data[0].picUrl}`} alt=""/></div>

            {/*详情介绍*/}
            <div className="details-box">
                <div className="pro-title">
                    <h3>{this.state.data[0].title}</h3>
                    <span>{this.state.data[0].smallTitle}</span>
                </div>
                <p className="price-label">
                    <span className="top-price">￥{this.state.data[0].price}</span>
                </p>
                <div className="pro-details-label">
                  {/*  {
                        this.state.data[0].subtitleArr.length?this.state.data[0].subtitleArr.map((item,index)=>{

                                return     <a href="javascript:;" key={index}>{item}</a>
                            })
                            :null

                    }*/}

                </div>
                <ul className="details-taste">
                    {this.state.data[0].subtitleArr.length?this.state.data[0].subtitleArr.map((item,index)=>{
                        return  <li key={index}>
                          <span >{item}</span>
                        </li>
                        })
                        :null
                    }
                </ul>
                <div className='cakeHot' style={{marginLeft:'.2rem',marginBottom:'.1rem'}}>
                    {
                        this.state.data[0].hotkeyArr.length?this.state.data[0].hotkeyArr.map((item,index)=>{
                            return <span key={index} style={{border:'.01rem solid #D5BFA7',padding:'0 .12rem',borderRadius:'1rem',display: 'inline-block',color:'#D5BFA7',marginRight:'.06rem' }}>{item}</span>
                        }):null

                    }
                </div>
                <div className="select-card">
                    <ul className="select-specifications">
                        <li><a id="J-specifications">已选择：2.0磅<i className="iconfont icon-jiantou"></i></a></li>
                    </ul>
                    <div className="details-options-card">
                        <ul className="details-options">
                            <li className="details-options-size"><i className="iconfont icon-dangao"></i>17x17cm</li>
                            <li className="details-options-laid"><i className="iconfont icon-icon-test1"></i>含10套餐具</li>
                            <li className="details-options-unmber"><i className="iconfont icon-pengyou"></i>适合7-8人分享
                            </li>
                            <li className="details-options-time"><i className="iconfont icon-shizhong"></i>最早今天 21:30配送
                            </li>
                        </ul>
                    </div>
                    <ul className="store-info">
                        <li>
                            <img src="http://static.21cake.com//themes/wap/img/fresh.png" alt="保鲜条件"/>
                            <span>保鲜条件</span>
                            <div><p>0－4℃保藏12小时，5℃食用为佳</p></div>
                        </li>
                        <li data-sweet="3" id="sweetList">
                            <i className="sweetness iconfont icon-tangguo"></i>
                            <span>参考甜度</span>
                            <div>
                                <p className="sweet-list">
                                    <i className="active iconfont icon-tangguo"></i>
                                    <i className="active iconfont icon-tangguo"></i>
                                    <i className="active iconfont icon-tangguo"></i>
                                    <i className="iconfont icon-tangguo"></i>
                                    <i className="iconfont icon-tangguo"></i>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/*文字简介*/}
            <div style={{padding: ".15rem", background: "#FFFFFF", marginTop: ".12rem"}}>
                {
                   this.state.data[0].text.length? this.state.data[0].text.map((item, index) => {
                       return `${item}`
                   }):null
                }
            </div>

            {/*图片*/}
            <div className='productImg'>
                {
                    this.state.data[0].imgArr.map((item, index) => {
                        return <img src={`http://localhost:8080${item}`} alt="" key={index}/>
                    })
                }
            </div>
        </div>:null)
    }
}