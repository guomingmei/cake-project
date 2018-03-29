import React, {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import propTypes from "prop-types"
import "./cartTab.less"

import {getCartDetail} from "../api/icon";

class CartTab extends Component {
    constructor(props) {
        super(props);
        this.state = {auto: true, step: 0,shopDetail:{},data:[]}
    }
    static defaultProps = {};
    async componentDidMount(){
        let data = await getCartDetail();
        let shopDetail = data[0].productArr.find(item=>{
            return item.is_default;
        });
        console.log(data);
        this.setState({shopDetail,data,step:shopDetail.id-1});
    }
    render() {
        let {active, auto,step,shopDetail,data,num} = this.state;
        return <div className="cart-index">
            <i className="hide-button" ref="show" onClick={() => {
                if (!auto) {
                    this.refs.hide.classList.remove("hide");
                    this.refs.show.style.display = "none";
                    this.setState({auto: true})
                }
            }}>
            </i>
            <div className="cart-tab">
                <div className="cart-box">
                    <div className="cart-i">
                        <span>{num}</span>
                        <i className="iconfont icon-gouwuche">
                        </i>
                    </div>
                    <div className="cart-btn">
                        <a href="javascript:;" className="cart-left" onClick={(e) => {
                            if (auto) {
                                this.refs.hide.classList.add("hide");
                                this.refs.show.style.display = "block";
                                this.setState({auto: false})
                            }

                        }}>
                            立即购买
                        </a>
                        <a href="javascript:;" className="cart-right">
                            加入购物车
                        </a>
                    </div>
                </div>
                <div className="cart-detail" ref="hide">
                    {
                        shopDetail?<div>
                            <p>￥{shopDetail.price}</p>
                            <div className="detail-info">
                                <div className="info-img">
                                    <img src={"http://localhost:8080"+shopDetail.img_url} alt=""/>
                                </div>
                                <ul>
                                    <li>{shopDetail.size}</li>
                                    <li>{shopDetail.cutlery_content}</li>
                                    <li>{shopDetail.suite_amount}</li>
                                    <li>最早明天 {shopDetail.pound}配送</li>
                                </ul>
                            </div>
                        </div>:null
                    }
                    <p>商品常规</p>
                    <ul className="detail-weight">
                        {
                            data.length?data[0].productArr.map((item,index)=>{
                                active = step===index ?"active":"";
                                return <li key={index} ref={index} className={`${active}`} onClick={this.changeStep.bind(this,index)}>{item.spec}</li>
                            }):null
                        }
                    </ul>
                </div>
            </div>
        </div>
    }
    changeStep = (index) => {
        let {data} = this.state;
         let shopDetail = data[0].productArr.find(item=>{
              return Number(item.id)-1===index
          });
        this.setState({step:index,shopDetail})
    }
}

export default withRouter(connect()(CartTab));
