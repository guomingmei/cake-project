import React, {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import propTypes from "prop-types"
import "./cartTab.less"

import {getCartDetail} from "../api/icon";
import action from "../store/action/cartTab";

class CartTab extends Component {
    constructor(props) {
        super(props);
        this.state = {auto: true, step: 0,shopDetail:{},data:[],jump:true}
    }
    static defaultProps = {};
    async componentDidMount(){
        let {item} = this.props;
        let data = await getCartDetail({type:item[0].type,goodsId:item[0].goodsId});
        let shopDetail = data[0].productArr.find(item=>{
            return item.is_default;
        });
        console.log(data);
        this.setState({shopDetail,data,step:shopDetail.id-1});
    }
    render() {
        let {active, auto,step,shopDetail,data,num,jump} = this.state;
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
                        <span>{this.props.theNum}</span>
                        <i className="iconfont icon-gouwuche">
                        </i>
                    </div>
                    <div className="cart-btn">
                        <a href="javascript:;" className="cart-left" onClick={(e) => {
                            if (auto) {
                                this.refs.hide.classList.add("hide");
                                this.refs.show.style.display = "block";
                                this.setState({auto: false})
                            }else{
                                this.props.history.push(`/shopping`)
                            }
                        }}>
                            立即购买
                        </a>
                        <a href="javascript:;" className="cart-right" onClick={()=>{
                            if (auto) {
                                this.refs.hide.classList.add("hide");
                                this.refs.show.style.display = "block";
                                this.setState({auto: false})
                            }else{
                                this.jump(this.props.item[0])
                            }
                        }}>
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
                                    <li>明天 {shopDetail.pound}PM配送</li>
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
    };


    jump = (item) => {
        let {add, goods, promote} = this.props;
        //通过redux传递过来的布尔值来控制是否是从其他也添加过来的相同商品
        let judge = goods.some(objItem => {
            //在这里获取是否有相同的商品
            return objItem.goodsId === item.goodsId
        });
        //用传过来的值判断 (传过来的值就在上方)
        if (!judge) {
            //当不是相同商品的时候直接给数组中添加一个商品添加到购物车中
            //这里执行promote是为了防止中跳转购物车页时触发事件 避免不必要的数量添加
            promote(!judge);
            //添加商品
            add(item);
        } else {
            //当发现是相同商品的时候我们通过参数让购物车相同商品数量加一
            //给promote的值为true时代表是相同商品 需要添加  所以为给了他当前商品的标志ID让这个商品的num计数器添加一
            promote(judge, item.goodsId);
        }
    }
}

export default withRouter(connect(state=>({...state.cart}),action)(CartTab));
