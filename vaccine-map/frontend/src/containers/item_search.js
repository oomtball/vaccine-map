import React, { Component } from "react";
import Zmage from 'react-zmage'
import { NavLink, Switch, Route } from "react-router-dom";
import '../styles/item_search.css';
import {saveAs} from 'file-saver';
import axios from 'axios';
import {city2} from '../data/buildingAttribute/cityMenu2';
import PrintIcon from '@material-ui/icons/Print';


import {house} from '../data/buildingAttribute/houseMenu';
import {sale_stat} from '../data/sale-statMenu';

import {salesperson} from '../data/salespersonMenu';
import {park} from '../data/buildingAttribute/parkMenu';

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
import {mrtLine} from'../data/MRT/mrtLine';



import pic2 from "./lastPage.png";

import GridType6 from "../components/gridType6"
import GridType7 from "../components/gridType7"


export default class Item_search extends Component {
    constructor(props) {
        super(props);
        if (props.location.aboutProps !== undefined){
            this.state = {city:"", district:"", road:"", houseType:"", mrtStation:"",
            saleStatus:"", salesperson:"", number:"", totalPrice:"", totalPrice2:"",
            pricePerPing:"", pricePerPing2:"", ping:"", ping2:"", landHolding:"", landHolding2:"",
            houseAge:"", houseAge2:"", floor:"", floor2:"", pattern:"", pattern2:"",
            park:"", tableBack:"", rightStatus:"resulting", dataFromdb1:[], patternFromDb:[]};
        }
        else{
            this.state = {city:"", district:"", road:"", houseType:"", mrtStation:"",
            saleStatus:"", salesperson:"", number:"", totalPrice:"", totalPrice2:"",
            pricePerPing:"", pricePerPing2:"", ping:"", ping2:"", landHolding:"", landHolding2:"",
            houseAge:"", houseAge2:"", floor:"", floor2:"", pattern:"", pattern2:"",
            park:"", tableBack:"", rightStatus:"searching", dataFromdb1:[], patternFromDb:[]};
        }
    }
    clear = () => {
        this.setState({ city:"", district:"", road:"", houseType:"", mrtStation:"",
            saleStatus:"", salesperson:"", number:"", totalPrice:"", totalPrice2:"",
            pricePerPing:"", pricePerPing2:"", ping:"", ping2:"", landHolding:"", landHolding2:"",
            houseAge:"", houseAge2:"", floor:"", floor2:"", pattern:"", pattern2:"",
            park:"", tableBack:"", rightStatus:"searching", dataFromdb1:[], patternFromDb:[]});
    }
    
    findObjectsForSearching = async () => {
        let objectSearched = {city:this.state.city, district:this.state.district, road:this.state.road, houseType:this.state.houseType
        ,mrtStation:this.state.mrtStation, saleStatus:this.state.saleStatus, salesperson:this.state.salesperson, number:this.state.number,
        totalPrice:this.state.totalPrice, totalPrice2:this.state.totalPrice2, pricePerPing:this.state.pricePerPing,
        pricePerPing2:this.state.pricePerPing2, ping:this.state.ping, ping2:this.state.ping2, landHolding:this.state.landHolding,
        landHolding2:this.state.landHolding2, houseAge:this.state.houseAge, houseAge2:this.state.houseAge2, floor:this.state.floor,
        floor2:this.state.floor2, pattern:this.state.pattern, pattern2:this.state.pattern2,
        park:this.state.park};
        console.log(this.state.district);
        await fetch("http://localhost:3002/api/findSomeObjects", {
            method: 'POST',
            body: JSON.stringify(objectSearched),
            headers: {
                'Content-Type': 'application/json'
        }})
        .then(res => { return res.json() })
        .then(originData => {
            if(originData.success) {
                if(originData.data) {
                    originData.data.reverse();
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
    }
    
    edit = key => e => {
        if(key === 'city')
            this.setState({ city: e, district: ""});
        else if (key === 'district')
            this.setState({ district: e });
        else if (key === 'road')
            this.setState({ road: e });
        else if (key === 'houseType')
            this.setState({ houseType: e });
        else if (key === 'mrtStation')
            this.setState({ mrtStation: e });
        else if (key === 'saleStatus')
            this.setState({ saleStatus: e });
        else if (key === 'salesperson')
            this.setState({ salesperson: e });
        else if (key === 'number')
            this.setState({ number: e });
        else if (key === 'totalPrice')
            this.setState({ totalPrice: e });
        else if (key === 'totalPrice2')
            this.setState({ totalPrice2: e });
        else if (key === 'pricePerPing')
            this.setState({ pricePerPing: e });
        else if (key === 'pricePerPing2')
            this.setState({ pricePerPing2: e });
        else if (key === 'ping')
            this.setState({ ping: e });
        else if (key === 'ping2')
            this.setState({ ping2: e });
        else if (key === 'landHolding')
            this.setState({ landHolding: e });
        else if (key === 'landHolding2')
            this.setState({ landHolding2: e });
        else if (key === 'houseAge')
            this.setState({ houseAge: e });
        else if (key === 'houseAge2')
            this.setState({ houseAge2: e });
        else if (key === 'floor')
            this.setState({ floor: e });
        else if (key === 'floor2')
            this.setState({ floor2: e });
        else if (key === 'pattern')
            this.setState({ pattern: e });
        else if (key === 'pattern2')
            this.setState({ pattern2: e });
        else if (key === 'park')
            this.setState({ park: e });
        else if (key === 'tableBack'){
            this.setState({ tableBack: e });
            this.setState({ rightStatus: "resulting"});
        }
    }
    
    Viewing_PDF = () =>{
        // window.open('http://localhost:3000/PDFModel');
        axios.post('http://localhost:3002/api/create-pdf', this.state.tableBack)
        .then(() => axios.get('http://localhost:3002/api/fetch-pdf', { responseType:'blob'}))
        .then((res) => {
            const pdfBlob = new Blob([res.data], {type:'application/pdf'});
        
            saveAs(pdfBlob, `${this.state.tableBack.innerNum}.pdf`);
        }) 
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
            id="houseType"
            label="房屋種類"
            helperText=""
            choices={house}
            value={this.state.houseType}
            changeFunc={this.edit("houseType")}
            width={100}
            />
            <GridType1
            id="mrtStation"
            label="捷運站"
            helperText=""
            choices={mrtLine}
            value={this.state.mrtStation}
            changeFunc={this.edit("mrtStation")}
            width={100}
            />
            <GridType1
            id="saleStatus"
            label="出售現狀"
            helperText=""
            choices={sale_stat}
            value={this.state.saleStatus}
            changeFunc={this.edit("saleStatus")}
            width={100}
            />
            <GridType1
            id="salesperson"
            label="經紀人"
            helperText=""
            choices={salesperson}
            value={this.state.salesperson}
            changeFunc={this.edit("salesperson")}
            width={100}
            />
        </div>
        <div className="item_search-cl">
            <GridType2
            id="number"
            label="內部編號"
            value={this.state.number}
            changeFunc={this.edit("number")}
            width={217}
            />

    
            <GridType2
            id="totalPrice"
            label="銷售總價"
            value={this.state.totalPrice}
            changeFunc={this.edit("totalPrice")}
            width={80}
            />
            <nobr className="support-font">萬~</nobr>
            <GridType2
            id="totalPrice2"
            label=""
            value={this.state.totalPrice2}
            changeFunc={this.edit("totalPrice2")}
            width={80}
            />
            <nobr className="support-font">萬</nobr>
        </div>   
        <div className="item_search-cl2">   
            <GridType2
            id="pricePerPing"
            label="每坪單價"
            value={this.state.pricePerPing}
            changeFunc={this.edit("pricePerPing")}
            width={80}
            />
            <nobr className="support-font">萬~</nobr>
            <GridType2
            id="pricePerPing2"
            label=""
            value={this.state.pricePerPing2}
            changeFunc={this.edit("pricePerPing2")}
            width={80}
            />
            <nobr className="support-font">萬</nobr>
            <GridType2
            id="ping"
            label="建物坪數"
            value={this.state.ping}
            changeFunc={this.edit("ping")}
            width={80}
            />
            <nobr className="support-font">坪~</nobr>
            <GridType2
            id="ping2"
            label=""
            value={this.state.ping2}
            changeFunc={this.edit("ping2")}
            width={80}
            />
            <nobr className="support-font">坪</nobr>
        </div>    
        <div className="item_search-cl2">    
            {/* <GridType2
            id="landHolding"
            label="土地持份"
            value={this.state.landHolding}
            changeFunc={this.edit("landHolding")}
            width={80}
            /> */}
            {/* <nobr className="support-font">坪~</nobr> */}
            {/* <GridType2
            id="landHolding2"
            label=""
            value={this.state.landHolding2}
            changeFunc={this.edit("landHolding2")}
            width={80}
            />
            <nobr className="support-font">坪</nobr> */}
            <GridType2
            id="houseAge"
            label="屋齡"
            value={this.state.houseAge}
            changeFunc={this.edit("houseAge")}
            width={80}
            />
            <nobr className="support-font">年~</nobr>
            <GridType2
            id="houseAge2"
            label=""
            value={this.state.houseAge2}
            changeFunc={this.edit("houseAge2")}
            width={80}
            />
            <nobr className="support-font">年</nobr>
        </div>
        <div className="item_search-cl2">    
        
            <GridType2
            id="floor"
            label="樓層"
            value={this.state.floor}
            changeFunc={this.edit("floor")}
            width={80}
            />
            <nobr className="support-font">層~</nobr>
            <GridType2
            id="floor2"
            label=""
            value={this.state.floor2}
            changeFunc={this.edit("floor2")}
            width={80}
            />
            <nobr className="support-font">層</nobr>
            <GridType2
            id="pattern"
            label="格局"
            value={this.state.pattern}
            changeFunc={this.edit("pattern")}
            width={80}
            />
            <nobr className="support-font">房~</nobr>
            <GridType2
            id="pattern2"
            label=""
            value={this.state.pattern2}
            changeFunc={this.edit("pattern2")}
            width={80}
            />
            <nobr className="support-font">房</nobr>
        </div>
        <div className="item_search-cl2">
           
     
            <GridType1
            id="park"
            label="車位"
            helperText=""
            choices={park}
            value={this.state.park}
            changeFunc={this.edit("park")}
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
        <CustomizedTables getItemInfo = {this.edit("tableBack")} dataFromdb1 = {this.state.dataFromdb1}></CustomizedTables>
    </OverflowScrolling></div>)
    }
    let address = () => {
		var villageCheck = () => {if(temp.village !== ""){return (temp.village)}}
		var neighborCheck = () => {if(temp.neighbor !== ""){return (temp.neighbor+"鄰")}}
		var sectionCheck = () => {if(temp.section !== ""){return (temp.section+"段")}}
		var laneCheck = () => {if(temp.lane !== ""){return (temp.lane+"巷")}}
		var alleyCheck = () => {if(temp.alley !== ""){return (temp.alley+"弄")}}
		var numberCheck = () => {if(temp.number1 !== ""){
            if (temp.number2 !== ""){return(temp.number1+"號之"+temp.number2)}
            else{return(temp.number1+"號")}
		}}
		var floorCheck = () => {if(temp.floor1 !== ""){
            if (temp.floor2 !== ""){return(temp.floor1+"樓之"+temp.floor2)}
            else{return(temp.floor1+"樓")}
		}}
		if (temp.city !== "" && temp.district !== "" && temp.road !== "" && temp.number1 !== ""){
			return(<t>{temp.city}{temp.district}{villageCheck()}&nbsp;{neighborCheck()}&nbsp;
			{temp.road}&nbsp;{sectionCheck()}{laneCheck()}{alleyCheck()}&nbsp;{numberCheck()}&nbsp;{floorCheck()}</t>)
		}
    }
    let patternSummary = () => {
		var roomCheck = () => {if (temp.room1 !== ""){
            if (temp.room2 !== ""){return(temp.room1+"+"+temp.room2+"房")}
            else{return(temp.room1+"房");};
		}};
		var livingroomCheck = () => {if (temp.livingroom !== ""){return(temp.livingroom+"廳");}};
		var bathroomCheck = () => {if (temp.bathroom !== ""){return(temp.bathroom+"衛");}};
	 	return(<t>{roomCheck()}{livingroomCheck()}{bathroomCheck()}</t>);
    }
    let houseAge = () => {
        var constructDate = new Date(temp.constructFinishDate)
        var now = new Date()
        var year1 = constructDate.getFullYear()
        var year2 = now.getFullYear()
        if (constructDate.getMonth() <= now.getMonth()){
            return(year2 - year1)
        }
        else{
            return(year2 - year1 - 1)
        }

    }
    var moreInfoBlock = () => {
        let picSet = [{
            src: `http://localhost:3002/api/getPattern/pattern/${temp.contractNum}`,
            className: "morePictures",
        }]
        {
            if (this.state.tableBack.house_pics_names !== undefined){
                for (let i = 0; i < this.state.tableBack.house_pics_names.length; i++){
                    picSet.push({
                        src: `http://localhost:3002/api/getHousePic/house/${temp.contractNum}/${temp.house_pics_names[i]}`,
                        className: "morePictures",
                    })
                }
            }
        }
        return (<div><OverflowScrolling className='overflow-scrolling'>
            {/* `http://localhost:3002/api/getPattern/render/${this.state.tableBack.contractNum}` */}
            {/* <Zmage src={`http://localhost:3002/api/getPattern/pattern/${this.state.tableBack.contractNum}`} className={"moreInfoPic"} backdrop="gray" set={[
            {
                src: `http://localhost:3002/api/getPattern/pattern/${this.state.tableBack.contractNum}`,
                className: "morePictures",
            },
            {
                src: `http://localhost:3002/api/getHousePic/house/${this.state.tableBack.contractNum}/p05c99dh.jpg`,
                className: "morePictures",
            },
            {
                src: pic3,
                className: "morePictures",
            },
            ]}/> */}
            <Zmage src={`http://localhost:3002/api/getPattern/pattern/${temp.contractNum}`} className={"moreInfoPic"} backdrop="gray" set={picSet}/>
            <div style={{marginLeft:"12px", marginTop:"20px", fontSize:"20px"}}>案件名稱 : {temp.innerNum + temp.caseName}</div>
            <div style={{marginLeft:"12px", marginTop:"12px", fontSize:"20px"}}>所屬地區 : {temp.city + temp.district}</div>
            <div style={{marginLeft:"12px", marginTop:"12px", fontSize:"20px"}}>案件地址 : {address()}</div>
            <div style={{marginLeft:"12px", marginTop:"12px", fontSize:"20px"}}>房屋類別 : {temp.buildingType}</div>
            <div style={{marginLeft:"12px", marginTop:"12px", fontSize:"20px"}}>房屋格局 : {patternSummary()}</div>
            <div style={{marginLeft:"12px", marginTop:"12px", fontSize:"20px"}}>樓層 : {temp.floor1 + temp.floor2}</div>
            <div style={{marginLeft:"12px", marginTop:"12px", fontSize:"20px"}}>售價 : {temp.contractPrice}</div>
            <div style={{marginLeft:"12px", marginTop:"12px", fontSize:"20px"}}>每坪單價 :{temp.pricePerPing}</div>
            <div className="clear"></div>
            <div style={{float: "left", marginLeft:"15px", marginTop:"12px", fontSize:"20px"}}>座向 : {temp.facing}</div>
            <div style={{marginLeft:"369px", marginTop:"12px", fontSize:"20px"}}>停車場 : {temp.parkingSpace}</div>
            <div className="clear"></div>
            <div style={{float: "left", marginLeft:"15px", marginTop:"12px", fontSize:"20px"}}>權狀面積 : {temp.ownershipArea}</div>
            <div style={{marginLeft:"369px", marginTop:"12px", fontSize:"20px"}}>主建物 : {temp.mainBuilding}</div>
            <div className="clear"></div>
            <div style={{float: "left", marginLeft:"15px", marginTop:"12px", fontSize:"20px"}}>附屬建物 : {temp.subsidiaryBuilding}</div>
            <div style={{marginLeft:"369px", marginTop:"12px", fontSize:"20px"}}>公設 : {temp.areaOfPublic} </div>
            <div className="clear"></div>
            <div style={{float: "left", marginLeft:"15px", marginTop:"12px", fontSize:"20px"}}>公設比 : {temp.ratioOfPublic}</div>
            <div style={{marginLeft:"369px", marginTop:"12px", fontSize:"20px"}}>車位 : {temp.quantityOfParkingSpace}</div>
            <div className="clear"></div>
            <div style={{float: "left", marginLeft:"15px", marginTop:"12px", fontSize:"20px"}}>車位編號 : {temp.numberOfParkingSpace}</div>
            <div style={{marginLeft:"369px", marginTop:"12px", fontSize:"20px"}}>車位價格 : {temp.priceOfParkingSpace}</div>
            <div className="clear"></div>
            <div style={{float: "left", marginLeft:"15px", marginTop:"12px", fontSize:"20px"}}>土地面積 : {temp.landArea}</div>
            <div style={{marginLeft:"369px", marginTop:"12px", fontSize:"20px"}}>土地持份 : {temp.landHoldings}</div>
            <div className="clear"></div>
            {/* <div style={{float: "left", marginLeft:"15px", marginTop:"12px", fontSize:"20px"}}>每坪單價 :</div>
            <div style={{marginLeft:"369px", marginTop:"12px", fontSize:"20px"}}>自備款 :</div>
            <div className="clear"></div> */}
            <div style={{float: "left", marginLeft:"15px", marginTop:"12px", fontSize:"20px"}}>屋齡 : {houseAge()}</div>
            <div style={{marginLeft:"369px", marginTop:"12px", fontSize:"20px"}}>管理費 : {temp.amountOfManageFee}元 / {temp.feeFrequency}</div>
            <div className="clear"></div>
            <div className = "special-mention">
                <GridType7
                label="備註"
                value={temp.remark}
                width = {"90%"}     
                />
                
                
                <GridType6
                label="特點說明"
                value={temp.feature}
                
                width = {"90%"}     
                />
            </div>
            <NavLink to="/item_search">
            <img src={pic2} style={{width:"50px", marginTop:"15px", marginLeft:"15px"}} 
            onClick={() => {this.setState({rightStatus: "searching"})}} alt=""></img>
            </NavLink>
            {/* button for print  */}
            <PrintIcon style={{fontSize:50,}} onClick={this.Viewing_PDF}></PrintIcon>
            

            <div style={{marginLeft:"15px", marginTop:"12px", width:"95%", height:"5%"}}></div>
            </OverflowScrolling></div>)
    }
    var resultBlock = null;
    if (this.state.rightStatus === "searching"){
        console.log("hi")
        resultBlock = listingBlock();
    }
    else if (this.state.rightStatus === "resulting"){
        console.log("hi2")
        resultBlock = moreInfoBlock();
    }
    
    return (
    <div className="item_search-root">
        <div className="item_search-bgcolor"></div>
        <div>
            {searchingBlock()}
        </div>
        <div className="mid-line"></div>
        <div>
            <Switch>
                {/* <Route path={this.props.match.url} children={listingBlock()}></Route> */}
                <Route exact path="/item_search" children={listingBlock()}></Route>
                <Route path="/item_search/:id" children={resultBlock}></Route>
            </Switch>
            {/* {resultBlock} */}
        </div>
        <div className="clear"></div>
    </div>
    );
    }
}