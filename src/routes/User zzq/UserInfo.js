import React,{Component} from "react"
import {connect} from "react-redux"
import propTypes from "prop-types"
import "./userinfo.less"

class UserInfo extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    static defaultProps = {

    };

    render(){
     return (
         <div className="userInfo">
             <div className="user-scroll">
                 <div className="user-context">
                     <div className="user-back">
                     </div>
                     <a className="user-info">
                         <div className="user-head">
                         </div>
                         注册/登陆
                     </a>
                 </div>
                 <div className="discount">
                     <a href="javascript:;"> <span>0张</span> 优惠券</a>
                     <a href="javascript:;"> <span>￥0.00</span> 余额</a>
                 </div>
                 <div className="userInfo-list">
                     <a href="javascript:;" className="iconfont icon-wode">我的订单
                         <i className="iconfont icon-jiantou"></i></a>
                     <a href="javascript:;" className="iconfont icon-gouwucheicon">地址管理
                         <i className="iconfont icon-jiantou"></i></a>
                     <a href="javascript:;" className="iconfont icon-duihuakuang">我的优惠卷
                         <i className="iconfont icon-jiantou" ></i></a>
                     <a href="javascript:;" className="iconfont icon-dangao">果实币充值
                         <i className="iconfont icon-jiantou"></i></a>
                     <a href="javascript:;" className="iconfont icon-xin">我的21客会
                         <i className="iconfont icon-jiantou"></i></a>
                 </div>
                 <div className="user-message">
                     <a href="javascript:;">
                         用户反馈
                         <i className="iconfont icon-jiantou"> </i>
                     </a>
                     <a href="javascript:;">
                         版本跟新
                         <span>2.8.32
                          <i className="iconfont icon-jiantou"> </i>
                      </span>
                     </a>
                     <a href="javascript:;">
                         服务条款
                         <i className="iconfont icon-jiantou"> </i>
                     </a>
                     <a href="javascript:;">
                         关于我们
                         <i className="iconfont icon-jiantou"> </i>
                     </a>
                     <a href="javascript:;" className="user-phone">
                         客服电话 400 650 2121  <i className="iconfont icon-dianhua"> </i>
                     </a>
                 </div>
             </div>
         </div>
     )
    }
}

export default connect()(UserInfo)