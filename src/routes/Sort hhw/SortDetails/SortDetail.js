import React from "react"
import {querySort} from "../../../api/sort"
import "./sortDetail.less"

export default class SortDetail extends React.Component {
    constructor() {
        super();
    };

    // async componentDidMount(){
    //     // let {ary} = this.state;
    //     let data = await querySort('cake');
    //     this.setState({data});
    // }
    //

    render() {
        return <div className="container">
            {/*轮播区域*/}
            <div><img src={this.props.data.picUrl} alt=""/></div>

            {/*详情介绍*/}
            <div className="details-box">
                <div className="pro-title">
                    <h3>{this.props.data.title}</h3>
                    <span>{this.props.data.smallTitle}</span>
                </div>
                <p className="price-label">
                    <span className="top-price">￥{this.props.data.productArr[0].price}</span>
                </p>
                <div className="pro-details-label">
                    <a href="">{this.props.data.hotkeyArr[0]}&nbsp;›</a>
                    <a href="">{this.props.data.hotkeyArr[1]}&nbsp;›</a>
                    <a href="">{this.props.data.hotkeyArr[2]}&nbsp;›</a>
                </div>
                <ul className="details-taste">
                    <li>
                        <img src="http://static.21cake.com//themes/wap/img/goods/icon/micon-38.png" alt="枣子"/>
                        枣子
                    </li>
                    <li>
                        <img src="http://static.21cake.com//themes/wap/img/goods/icon/micon-33.png" alt="奶油"/>
                        奶油
                    </li>
                </ul>
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
                    this.props.data.text.map((item, index) => {
                        return `${item}<br/>`
                    })
                }
            </div>

            {/*图片*/}
            <div>
                {
                    this.props.data.imgArr.map((item, index) => {
                        return <img src={`http://localhost:8080${item}`} alt="" key={index}/>
                    })
                }
            </div>
        </div>
    }
}