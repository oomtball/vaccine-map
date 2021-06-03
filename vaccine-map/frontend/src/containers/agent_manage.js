import React, { Component } from "react";
import GridType2 from '../components/gridType2';
import GridType1 from '../components/gridType1';
import '../styles/agent_manage.css'
import { NavLink, Switch, Route } from "react-router-dom";
import {BootstrapButton} from './BootstrapButton';
import AgentTables from '../components/AgentTables'
import OverflowScrolling from 'react-overflow-scrolling';
import Grid from '@material-ui/core/Grid';
import GridType3 from "../components/gridType3";
import GridType4 from "../components/gridType4";
 

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











export default class Agent_manage extends Component{

    constructor(props) {
        super(props);
        this.state = {searchKeyName:"", searchKeyBranch:"", searchKeyPosition:"", dataFromUserDb:[], tableBack:"",
        toAddName:"", toAddAccount:"", toAddPassword:"", toAddBranch:"", toAddCellNumber:"", toAddPosition:"", render_status:"" 
    }; 
    }
    clear = () => {
        this.setState({ searchKeyName:""});
        this.setState({searchKeyBranch:""})
        this.setState({searchKeyPosition:""})
        this.setState({dataFromUserDb:[]})
    }
    edit = key => e => {
        if(key === 'searchKeyName')
            this.setState({ searchKeyName: e });
        else if(key === 'searchKeyBranch')
            this.setState({searchKeyBranch: e});
        else if(key === 'searchKeyPosition')
            this.setState({searchKeyPosition: e});
        else if (key === 'tableBack'){
            this.setState({ tableBack: e.name });
        }
        else if(key === 'toAddName')
            this.setState({toAddName: e});
        else if(key === 'toAddAccount')
            this.setState({toAddAccount:e});
        else if(key === 'toAddPassword')
            this.setState({toAddPassword:e});
        else if(key === 'toAddBranch')
            this.setState({toAddBranch: e});
        else if(key === 'toAddCellNumber')
            this.setState({toAddCellNumber: e});
        else if(key === 'toAddPosition') 
            this.setState({toAddPosition: e});
    }

    findAgents = async () => {
        
        let agentsSearched = {name:this.state.searchKeyName, shop:this.state.searchKeyBranch, title:this.state.searchKeyPosition};
        await fetch("http://localhost:3002/api/findSomeAgents", {
            method: 'POST',
            body: JSON.stringify(agentsSearched),
            headers: {
                'Content-Type': 'application/json'
        }})
        .then(res => { return res.json() })
        .then(originData => {
            if(originData.success) {
                if(originData.data) {
                    originData.data.reverse();
                    this.setState(() => ({ dataFromUserDb: originData.data }));
                }
                else {
                    this.setState(() => ({ dataFromUserDb: [] }));
                }
            }
            else
                alert('Fail.');
            this.setState({render_status:"listing"});
        })
        .catch((err) => console.error(err));
    }

    toAddAgent = () =>{
        this.setState({render_status:"adding"});
    }
    render(){
        if (localStorage.title === "業務員"){
            alert("權限不足！")
            this.props.history.push("/home")
        }
        const addOneAgent = async () => {
            if (this.state.toAddName === "" || this.state.toAddAccount === "" || this.state.toAddPassword === "" || 
            this.state.toAddBranch === "" || this.state.toAddCellNumber === "" || this.state.toAddPosition === ""){
                console.log(this.state.toAddName)
                console.log(this.state.toAddAccount)
                console.log(this.state.toAddPassword)
                console.log(this.state.toAddBranch)
                console.log(this.state.toAddCellNumber)
                console.log(this.state.toAddPosition)
                alert("請填寫所有必填項目！!")
                return null;	
            }
            let data = {name:this.state.toAddName, account:this.state.toAddAccount, password:this.state.toAddPassword,
            shop:this.state.toAddBranch, phoneNum:this.state.toAddCellNumber, title:this.state.toAddPosition, inService:"在職"
            }
            await fetch('http://localhost:3002/api/addOneAgent', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => { return res.json() })
            .then(res => {
                if(res.success){
                    alert("完成新增文字項目！");
                }
                else {
                    console.log(res)
                    alert("有地方填錯了！");
                }
            })
            .catch((err) => {
                console.error(err);
                alert("上傳失敗，請檢查所有項目是否填寫正確！");
            });
        }
        var listingblock = () =>{
            return(
                <div className ="listblock">   
                        <OverflowScrolling className = "agent_manage-scrollbar">
                            <AgentTables dataFromUserDb = {this.state.dataFromUserDb}>          
                            </AgentTables>
                        </OverflowScrolling> 
                    </div>
            )
        }

        var addingblock = () =>{
            return(
                <div>
                     
                     <div className="agent_manage-adding">
                        <GridType3
                        label="姓名"
                        value={this.state.toAddName}
                        changeFunc={this.edit("toAddName")}
                        ifRequired ={false}
                        width = {100}     
                        /> 
                        <GridType3
                        label="帳號"
                        value={this.state.toAddAccount}
                        changeFunc={this.edit("toAddAccount")}
                        ifRequired ={false}
                        width = {150}     
                        />
                        <GridType3
                        label="密碼"
                        value={this.state.toAddPassword}
                        changeFunc={this.edit("toAddPassword")}
                        ifRequired ={false}
                        width = {175}     
                        /> 
                        <GridType4
                        label="店別"
                        value={this.state.toAddBranch}
                        changeFunc={this.edit("toAddBranch")}
                    
                        choices = {allbranch}
                        width = {75}     
                        />
                        <GridType3
                        label="手機號碼"
                        value={this.state.toAddCellNumber}
                        changeFunc={this.edit("toAddCellNumber")}
                        ifRequired ={true}
                        width = {125}     
                        /> 
                        <GridType4
                        label="職稱"
                        value={this.state.toAddPosition}
                        changeFunc={this.edit("toAddPosition")}
                    
                        choices = {allposition}
                        width = {100}     
                        />
                    </div>    
                    <div >
                        <BootstrapButton style={{width:"15%",marginLeft:"42.5%", marginTop:"5%"}} onClick={addOneAgent}>確認並新增</BootstrapButton>
                    </div>
                </div>
                
            
            
            )
        }
        
        var renderblock;
        
        if(this.state.render_status ==="listing")
            renderblock = listingblock();
        else if(this.state.render_status === "adding")
            renderblock = addingblock()
        
        return (
        <div className='agent_manage-root'>
            <Grid container>
                <Grid item xs={2}>
                    <div className='agent_manage-bgcolor'></div> 
                </Grid>
                <Grid item xs={8}>
                    <div className='agent_manage-input'>
                        <GridType2
                        id="searchkeyName"
                        label="經紀人"
                        value={this.state.searchKeyName}
                        changeFunc={this.edit("searchKeyName")}
                        width= {"25%"}
                        /> 
                        <GridType1
                        id="searchKeyBranch"
                        label="店別"
                        value={this.state.searchKeyBranch}
                        changeFunc={this.edit("searchKeyBranch")}
                        width= {"25%"}
                        choices={allbranch}
                        />
                         <GridType1
                        id="searchKeyPosition"
                        label="職稱"
                        value={this.state.searchKeyPosition}
                        changeFunc={this.edit("searchKeyPosition")}
                        width= {"25%"}
                        choices={allposition}
                        />
                    
                    
                    
                    </div>
            
                    <div className='searchbutton'>
                        <BootstrapButton style={{width:"10%",marginLeft:"",marginTop:"3%" ,float:"left",}} onClick={this.findAgents}>搜尋</BootstrapButton>
                         
                        <BootstrapButton style={{width:"10%", marginLeft:"8%", marginTop:"3%" ,float:"left",}} onClick={this.toAddAgent}>新增</BootstrapButton>
                        <BootstrapButton style={{width:"35%", marginLeft:"8%", marginTop:"3%" ,float:"left",}} onClick={this.toAddAgent}>清理資料庫</BootstrapButton>
                    </div>
                    <div style={{clear:"both"}}></div>
                    <div>
                        {renderblock}
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