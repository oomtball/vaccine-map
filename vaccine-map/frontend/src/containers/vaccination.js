import React, { Component } from "react";
import Zmage from 'react-zmage'
import { NavLink, Switch, Route } from "react-router-dom";
import '../styles/item_search.css';
import {saveAs} from 'file-saver';
import axios from 'axios';
import {city2} from '../data/buildingAttribute/cityMenu2';
import PrintIcon from '@material-ui/icons/Print';


import {vaccine} from '../data/buildingAttribute/vaccineMenu';
import GridType1 from '../components/gridType1';
import GridType2 from '../components/gridType2';

import {BootstrapButton} from './BootstrapButton';
import OverflowScrolling from 'react-overflow-scrolling';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CustomizedTables2 from '../components/CustomizedTables2'

import {changhuaCounty} from '../data/allDistrict/changhuaCounty';
import {chiayiCity} from '../data/allDistrict/chiayiCity';
import {chiayiCounty} from '../data/allDistrict/chiayiCounty';
import {goldengateCounty} from '../data/allDistrict/goldengateCounty';
import {hsinchuCity} from '../data/allDistrict/hsinchuCity';
import {hsinchuCounty} from '../data/allDistrict/hsinchuCounty';
import {hualianCounty} from '../data/allDistrict/hualianCounty';
import {kaohsiungCity} from '../data/allDistrict/kaohsiungCity';
import {keelongCity} from '../data/allDistrict/keelongCity';
import {lianjiangCounty} from '../data/allDistrict/lianjiangCounty';
import {miaoliCounty} from '../data/allDistrict/miaoliCounty';
import {nantouCounty} from '../data/allDistrict/nantouCounty';
import {newtaipeiCity} from '../data/allDistrict/newtaipeiCity';
import {pingtungCounty} from '../data/allDistrict/pingtungCounty';
import {taichungCity} from '../data/allDistrict/taichungCity';
import {tainanCity} from '../data/allDistrict/tainanCity';
import {taipeiCity} from '../data/allDistrict/taipeiCity';
import {taitungCounty} from '../data/allDistrict/taitungCounty';
import {taoyuanCity} from '../data/allDistrict/taoyuanCity';
import {wuhuCounty} from '../data/allDistrict/wuhuCounty';
import {yilanCounty} from '../data/allDistrict/yilanCounty';
import {yunlinCounty} from '../data/allDistrict/yunlinCounty';
import {mrtLine} from'../data/MRT/mrtLine';



import pic2 from "./lastPage.png";

import GridType6 from "../components/gridType6"
import GridType7 from "../components/gridType7"


export default class Item_search extends Component {
    constructor(props) {
        super(props);
        if (props.location.aboutProps !== undefined){
            this.state = {city:"", district:"", road:"", vaccineType:"", user_name:"", user_id:"",
			tableBack:"", rightStatus:"resulting", dataFromdb1:[], patternFromDb:[]};
        }
        else{
            this.state = {city:"", district:"", road:"", vaccineType:"", user_name:"", user_id:"",
			tableBack:"", rightStatus:"searching", dataFromdb1:[], patternFromDb:[]};
        }
    }
    clear = () => {
        this.setState({ city:"", district:"", road:"", vaccineType:"", user_name:"", user_id:"",
		tableBack:"", rightStatus:"searching", dataFromdb1:[], patternFromDb:[]});
    }
    
    findObjectsForSearching = async () => {
        let caseSearched = {city:this.state.city, district:this.state.district, road:this.state.road, vaccineType:this.state.vaccineType,
        user_name:this.state.user_name, user_id:this.state.user_id};
        await fetch("http://localhost:3002/api/searchCase2", {
            method: 'POST',
            body: JSON.stringify(caseSearched),
            headers: {
                'Content-Type': 'application/json'
        }})
        .then(res => { return res.json() })
        // .then(originData => {
        //     if(originData.success) {
        //         if(originData.data) {
        //             console.log(originData.data)
        //             // originData.data.reverse();
        //             this.setState(() => ({ dataFromdb1: originData.data }));
        //         }
        //         else {
        //             this.setState(() => ({ dataFromdb1: [] }));
        //         }
        //     }
        //     else
        //         alert('Fail.');
        // })
        .catch((err) => console.error(err));
        let test_data = [{vaccination_id:"接種編號-01", user_name:"劉先生", vaccine_name:"A肝", vaccine_id:"A肝-01"}]
        this.setState({dataFromdb1 : test_data})
    }
    
    edit = key => e => {
        if(key === 'city')
            this.setState({ city: e, district: ""});
        else if (key === 'district')
            this.setState({ district: e });
        else if (key === 'road')
            this.setState({ road: e });
        else if (key === 'vaccineType')
            this.setState({ vaccineType: e });
        else if (key === 'user_name')
            this.setState({ user_name: e });
        else if (key === 'user_id')
            this.setState({ user_id: e });   
        else if (key === 'tableBack'){
            this.setState({ tableBack: e });
            this.setState({ rightStatus: "resulting"});
        }
    }
    
    render(){ 
        var district = [{}];
        
        if (this.state.city === "臺北市"){
            district = taipeiCity;
        }
        else if (this.state.city === "基隆市"){
            district = keelongCity;
        }
        else if (this.state.city === "新北市"){
            district = newtaipeiCity;
        }
        else if (this.state.city === "宜蘭縣"){
            district = yilanCounty;
        }
        else if (this.state.city === "新竹市"){
            district = hsinchuCity;
        }
        else if (this.state.city === "新竹縣"){
            district = hsinchuCounty;
        }
        else if (this.state.city === "桃園市"){
            district = taoyuanCity;
        }
        else if (this.state.city === "苗栗縣"){
            district = miaoliCounty;
        }
        else if (this.state.city === "臺中市"){
            district = taichungCity;
        }
        else if (this.state.city === "彰化縣"){
            district = changhuaCounty;
        }
        else if (this.state.city === "南投縣"){
            district = nantouCounty;
        }
        else if (this.state.city === "嘉義市"){
            district = chiayiCity;
        }
        else if (this.state.city === "嘉義縣"){
            district = chiayiCounty;
        }
        else if (this.state.city === "雲林縣"){
            district = yunlinCounty;
        }
        else if (this.state.city === "臺南市"){
            district = tainanCity;
        }
        else if (this.state.city === "高雄市"){
            district = kaohsiungCity;
        }
        else if (this.state.city === "澎湖縣"){
            district = wuhuCounty;
        }
        else if (this.state.city === "屏東縣"){
            district = pingtungCounty;
        }
        else if (this.state.city === "臺東縣"){
            district = taitungCounty;
        }
        else if (this.state.city === "花蓮縣"){
            district = hualianCounty;
        }
        else if (this.state.city === "金門縣"){
            district = goldengateCounty;
        }
        else if (this.state.city === "連江縣"){
            district = lianjiangCounty;
        }
   
    var searchingBlock = () => {
        return(<div><form style = {{display: 'inline', flexWrap: 'wrap', float: 'left', height:"775px",}} noValidate autoComplete="off">
        <br></br>
        <div className="item_search-cl">
            <GridType1
            id="city"
            label="城市區域"
            helperText=""
            choices={city2}
            value={this.state.city}
            changeFunc={this.edit("city")}
            width = {100}
            />
            <GridType1
            id="district"
            label="行政區"
            helperText=""
            choices={district}
            value={this.state.district}
            changeFunc={this.edit("district")}
            width = {100}
            />
            <GridType2
            id="road"
            label="路段"
            value={this.state.road}
            changeFunc={this.edit("road")}
            width= {217}
            />            
        </div> 
        <div className="item_search-cl">
            <GridType1
            id="vaccine_name"
            label="疫苗種類"
            helperText=""
            choices={vaccine}
            value={this.state.vaccineType}
            changeFunc={this.edit("vaccineType")}
            width={100}
            />
        </div>
		<div className="item_search-cl">
            <GridType2
            id="user_name"
            label="姓名"
            value={this.state.user_name}
            changeFunc={this.edit("user_name")}
            width= {150}
            />    
            <GridType2
            id="user_id"
            label="身分證"
            value={this.state.user_id}
            changeFunc={this.edit("user_id")}
            width= {200}
            />                 
        </div> 
        <div>
            <Grid item className="item_search-buttongroup">
                <ButtonGroup
                variant="contained"
                color = ""
                aria-label="full-width contained primary button group"
                size="large"
                style={{marginLeft:'30%',}}
                >
                    <BootstrapButton onClick={this.findObjectsForSearching}>搜尋</BootstrapButton>
                    <BootstrapButton onClick={this.clear}>重置</BootstrapButton>
                </ButtonGroup>
            </Grid>
        </div>

    </form>    </div>)
    }
    let temp = ""
    if (this.props.location.aboutProps !== undefined){
        temp = this.props.location.aboutProps.row
    }
    else{
        temp = this.state.tableBack
    }
    var listingBlock = () => {
        return (<div><OverflowScrolling className='overflow-scrolling'>
        <CustomizedTables2 getItemInfo = {this.edit("tableBack")} dataFromdb1 = {this.state.dataFromdb1}></CustomizedTables2>
    </OverflowScrolling></div>)
    }
    
    var resultBlock = null;
    if (this.state.rightStatus === "searching"){
        resultBlock = listingBlock();
    }
    
    return (
    <div className="item_search-root">
        <div className="item_search-bgcolor"></div>
        <div>
            {searchingBlock()}
        </div>
        <div className="mid-line"></div>
        <div>
			{listingBlock()}
            {/* <Switch>
                <Route exact path="/item_search" children={listingBlock()}></Route>
                <Route path="/item_search/:id" children={resultBlock}></Route>
            </Switch> */}
            {/* {resultBlock} */}
        </div>
        <div className="clear"></div>
    </div>
    );
    }
}