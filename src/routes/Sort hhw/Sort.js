import React from "react"
import SortList from "./SortList/SortList"
import {querySort} from "../../api/sort"
import "./sort.less"
import{Link} from 'react-router-dom'
import Header from "../../component/Header";

export default class Sort extends React.Component {
    constructor() {
        super();
        this.state = {
            step: 0,
            data: [],
            ary: [{zh: "蛋糕", en: "cake"},
                {zh: "咖啡", en: "coffee"},
                {zh: "小切片", en: "cut"},
                {zh: "设计", en: "design"}]
        }
    }

    async componentDidMount() {
        let {ary} = this.state;
        let data = await querySort(ary[0].en);
        this.setState({data});
    }

    render() {

        let {step, data, ary} = this.state;
        return <div className="sort">
            <section className="navContainer">
                <Header/>
            </section>
            {/* 商品的分类*/}
            <div className="products-list-nav">
                <ul className="list-nav">
                    {
                        ary.map((item, index) => {
                            return <li id="list" key={index} className={step === index ? "active" : ""}
                                       onClick={async (e) => {
                                           let data = await querySort(item.en);
                                           this.setState({step: index, data});
                                       }}>
                                <Link to={`/detail/${index}`}>{item.zh}</Link>
                            </li>
                        })
                    }
                </ul>
            </div>

            {/* 分类的具体数据*/}
            <SortList data={data}/>
            <SortList data={data}/>
            <SortList data={data}/>
        </div>
    }
}