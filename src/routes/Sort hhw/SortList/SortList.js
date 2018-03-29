import React from "react"
import {NavLink} from 'react-router-dom';
import "./SortList.less"

export default class SortList extends React.Component {
    constructor() {
        super()
    }

    render() {
        let {data} = this.props;
        return <div className="list-pro-box">
            <div className="list-box">
                <ul>
                    {
                        data.map((item, index) => {
                            return <li key={index}>
                                <NavLink to="/SortDetail" data={data[index]}>
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
                                            <span className="price">¥{item.productArr[0].price}/个</span>

                                        </a>
                                        <a href="javascript:;" className="cart-add" name="cart-add_728" data-id="728">
                                            <img src="http://static.21cake.com//themes/wap/img/list-cart.png"/>
                                        </a>
                                    </div>
                                </NavLink>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    }
}

