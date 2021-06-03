import React from "react";

import {city2} from '../data/buildingAttribute/cityMenu2';
import '../styles/item_search.css'
import {sale_stat} from '../data/sale-statMenu';
import {salesperson} from '../data/salespersonMenu';
import GridType1 from '../components/gridType1';
import GridType2 from '../components/gridType2';
import {BootstrapButton} from './BootstrapButton';
import OverflowScrolling from 'react-overflow-scrolling';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import CustomizedTables from '../components/itemManageTables';
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











export default class Item_manage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {city:null, district:null, road:null, houseType:null, mrtStation:null,
        saleStatus:null, salesperson:null, inner_number:null, contract_number:null, totalPrice:null, totalPrice2:null,
        pricePerPing:null, pricePerPing2:null, ping:null, ping2:null, landHolding:null, landHolding2:null,
        houseAge:null, houseAge2:null, floor:null, floor2:null, pattern:null, pattern2:null,
        order:null, order2:null, park:null, tableBack:null, rightStatus:"searching", dataFromdb1:[]};
        this.containerEl = document.createElement('div');
        this.externalWindow = null;
    }
    clear = () => {
        this.setState({ city:null, district:null, road:null, houseType:null, mrtStation:null,
            saleStatus:null, salesperson:null, inner_number:null, contract_number:null, tableBack:null, dataFromdb1:[],
             rightStatus:"searching" });
    }
    edit = key => e => {
        if(key === 'city')
            this.setState({ city: e });
        else if (key === 'district')
            this.setState({ district: e });
        else if (key === 'road')
            this.setState({ road: e });
        else if (key === 'saleStatus')
            this.setState({ saleStatus: e });
        else if (key === 'salesperson')
            this.setState({ salesperson: e });
        else if (key === 'inner_number')
            this.setState({ inner_number: e });
        else if (key === 'contract_number')
            this.setState({ contract_number: e });
        else if (key === 'tableBack'){
            this.setState({ tableBack: e.name });
            this.setState({ rightStatus: "resulting"});
        }
        
    }
    toModify2 = key =>e =>{
        if (key === 'newWindow'){
            this.toModify();
        }
    }
    findObjectsForManaging = async () => {
        let objectSearched = {city:this.state.city, district:this.state.district, road:this.state.road, houseType:this.state.houseType
        ,mrtStation:this.state.mrtStation, saleStatus:this.state.saleStatus, salesperson:this.state.salesperson, 
        inner_number:this.state.inner_number, contract_number:this.state.contract_number};
        await fetch("http://localhost:3002/api/manageSomeObjects", {
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
    
    
    
    render(){ 
    if (localStorage.title === "業務員"){
        alert("權限不足！")
        this.props.history.push("/home")
    }
    var district1 =[{}]
    if (this.state.city === "臺北市"){
        district1 = taipeiCity;
    }
    else if (this.state.city === "基隆市"){
        district1 = keelongCity;
    }
    else if (this.state.city === "新北市"){
        district1 = newtaipeiCity;
    }
    else if (this.state.city === "宜蘭縣"){
        district1 = yilanCounty;
    }
    else if (this.state.city === "新竹市"){
        district1 = hsinchuCity;
    }
    else if (this.state.city === "新竹縣"){
        district1 = hsinchuCounty;
    }
    else if (this.state.city === "桃園市"){
        district1 = taoyuanCity;
    }
    else if (this.state.city === "苗栗縣"){
        district1 = miaoliCounty;
    }
    else if (this.state.city === "臺中市"){
        district1 = taichungCity;
    }
    else if (this.state.city === "彰化縣"){
        district1 = changhuaCounty;
    }
    else if (this.state.city === "南投縣"){
        district1 = nantouCounty;
    }
    else if (this.state.city === "嘉義市"){
        district1 = chiayiCity;
    }
    else if (this.state.city === "嘉義縣"){
        district1 = chiayiCounty;
    }
    else if (this.state.city === "雲林縣"){
        district1 = yunlinCounty;
    }
    else if (this.state.city === "臺南市"){
        district1 = tainanCity;
    }
    else if (this.state.city === "高雄市"){
        district1 = kaohsiungCity;
    }
    else if (this.state.city === "澎湖縣"){
        district1 = wuhuCounty;
    }
    else if (this.state.city === "屏東縣"){
        district1 = pingtungCounty;
    }
    else if (this.state.city === "臺東縣"){
        district1 = taitungCounty;
    }
    else if (this.state.city === "花蓮縣"){
        district1 = hualianCounty;
    }
    else if (this.state.city === "金門縣"){
        district1 = goldengateCounty;
    }
    else if (this.state.city === "連江縣"){
        district1 = lianjiangCounty;
    }

    
    var searchingBlock = () => {    
        return (
            <div>
                <form style = {{display: 'inline', flexWrap: 'wrap', float: 'left'}} noValidate autoComplete="off">
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
                        choices={district1}
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
                        id="inner_number"
                        label="內部編號"
                        value={this.state.number}
                        changeFunc={this.edit("number")}
                        width={217}
                        />
                        <GridType2
                        id="number"
                        label="合約編號"
                        value={this.state.number}
                        changeFunc={this.edit("number")}
                        width={217}
                    />
                
                    </div>
               
                    <div>
                        <Grid item className="item_manage-buttongroup">
                            <ButtonGroup
                            variant="contained"
                            color = ""
                            aria-label="full-width contained primary button group"
                            size="large"
                            style={{marginLeft:'22%', marginTop:'22%',}}
                            >
                                <BootstrapButton onClick={this.findObjectsForManaging}>搜尋</BootstrapButton>
                                <BootstrapButton>重置</BootstrapButton>
                                <BootstrapButton>新增</BootstrapButton>
                            </ButtonGroup>
                        </Grid>
                
                
                    </div>
        
                </form>    
            
            </div>)
        }
    var listingBlock = () => {
        return (
        <div>
            <OverflowScrolling className='overflow-scrolling'>
                <CustomizedTables getItemInfo = {this.toModify2("newWindow")} dataFromdb1 = {this.state.dataFromdb1}></CustomizedTables>
            </OverflowScrolling>
        </div>
        )
    }  
    
    var resultBlock = null;
    if (this.state.rightStatus === "searching")
        resultBlock = listingBlock();
    // else if (this.state.rightStatus === "resulting")
    //     resultBlock = moreInfoBlock();
    return (
    <div className="item_search-root">
        <div className="item_search-bgcolor"></div>
        <div>
            {searchingBlock()}
        </div>
        <div className="mid-line"></div>
        
        <div>
            {resultBlock}
        </div>
        
        <div className="clear"></div>
    </div>
    );
    }
}