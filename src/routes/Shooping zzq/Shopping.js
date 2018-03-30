import React,{Component} from "react";
import {connect} from "react-redux";
import propTypes from "prop-types"
import {Link} from "react-router-dom"
import "./shopping.less"
import Header from "../../component/Header";
import Nav from "../../component/Nav";
import '../../component/nav.less'
class Shopping extends Component {
    constructor(props){
        super(props);
        this.state = {defaultPrice:298.00,price:298.00,num:1}
    }

    static defaultProps = {

    };

    render(){
        let {history}=this.props;
        let {price,num}  = this.state;
        return <div>
            <section className="navContainer">
                <Header/>
                <i className='iconfont icon-fanhui' onClick={()=>{history.goBack(-1)}}>

                </i>
            </section>
            <div className="shop">
                <div className="temporary">
                    {/*公告栏*/}
                    <div className="shop-notice">
                        <span>公告</span>
                        <p>21cake注册未下单用户，首单购买298元（实付）及以上蛋糕类商品，随单赠送：小切块蛋糕一份</p>
                    </div>
                    {/*详情列表*/}
                    <div className="shop-detail">
                        {/*详情列表顶部*/}
                        <div className="shop-cart">
                            {/*图片区域*/}
                            <div className="shop-img">
                                <img src="http://static.21cake.com/public/images/a6/b4/4d/9c0f29a95032c9e8e777e06d04e28e00.jpg" alt=""/>
                            </div>
                            {/*详情详细*/}
                            <div className="shop-message">
                                <h2>Bailey's Love Triangle
                                    <span>百利甜情人</span>
                                </h2>
                                <span>规格：2.0磅</span>
                                <p>￥{price}</p>
                                <div className="shop-btn">
                                    <a href="javascript:;" className="less" onClick={this.lesson}>-</a>
                                    <span>{num}</span>
                                    <a href="javascript:;" className="add" onClick={this.add}>+</a>
                                </div>
                            </div>
                        </div>
                        {/*详情列表底部*/}
                        {/*有些  有可能没有需要根据传过来的值进行判断*/}
                        <div className="shop-bottom">
                       <span>
                           <img src={require("./cart-laid.png")} alt=""/>
                       </span>
                            <p>每份含免费餐具10套</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shop-flex">
                <div className="shop-price">

                    <h3>￥566.00</h3>
                    <p>商品</p>
                </div>
                <div className="deal">
                    下单
                </div>
            </div>
            <section>
             <Nav/>
            </section>
        </div>
    }

    add = () => {
          let {defaultPrice,price,num} = this.state;
          num++;
          price = defaultPrice*num;
          this.setState({price,num})
    };
    lesson = () => {
        let {defaultPrice,price,num} = this.state;
        if (num===1){
        //     当数量只有一个的时候中管理的redux中删除掉这个对象，让添加中购物车中的这款商品删除
        }else{
            num--;
            price = defaultPrice*num;
            this.setState({price,num})
        }
    }
}

export default connect()(Shopping)