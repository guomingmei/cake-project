import React,{Component} from "react";
import {connect} from "react-redux";
import propTypes from "prop-types"
import {Link} from "react-router-dom"
import "./shopping.less"
import Header from "../../component/Header";
import action from "../../store/action/cartTab";

class Shopping extends Component {
    constructor(props){
        super(props);
    }
    static defaultProps = {

    };
    render(){
        let {history,goods}=this.props;
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
                    {
                        goods.map((item,index)=>{
                            return (
                                //添加在购物车的商品
                                <div className="shop-detail" key={index}>
                                    {/*详情列表顶部*/}
                                    <div className="shop-cart">
                                        {/*图片区域*/}
                                        <div className="shop-img">
                                            <img src={`http://localhost:8080${item.picUrl}`} alt=""/>
                                        </div>
                                        {/*详情详细*/}
                                        <div className="shop-message">
                                            <h2>{item.title}
                                                <span>{item.smallTitle}</span>
                                            </h2>
                                            <span>规格：2.0磅</span>
                                            <p>￥{item.price*item.num}</p>
                                        </div>
                                        <div className="shop-btn">
                                            {/*单击的时候给方法传递一些值来控制redux的变化*/}
                                            <a href="javascript:;" className="less" onClick={this.lesson.bind(this,item.goodsId,item.num)}>-</a>
                                            <span>{item.num}</span>
                                            {/*单击的时候给方法传递一些值来控制redux的变化*/}
                                            <a href="javascript:;" className="add" onClick={this.add.bind(this,item.goodsId)}>+</a>
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
                            )
                        })
                    }
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
        </div>
    }
     componentDidMount(){
          if (this.props.judge){
              //当添加商品的时候如果是相同的商品会数量加一而不是中数组中从新添加一个商品
              this.props.promote(false)
          }
     }
    add = (id) => {
        let {addGoodsId} = this.props;
        //获取方法当点击按钮的时候通过redux商品的数量加1
        addGoodsId(id)
    };
    lesson = (id,num) => {
        let {removeGoodsId,deleteItem} = this.props;
        if (num===1){
        //     当数量只有一个的时候中管理的redux中删除掉这个对象，让添加中购物车中的这款商品删除
            //这些方法比较复杂
            deleteItem(id);
        }else{
            //获取方法点击按钮当通过redux让商品的数量减一
           removeGoodsId(id)
        }
    }
}

export default connect(state=>({...state.cart}),action)(Shopping)