import React from 'react'
import './Mytitle.less'
import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
const alert = Modal.alert;
const showAlert = () => {
    const alertInstance = alert('21cake想要打开微信', 'Are you sure???', [
        { text: '取消'},
        { text: '打开'},
    ]);
    setTimeout(() => {
        // 可以调用close方法以在外部close
        console.log('auto close');
        alertInstance.close();
    }, 500000);
};

const App = () => (
    <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Button onClick={showAlert}>c</Button>
        <Button onClick={showAlert}>c</Button>
        <Button onClick={showAlert}>c</Button>
    </WingBlank>
);

export default class Mytitle extends React.Component {
    constructor() {
        super()
        this.state={
            flag:2
        }
    }

    render() {
        let {flag}=this.state;
        return <div className='subMytitle'>
            <div className='container'>
                {/*<div className='cl main'>️加载中...</div>*/}
                <div className='cl main' onClick={(e) => {
                    console.log(this.refs.flexWin);
                    flag%2===0?
                        (this.refs.flexWin.style.height = '2rem',
                            this.refs.flexWin.style.transition = 'all .8s ease',this.setState({flag:++flag})): (this.refs.flexWin.style.height = '0',
                            this.refs.flexWin.style.transition = 'all .8s ease',this.setState({
                            flag:++flag
                        }))
                }}>21Cake蛋糕官网_24小时蛋糕网上订购_5小时新鲜送达!
                </div>
                <div className='cl sub'>✖️</div>
                <div className='iconfont icon-share cl extra'></div>

                <div ref='flexWin' className='flexWin'>
                    <span className='share'>分享到</span>
                    <div>
                        {/*<App/>*/}
                        <img src="../../static/image/pengyouquan.png" alt=""/>
                        <img className='weixin' src="../../static/image/weixin.png" alt=""/>
                        <img src="../../static/image/weibo.png" alt=""/>

                    </div>
                </div>
            </div>
        </div>
    }
}







