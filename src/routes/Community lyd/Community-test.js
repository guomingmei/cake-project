import React from 'react'
import './community.less'
import Mycom from '../../component/Mycom'
import Treeo from './Treeo'
import {Tabs} from 'antd-mobile';
import {Link} from 'react-router-dom'
import Mytitle from "./Mytitle";
const tabs=[
    { title: '21客志' },
    { title: '树洞' },
];
export default class Community extends React.Component {
    constructor() {
        super()
    }
    render() {
        return <div className='community'>
            <h3>社区</h3>
            <Tabs tabs={tabs}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                    <Mycom/>
                    {/*<Link to='/mytitle'><Mycom/></Link>*/}
                </div>


                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width:'100%' , height:'100%'}}>
                    <Treeo/>
                </div>
            </Tabs>
        </div>
    }
}

