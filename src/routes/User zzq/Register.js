import React, {Component} from "react"
import {connect} from "react-redux"
import propTypes from "prop-types"
import {postRegister} from "../../api/icon";
import "./register.less"
import Header from "../../component/Header";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {check: true, second: 60, verification: null}
    }

    static defaultProps = {};

    render() {
        console.log(this.props);
        let {history:{replace}}=this.props;
        let {check, second} = this.state;
        return <div className="register">
            <section className="navContainer">
                <Header/>
                <i className='iconfont icon-fanhui' onClick={()=>{history.goBack(-1)}}>

                </i>
            </section>
            <div className="register-box">
                <input type="number" className="register-phone" placeholder="手机号码" ref="phone"/>
                <input type="text" className="register-pass" placeholder="短信验证码(发送时，不能输入)" ref="code"
                       onChange={this.verification}/>
                <a href="javascript:;" ref="landInfo" className="landInfo"
                   onClick={this.code}>{check ? "发送验证码" : `${second}秒`}</a>
                <a href="javascript:;" ref="land" onClick={this.fall}>登陆</a>
                <div className="register-ment">
                <p>使用未注册的手机号登陆时，将自动注册21cake账号，切认为您已同意 <span>《21cake用户协议》</span></p>
                </div>
                <p className="register-other">其他登陆方式</p>
                <div className="register-weChat">
                </div>
            </div>
        </div>
    }

    //获取验证码
    code = async () => {
        //获得手机号码和验证码 的input
        let {code, phone, landInfo, land} = this.refs;
        let {check} = this.state;
        //正则匹配手机号
        let reg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
        //发送请求 当传过来的值为undefined时候不进行判断
        let phoneCode = check && reg.test(phone.value) ? await postRegister(phone.value, code.value) : null;
        console.log(phoneCode);
        //判断是否输入手机号||60秒之后就可以再次请求验证
        if (check && reg.test(phone.value) && phoneCode.verificat) {
            //修改样式
            landInfo.style.backgroundColor = "#ccc";
            //设置一些判断值
            this.setState({verification: phoneCode.verificat, check: false});
            //执行定时器 记时
            setTimeout(() => {
                code.value = phoneCode.verificat;
                this.verification()
            }, 5000);
            this.timer = setInterval(() => {
                let {second} = this.state;
                //修改时间的值
                second--;
                this.setState({second});
                //判断当时间为1时停止定时器 并且修改
                if (second === 1) {
                    clearInterval(this.timer);
                    this.setState({check: true,second:60});
                    landInfo.style.backgroundColor = "#866220";
                    land.style.backgroundColor = "#ccc"
                }
            }, 1000)
        }
    };
    //短信验证
    verification = async () => {
        let {code, land} = this.refs;
        let {verification} = this.state;
        if (verification === code.value) {
            land.style.backgroundColor = "#866220";
        } else {
            land.style.backgroundColor = "#ccc";
        }
    };
    //登陆判断
    fall = () => {
        let {code} = this.refs;
        let {check, verification} = this.state;
        //判断验证码是否在规定时间内输入完成
        if (!check && verification === code.value) {
            console.log("成功");
            this.props.history.replace('/userInfo')
        } else {
            console.log("失败");
        }
    }
}

export default connect()(Register)