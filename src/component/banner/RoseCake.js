import React,{Component} from 'react';
import ReactDOM,{render}from 'react-dom';
import {samll} from "../../api/icon";
import {withRouter} from 'react-router-dom'
import Nav from "../Nav";
import Header from "../Header";

class RoseCake extends Component{
    constructor(props){
        super(props);
        this.state={RoseData:[]}
    }
    async componentWillMount(){
      let RoseData= await samll();
      this.setState({RoseData});

        console.log(RoseData);
    }
    render(){
        console.log(this.props);
        let {match: {params},history} = this.props,
            customId = params['id'];

        let {RoseData}=this.state;
        console.log(RoseData);
        return (<div>{RoseData.length?(<div>
            {
                RoseData[customId].imgArr.map((item,index)=>{
                    return <img src={`http://localhost:8080${item}`} style={{width:'100%',paddingTop: '.3rem',paddingBottom:'.5rem'}} alt="" key={index}/>
                })
            }
        </div>):null}
        <section className='rose' style={{position:"relative"}}>
            <Header/>
            <Nav/>
            <i className='iconfont icon-fanhui' style={{position:'fixed',top:'0.09rem',left:'.2rem',zIndex: '999'}} onClick={()=>{history.goBack(-1)}}>

            </i>
        </section>

        </div>)

    }
}
export default withRouter(RoseCake)