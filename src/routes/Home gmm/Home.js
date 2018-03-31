import React, {Component} from 'react';
import Banner from "../../component/Banner";
import './home.less'
import {Link, Route} from 'react-router-dom'
import {samll, homeDetail, textDetail} from '../../api/icon'
import Nav from "../../component/Nav";
import Header from "../../component/Header";
import {connect} from "react-redux"
import '../../component/nav.less';
import action from "../../store/action/cartTab";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {bannerData: [], homeData: [], homeList: []}
    }

    async componentWillMount() {
        let data = await samll();
        let homeData = await homeDetail();

        let  homeList=await textDetail();

        this.setState({bannerData: data, homeData, homeList});
    }

    render() {
        return (
            <div className='home'>
                <section className="navContainer">
                    <Header/>
                </section>
                <div>
                    <Banner data={this.state.bannerData} auto={2000}/>
                    <section className='buyer'>
                        <ul>
                            <li><i className='iconfont icon-xin'></i>首单赠小切块</li>
                            <li><i className='iconfont icon-xin'></i>满百包邮</li>
                            <li><i className='iconfont icon-xin'></i>千万用户选择</li>
                        </ul>
                    </section>
                    <section className='cake'>
                        <ul>
                            <li><Link to="/detail/cake"><img src={require('../../static/image/cakef.png')}
                                                             alt=""/><span>蛋糕</span></Link></li>
                            <li><Link to="/detail/coffee"><img src={require('../../static/image/cakes.png')}
                                                               alt=""/><span>咖啡</span></Link></li>
                            <li><Link to="/detail/cut"><img src={require('../../static/image/caker.png')}
                                                            alt=""/><span>小切块</span></Link></li>
                            <li><Link to="/detail/design"><img src={require('../../static/image/fly.png')}
                                                               alt=""/><span>礼物</span></Link></li>
                        </ul>
                    </section>
                    <section className='cakeDetail'>
                        <h3>
                            <span className='people'>人气</span>
                            <span className='more'><a href="javascript:;">更多></a></span>
                        </h3>
                        <ul>
                            {
                                this.state.homeData.map((item, index) => {
                                    return <li key={index} onClick={this.addGoods.bind(this, item)}>
                                        <a href="javascript:;">
                                            <img src={`http://localhost:8080${item.picUrl}`} alt=""/>
                                            <p className='textFirst'>{item.smallTitle}<span
                                                className='price'>{item.price}</span><span
                                                className='weight'>元/2.0磅</span>
                                            </p>
                                            <p className='textSecond'>{item.subtitleArr}
                                                <span onClick={this.cancel.bind(this, item)}><i className='iconfont icon-gouwuche1'> </i></span></p>
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
                        <a href="javascript:;">
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
                        <p style={{marginTop: '.1rem'}}>廿一客·文章</p>
                    </section>
                    <section className='home-detail'>
                        <ul>
                            {
                                this.state.homeList.map((item,index)=>{
                                    return  <a href="javascript:;" key={index}>
                                        <li><img src={`http://localhost:8080${item.picUrl}`} alt=""/></li>
                                        <p>{item.title}</p>
                                    </a>
                                })
                            }


                        </ul>

                    </section>
                </div>
                <section>
                    <Nav/>
                </section>
            </div>)
    }

    addGoods = (item) => {
        //单击商品的时候跳转到详情页
        this.props.history.push(`/SortDetail?type=hot&goodsId=${item.goodsId}`)
    };
    //执行方法的时候需要当前对象和事件对象来控制一些东西
    cancel = (item, e) => {
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
    };
}

export default connect(state => ({...state.cart}), action)(Home)