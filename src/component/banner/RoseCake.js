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
        let {match: {params}} = this.props,
            customId = params['id'];

        let {RoseData}=this.state;
        console.log(RoseData);
        return (<div>{RoseData.length?(<div>
            {
                RoseData[customId].imgArr.map((item,index)=>{
                    return <img src={`http://localhost:8080${item}`} style={{width:'100%'}} alt="" key={index}/>
                })
            }
        </div>):null}
        <section>
            <Header/>
            <Nav/>
        </section>

        </div>)

    }
}
export default withRouter(RoseCake)