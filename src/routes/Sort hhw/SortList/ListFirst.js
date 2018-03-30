import React from "react"
import {NavLink} from 'react-router-dom';
import {querySort} from "../../../api/sort";
import "./SortList.less"

export default class ListFirst extends React.Component {
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
                <div className='ListNav'style={{width:'110%',height:'.5rem',backgroundColor:'floralwhite',overflow:'hidden',paddingBottom:".05rem"}}>
                    <p style={{color:'#442818',textAlign:'center',paddingTop:".1rem",fontSize:'.15rem'}}>蛋糕</p>
                    <p style={{color:'#D5BFA7',textAlign:'center'}}>新鲜乳脂奶油蛋糕</p>
                </div>
                <ul>
                    {
                        data.map((item, index) => {
                            return <li key={index}>
                                <NavLink to={`/SortDetail?type=${item.type}&goodsId=${item.goodsId}`} data={data[index]}>
                                    <div className="list-pro-content">
                                        <a href="" title="庞贝">
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
                                            <span className="price">¥{item.price}/个</span>

                                        </a>
                                        <a href="javascript:;" className="cart-add" name="cart-add_728" data-id="728" style={{color:'#442818'}}>
                                        <i className='iconfont icon-gouwuche' style={{color:'UserInfo',fontSize:'.2rem',fontWeight:'bold'}}></i>
                                        </a>
                                    </div>
                                </NavLink>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>):null}
    }
}

