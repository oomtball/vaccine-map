import React, { Component } from "react";
import '../styles/item_search.css';
import axios from 'axios';
import {city2} from '../data/buildingAttribute/cityMenu2';

import {vaccine} from '../data/buildingAttribute/vaccineMenu';

import GridType1 from '../components/gridType1';
import GridType2 from '../components/gridType2';

import {BootstrapButton} from './BootstrapButton';
import OverflowScrolling from 'react-overflow-scrolling';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CustomizedTables from '../components/CustomizedTables'

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

export default class Item_search extends Component {
    constructor(props) {
        super(props);
        if (props.location.aboutProps !== undefined){
            this.state = {city:"", district:"", road:"", vaccineType:""
            , tableBack:"", rightStatus:"resulting", dataFromdb1:[], patternFromDb:[]};
        }
        else{
            this.state = {city:"", district:"", road:"", vaccineType:"", 
            tableBack:"", rightStatus:"searching", dataFromdb1:[],
            patternFromDb:[]};
        }
    }
    clear = () => {
        this.setState({ city:"", district:"", road:"", vaccineType:"",
        tableBack:"", rightStatus:"searching", dataFromdb1:[], patternFromDb:[]});
    }

    // findObjectForSearching = () => {
    //     let test_data = [{city:"test_city", district:"test_district", road:"test_road", vaccineType:"A", num:"100"}]
    //     this.setState({dataFromdb1 : test_data})
    // }
    findObjectsForSearching = async () => {
        let caseSearched = {city:this.state.city, district:this.state.district, road:this.state.road, vaccine_name:this.state.vaccineType};
        console.log(caseSearched);
        await fetch("http://localhost:3002/api/searchCase1", {
            method: 'POST',
            body: JSON.stringify(caseSearched),
            headers: {
                'Content-Type': 'application/json'
        }})
        .then(res => { return res.json() })
        .then(originData => {
            if(originData.success) {
                if(originData.data) {
                    console.log(originData.data);
                    // originData.data.reverse();
                    this.setState(() => ({ dataFromdb1: originData.data }));
                }
                else {
                    this.setState(() => ({ dataFromdb1: [] }));
                }
            }
            else
                alert('Fail.');
        })
        .catch((err) => console.error(err));
        // let test_data = [{city:"?????????", district:"?????????", vaccineType:"A???", num:"100"}]
        // this.setState({dataFromdb1 : test_data})
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
        else if (key === 'tableBack'){
            this.setState({ tableBack: e });
            this.setState({ rightStatus: "resulting"});
        }
    }
    
    render(){ 
        var district = [{}];
        
        if (this.state.city === "?????????"){
            district = taipeiCity;
        }
        else if (this.state.city === "?????????"){
            district = keelongCity;
        }
        else if (this.state.city === "?????????"){
            district = newtaipeiCity;
        }
        else if (this.state.city === "?????????"){
            district = yilanCounty;
        }
        else if (this.state.city === "?????????"){
            district = hsinchuCity;
        }
        else if (this.state.city === "?????????"){
            district = hsinchuCounty;
        }
        else if (this.state.city === "?????????"){
            district = taoyuanCity;
        }
        else if (this.state.city === "?????????"){
            district = miaoliCounty;
        }
        else if (this.state.city === "?????????"){
            district = taichungCity;
        }
        else if (this.state.city === "?????????"){
            district = changhuaCounty;
        }
        else if (this.state.city === "?????????"){
            district = nantouCounty;
        }
        else if (this.state.city === "?????????"){
            district = chiayiCity;
        }
        else if (this.state.city === "?????????"){
            district = chiayiCounty;
        }
        else if (this.state.city === "?????????"){
            district = yunlinCounty;
        }
        else if (this.state.city === "?????????"){
            district = tainanCity;
        }
        else if (this.state.city === "?????????"){
            district = kaohsiungCity;
        }
        else if (this.state.city === "?????????"){
            district = wuhuCounty;
        }
        else if (this.state.city === "?????????"){
            district = pingtungCounty;
        }
        else if (this.state.city === "?????????"){
            district = taitungCounty;
        }
        else if (this.state.city === "?????????"){
            district = hualianCounty;
        }
        else if (this.state.city === "?????????"){
            district = goldengateCounty;
        }
        else if (this.state.city === "?????????"){
            district = lianjiangCounty;
        }

        var searchingBlock = () => {
        return(
        <div>
            <form style = {{display: 'inline', flexWrap: 'wrap', float: 'left', height:"775px",}} noValidate autoComplete="off">
            <br></br>
            <div className="item_search-cl">
                <GridType1
                id="city"
                label="????????????"
                helperText=""
                choices={city2}
                value={this.state.city}
                changeFunc={this.edit("city")}
                width = {100}
                />
                <GridType1
                id="district"
                label="?????????"
                helperText=""
                choices={district}
                value={this.state.district}
                changeFunc={this.edit("district")}
                width = {100}
                />
                <GridType2
                id="road"
                label="??????"
                value={this.state.road}
                changeFunc={this.edit("road")}
                width= {217}
                />            
            </div> 
            <div className="item_search-cl">
                <GridType1
                id="vaccineType"
                label="????????????"
                helperText=""
                choices={vaccine}
                value={this.state.vaccineType}
                changeFunc={this.edit("vaccineType")}
                width={100}
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
                        <BootstrapButton onClick={this.findObjectsForSearching}>??????</BootstrapButton>
                        <BootstrapButton onClick={this.clear}>??????</BootstrapButton>
                    </ButtonGroup>
                </Grid>
            </div>
        </form>    
    </div>
    )
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
        <CustomizedTables getItemInfo = {this.edit("tableBack")} dataFromdb1 = {this.state.dataFromdb1}></CustomizedTables>
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