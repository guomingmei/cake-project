import React from "react"
import "./sortDetail.less"

export default class SortDetaile extends React.Component {
    constructor() {
        super()
    };

    render() {

        return <div className="container">
            {/*轮播区域*/}
            <div></div>

            {/*详情介绍*/}
            <div className="details-box">
                <div className="pro-title">
                    <h3>Chinese Date</h3>
                    <span>枣儿</span>
                </div>
                <p className="price-label">
                    <span className="top-price">￥298</span>
                </p>
                <div className="pro-details-label">
                    <a href="">聚会&nbsp;›</a>
                    <a href="">新品&nbsp;›</a>
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
                        <li><a id="J-specifications">已选择：2.0磅<i></i></a></li>
                    </ul>
                    <div className="details-options-card">
                        <ul className="details-options">
                            <li className="details-options-size"><i></i>17x17cm</li>
                            <li className="details-options-laid"><i></i>含10套餐具</li>
                            <li className="details-options-unmber"><i></i>适合7-8人分享</li>
                            <li className="details-options-time"><i></i>最早今天 21:30配送</li>
                        </ul>
                    </div>
                    <ul className="store-info">
                        <li>
                            <img src="http://static.21cake.com//themes/wap/img/fresh.png" alt="保鲜条件"/>
                            <span>保鲜条件</span>
                            <div><p>0－4℃保藏12小时，5℃食用为佳</p></div>
                        </li>
                        <li data-sweet="3" id="sweetList">
                            <img src="" alt=""/>
                            <span>参考甜度</span>
                            <div>
                                <p className="sweet-list">
                                    <i className="active"></i>
                                    <i className="active"></i>
                                    <i className="active"></i>
                                    <i></i>
                                    <i></i>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/*文字简介*/}
            {/*<div style="padding: 15px;background: #FFFFFF; margin-top: 12px;">*/}
            <div>
                '红枣奶油戚风，与姜撞奶慕斯'
                <br/>
                '温暖、绵延，日常题材的一闪灵感'
                <br/>
            </div>

            {/*图片*/}
            <div>
                <img src="" alt=""/>
            </div>
        </div>
    }
}