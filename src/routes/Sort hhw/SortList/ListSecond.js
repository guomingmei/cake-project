import React from "react"
import {NavLink} from 'react-router-dom';
import {querySort} from "../../../api/sort";
import {connect} from "react-redux"
import "./SortList.less"
import action from "../../../store/action/cartTab";

class ListThird extends React.Component {
    constructor() {
        super();
        this.state={data:[]}
    }
    async componentWillMount(){
        let{location:{pathname}}=this.props;
        let reg=/([a-zA-Z]+)/g;
        let detailList=pathname.match(reg)[1]||'cake';
        let data = await querySort(detailList);
        this.setState({data});
    }
    render() {
        let {data}=this.state;
        {return data.length?( <div className="list-pro-box">
            <div className="list-box">
                <div className='ListNav'style={{width:'100%',height:'.5rem',overflow:'hidden',paddingBottom:".05rem"}}>
                    <p style={{color:'#442818',textAlign:'center',paddingTop:".1rem",fontSize:'.15rem'}}>切块</p>
                    <p style={{color:'#D5BFA7',textAlign:'center'}}>10天生命的意式杰拉朵冰淇淋</p>
                </div>
                <ul>
                    {
                        data.map((item, index) => {
                            return <li key={index}>
                                {/*<NavLink to={`/SortDetail?type=${item.type}&goodsId=${item.goodsId}`} data={data[index]}>*/}
                                    <a href="javascript:;" onClick={this.jump.bind(this,item)}>
                                        <div className="list-pro-content">
                                        <span  title="庞贝">
                                            <div className="label">
                                                <img
                                                    src="http://m.21cake.com/upload/images/1e22720bd656f7bac246159010c7e1f4.png"/>
                                            </div>
                                            <div className="list-pro-img" style={{height: '1.46rem'}}>
                                                <img src={`http://localhost:8080${item.picUrl}`} alt=""/>
                                            </div>
                                            <h3>
                                                {item.title}
                                                <span>{item.smallTitle}</span>
                                            </h3>
                                            <span className="price">¥{item.productArr[0].price}/个</span>

                                        </span >
                                            <span className="cart-add" name="cart-add_728" data-id="728" style={{color:'#442818'}}>
                                            <i className='iconfont icon-gouwuche' style={{color:'UserInfo',fontSize:'.2rem',fontWeight:'bold'}} onClick={this.add.bind(this,item)}> </i>
                                        </span>
                                        </div>
                                    </a>
                                {/*</NavLink>*/}
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>):null}
    }

    jump = (item) => {
        this.props.history.push(`/SortDetail?type=${item.type}&goodsId=${item.goodsId}`)
    };
    add = (item,e) => {
        let {add, goods, promote} = this.props;
        //通过redux传递过来的布尔值来控制是否是从其他也添加过来的相同商品
        let judge = goods.some(objItem => {
            //在这里获取是否有相同的商品
            return objItem.goodsId === item.goodsId
        });
        e.stopPropagation();
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

export default connect(state=>({...state.cart}),action)(ListThird)

