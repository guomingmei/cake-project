import React from "react"
import SortList from "./SortList/SortList"
import {querySort} from "../../api/sort"
import "./sort.less"

export default class Sort extends React.Component {
    constructor() {
        super();
        this.state = {
            step:0,
            data:[],
            ary:[{zh:"蛋糕",en:"cake"},
                {zh:"小切片",en:"cut"},
                {zh:"咖啡",en:"coffee"},
                {zh:"设计",en:"design"}]
        }
    }

    async componentDidMount(){
        let {ary} = this.state;
        let data = await querySort(ary[0].en);
        this.setState({data});
    }

    render() {
        let {step,data,ary} = this.state;
        return <div className="sort">
            {/* 商品的分类*/}
            <div className="products-list-nav">
                <ul className="list-nav" >
                    {
                        ary.map((item,index)=>{
                            return <li id="list" key={index} className={step === index ? "active" : ""} onClick={async (e)=>{
                                let data = await querySort(item.en);
                                this.setState({step:index,data});
                            }
                            }>
                                <a>{item.zh}</a>
                            </li>
                        })
                    }
                </ul>
            </div>
            {/* 分类的具体数据*/}
            <SortList data={data}/>
        </div>
    }
}