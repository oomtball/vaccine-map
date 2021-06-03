import React, { Component } from "react";
import GridType3 from '../components/gridType3';
import GridType4 from '../components/gridType4';

import '../styles/agent_manage.css'

import {BootstrapButton} from './BootstrapButton';

import Grid from '@material-ui/core/Grid';

  
const allstatus=[
    {
        value:"",
        label:"",
    },
    {
        value:"在職",
        label:"在職",
    },
    {
        value:"離職",
        label:"離職",
    },
    {
        value:"無薪假",
        label:"無薪假",
    },
]


const allbranch=[
    {
        value:"",
        label:"",
    },
    {
        value:"中山",
        label:"中山",
    },
    {
        value:"站前",
        label:"站前",
    },
    {
        value:"廠仲",
        label:"廠仲",
    },
    {
        value:"其他",
        label:"其他",
    },
]
const allposition=[
    {
        value:"",
        label:"",
    },
    {
        value:"店長",
        label:"店長",
    },
    {
        value:"組長",
        label:"組長",
    },
    {
        value:"業務員",
        label:"業務員",
    },
    {
        value:"其他",
        label:"其他",
    },
]


export default class AddAgent extends Component{

    constructor(props) {
        super(props);
        this.state = {agentNumber:props.location.number, agentName:props.location.name, agentAcc:props.location.account, agentPw:props.location.password,
        agentBranch:props.location.shop, agentPhonenumber:props.location.phoneNum, agentPosition:props.location.title,
        inService:props.location.inService};
    }
    clear = () => {
        this.setState({agentName:""});
        this.setState({agentAcc:""})
        this.setState({agentPw:""})
        this.setState({agentBranch:""});
        this.setState({agentPhonenumber:""})
        this.setState({agentPosittion:""})
        this.setState({inService:""})
    
    }
    edit = key => e => {
        if(key === 'agentName')
            this.setState({ agentName: e });
        else if(key === 'agentAcc')
            this.setState({agentAcc: e});
        else if(key === 'agentPw')
            this.setState({agentPw: e});
        else if(key === 'agentBranch'){
            this.setState({agentBranch: e});
            console.log(e);}
        else if(key === 'agentPhonenumber')
            this.setState({agentPhonenumber: e});
        else if(key === 'agentPosition')
            this.setState({agentPosition: e});
        else if(key === 'inService')
            this.setState({inService: e});    
    }
    update = async () => {
        let data = { account: this.state.agentAcc, update: {number:this.state.agentNumber, name:this.state.agentName, password:this.state.agentPw,
        shop:this.state.agentBranch, phoneNum:this.state.agentPhonenumber, title:this.state.agentPosition,
        inService:this.state.inService} };
        await fetch('http://localhost:3002/api/updateUser', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => { return res.json() })
        .then(res => {
            if(res.success){
				alert("update successfully!")
			}
            else {
                alert('Fail.');
            }
        })
        .catch((err) => {
            console.error(err);
            alert('Fail.');
        });
        // this.props.history.push('/profile');
    }
    render(){
        return (
        <div className='agent_manage-root'>
            <Grid container>
                <Grid item xs={2}>
                    <div className='agent_manage-bgcolor'></div> 
                </Grid>
                <Grid item xs={8}>
                    <div className="agentProfile-input">
                        <GridType3
                        label="姓名"
                        value={this.state.agentName}
                        changeFunc={this.edit("agentName")}
                        ifRequired ={true}
                        width = {100}     
                        /> 
                        <GridType3
                        label="帳號"
                        value={this.state.agentAcc}
                        changeFunc={this.edit("agentAcc")}
                        ifRequired ={true}
                        width = {150}     
                        />
                        <GridType3
                        label="密碼"
                        value={this.state.agentPw}
                        changeFunc={this.edit("agentPw")}
                        ifRequired ={true}
                        width = {175}     
                        /> 
                        <GridType4
                        label="店別"
                        value={this.state.agentBranch}
                        changeFunc={this.edit("agentBranch")}
                    
                        choices = {allbranch}
                        width = {75}     
                        />
                        <GridType3
                        label="手機號碼"
                        value={this.state.agentPhonenumber}
                        changeFunc={this.edit("agentPhonenumber")}
                        ifRequired ={true}
                        width = {125}     
                        /> 
                        <GridType4
                        label="職稱"
                        value={this.state.agentPosition}
                        changeFunc={this.edit("agentPosition")}
                    
                        choices = {allposition}
                        width = {100}     
                        />
                        <GridType4
                        label="狀態"
                        value={this.state.inService}
                        changeFunc={this.edit("inService")}
                    
                        choices = {allstatus}
                        width = {100}     
                        />
                    </div>    
                    <div >
                        <BootstrapButton style={{width:"15%",marginLeft:"42.5%", marginTop:"5%"}} onClick={this.update}>確認並儲存</BootstrapButton>
                    </div>
                
                
                </Grid>
                <Grid item xs={2}>
                     <div className='agent_manage-bgcolor'></div>
                </Grid>
            </Grid>
        </div>
        );
    } 
}