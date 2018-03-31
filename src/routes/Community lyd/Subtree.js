import React from 'react'
import './Subtree.less'

// const IMG_DATA = [
//     {
//         id: 1,
//         img: require("../../static/image/comment-1.png")
//     }, {
//         id: 2,
//         img: require("../../static/image/comment-2.png")
//     }, {
//         id: 3,
//         img: require("../../static/image/comment-3.png")
//     },{
//         id: 4,
//         img: require("../../static/image/comment-4.png")
//     }, {
//         id: 5,
//         img: require("../../static/image/comment-5.png")
//     }, {
//         id: 6,
//         img: require("../../static/image/comment-6.png")
//     },{
//         id: 7,
//         img: require("../../static/image/comment-7.png")
//     }
// ];
export default class Subtree extends React.Component {
    constructor() {
        super()
        this.state={
            flag:2
        }
    }

    render() {
        let {flag}=this.state
        return <div className='subDetail'>
            <div className='container'>
                <div className='cl main' onClick={(e) => {
                    console.log(this.refs.flexWin);
            flag%2===0?
                (this.refs.flexWin.style.height = '2rem',
                    this.refs.flexWin.style.transition = 'all .8s ease',this.setState({flag:++flag})): (this.refs.flexWin.style.height = '0',
                    this.refs.flexWin.style.transition = 'all .8s ease',this.setState({
                flag:++flag
                }))
                }}>树洞专区
                </div>
                <div className='cl sub'>✖️</div>
                <div className='iconfont icon-share cl extra'></div>
                <div ref='flexWin' className='flexWin'>
                </div>
                <div className='connent'>
                    <img className='labelImg' src={require('../../static/image/label.png')} alt=""/>
                    <img className='no1Img' src={require('../../static/image/No1.png')} alt=""/>
                   {/* {IMG_DATA.map((item,index)=>{
                        return <img className="imgData" key={index} src={item.img} alt=""/>
                    })}*/}
                </div>
            </div>
        </div>
    }
}