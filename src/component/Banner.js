import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import './banner.less'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom'
 class Banner extends Component{
    constructor(props){
        super(props);
        this.state={step:props.initSlide,
        }
    }
    static defaultProps = {
        data: [],
        style: {},
        className: 'carousel',
        initSlide: 0,
        auto: 3500,
        isFocus: true
    };
    static propTypes = {
        data: PropTypes.array,
        style: PropTypes.object,
        className: PropTypes.string,
        initSlide: PropTypes.number,
        auto: PropTypes.number,
        isFocus: PropTypes.bool
    };

    render() {
        console.log(this.props);
        let {history:{push}}=this.props;
        let {data, className, initSlide, auto, isFocus} = this.props;
        if (data.length === 0) {
            return null;
        }
        //=>没有数据的时候我们不渲染REACT-SWIPE,有数据在渲染

        return (<div className="bannerBox">

        <ReactSwipe className={className}
                    swipeOptions={{
                        startSlide: initSlide,
                        auto,
                        callback: index => {
                            this.setState({
                                step: index//=>记录当前展示SLIDE索引
                            });
                        }
                    }}>
            {data.map((item, index) => {
                return <div key={index}>
                    <div onClick={()=>{

                        push(`/roseCake/${index}`);
                    } }>

                        <img src={`http://localhost:8080${item.picUrl}`} alt=""/></div>
                </div>;
            })}
        </ReactSwipe>

        {isFocus ? <ul className='focus'>
            {data.map((item, index) => {
                return <li key={index}
                           className={index === this.state.step ? 'active' : ''}>
                </li>;
            })}
        </ul> : null}
    </div>);
    }
}
export default withRouter(Banner)