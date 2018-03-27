import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import './banner.less'

import PropTypes from 'prop-types';
export default class Banner extends Component{
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
        let {data, className, initSlide, auto, isFocus} = this.props;

        //=>没有数据的时候我们不渲染REACT-SWIPE,有数据在渲染
        if (data.length === 0) {
            return null;
        }

        return <div className="bannerBox">
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
                        <img src={`http://localhost:8080${item.picUrl}`} alt=""/>
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
        </div>;
    }
}
