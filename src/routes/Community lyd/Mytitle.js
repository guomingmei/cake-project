import React from 'react'
import './Mytitle.less'
import {Button, Modal, WhiteSpace, WingBlank} from 'antd-mobile';

const alert = Modal.alert;
const showAlert = () => {
    const alertInstance = alert('21cake想要打开微信', 'Are you sure???', [
        {text: '取消'},
        {text: '打开'},
    ]);
    setTimeout(() => {
        // 可以调用close方法以在外部close
        console.log('auto close');
        alertInstance.close();
    }, 500000);
};

const App = () => (
    <WingBlank size="lg">
        <WhiteSpace size="lg"/>
        <Button onClick={showAlert}>c</Button>
        <Button onClick={showAlert}>c</Button>
        <Button onClick={showAlert}>c</Button>
    </WingBlank>
);

export default class Mytitle extends React.Component {
    constructor() {
        super()
        this.state = {
            flag: 2
        }
    }

    render() {
        let {flag} = this.state;
        return <div className='subMytitle'>
            <div className='container-title'>
                {/*<div className='cl main'>️加载中...</div>*/}
                <div className='cl main'>21Cake蛋糕官网_24小时蛋糕网上订购_5小时新鲜送达!
                </div>
                <div className='cl sub'>✖️</div>
                <div className='iconfont icon-share cl extra'></div>

                <div className='imgList'>
                    <img className='weixin1'
                         src="http://static.21cake.com/public/images/32/bd/c9/d45b1eae00eafb0714e2c29079c2dae4.jpg?1519888424#h"
                         alt=""/>
                    <img className='weixin2'
                         src="http://static.21cake.com/public/images/20/1a/f7/60111abf40321869d301fa7f6ce1dfd1.jpg?1519888446#h"
                         alt=""/>
                    <img className='weixin3'
                         src="http://static.21cake.com/public/images/5b/03/8a/bcae5eb43610d4fa3f7a53bcc3f88813.jpg?1519888454#h"
                         alt=""/>
                    <img className='weixin4'
                         src="http://static.21cake.com/public/images/bb/da/49/4f40f4ba06a8cb44deeda11a7f9e1698.jpg?1519888594#h"
                         alt=""/>

                </div>
            </div>
        </div>
    }
}







