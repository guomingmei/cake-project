import React,{Component} from "react"
import {connect} from "react-redux"
import propTypes from "prop-types"
import {Link} from "react-router-dom"
import "./user.less"

class User extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    static defaultProps = {

    };
    render(){
      return <div className="user">
          <div>
              <div className="user-context">
                  <div className="user-back">
                  </div>
                  <Link to="/register" className="user-info">
                      <div className="user-head">
                      </div>
                      注册/登陆
                  </Link>
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
    }
}

export default connect()(User)