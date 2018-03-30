import React from "react"
import SortList from "./SortList/SortList"
import {querySort} from "../../api/sort"
import "./sort.less"
import{Link,NavLink,Switch,Route} from 'react-router-dom'
import Header from "../../component/Header";
import ListFirst from "./SortList/ListFirst";
import ListSecond from "./SortList/ListSecond";
import ListThird from "./SortList/ListThird";
import ListFour from "./SortList/ListFouth";
import Nav from "../../component/Nav";
import '../../component/nav.less'
export default class Sort extends React.Component {
    constructor() {
        super();
        this.state = {
            step: 0,
            cakeData: [],
            cutData:[],
            coffeeData:[],
            designData:[],
            ary: [{zh: "蛋糕", en: "cake"},
                {zh: "咖啡", en: "coffee"},
                {zh: "小切片", en: "cut"},
                {zh: "设计", en: "design"}]
        }
    }

    async componentDidMount() {
        let data = await querySort('cake');
        this.setState({cakeData:data});
         data = await querySort('cut');
        this.setState({cutData:data});
       data = await querySort('coffee');
        this.setState({coffeeData:data});
     data = await querySort('design');
        this.setState({designData:data});
    }

    render() {
 let {history}=this.props;
        let {cakeData,cutData,coffeeData,designData} = this.state;

        return <div className="sort">
            <section className="navContainer">
                <Header/>
                <i className='iconfont icon-fanhui' onClick={()=>{history.goBack(-1)}}>

                </i>
            </section>
            {/* 商品的分类*/}
            <div className="products-list-nav">
                <ul className="list-nav">
                    <li ><NavLink to={{pathname:"/detail/cake",params:{cakeData}}}>蛋糕</NavLink></li>
                    <li><NavLink  to={{pathname:"/detail/cut",params:{cutData}}}>小切块</NavLink></li>
                    <li><NavLink to={{pathname:"/detail/coffee",params:{coffeeData}}}>咖啡</NavLink></li>
                    <li><NavLink to={{pathname:"/detail/design",params:{designData}}}>设计师礼物</NavLink></li>
                  {/*  {
                        ary.map((item, index) => {
                            return <li id="list" key={index} className={step === index ? "active" : ""}
                                       onClick={async (e) => {
                                           let data = await querySort(item.en);
                                           this.setState({step: index, data});
                                       }}>
                                <a>{item.zh}</a>
                            </li>
                        })
                    }*/}
                </ul>
            </div>

           {/*  分类的具体数据
            <SortList data={data}/>
            <SortList data={data}/>
            <SortList data={data}/>*/}

            <Switch>
                <Route path='/detail/cake' component={ListFirst}></Route>
                <Route path='/detail/cut' component={ListSecond}></Route>
                <Route path='/detail/coffee' component={ListThird}></Route>
                <Route path='/detail/design' component={ListFour}></Route>
            </Switch>
            <section>
               <Nav/>
            </section>
        </div>
    }
}