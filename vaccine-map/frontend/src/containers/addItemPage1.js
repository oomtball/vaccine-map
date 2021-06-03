import React, { Component } from "react";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import GridType3 from "../components/gridType3";
import GridType4 from "../components/gridType4";
import {buildingType1} from '../data/buildingAttribute/buildingType1';
import {buildingType2_1} from '../data/buildingAttribute/buildingType2_1';
import {buildingType2_3} from '../data/buildingAttribute/buildingType2_3';
import {buildingType3_1} from '../data/buildingAttribute/buildingType3_1';
import {buildingType3_2} from '../data/buildingAttribute/buildingType3_2';
import {usage} from '../data/usage';
import {city2} from '../data/buildingAttribute/cityMenu2';
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
import {sectionNum} from '../data/addressAttribute/sectionNum';
import {sale_stat} from '../data/sale-statMenu';
import DateFnsUtils from '@date-io/date-fns';

import '../styles/new_item.css'


export default class AddItemPage1 extends Component {
    render() {
        var buildingType2 = [{}];
        var buildingType3 = [{}];
        var district = [{}];

        if (this.props.buildingType1 === "成屋" || this.props.buildingType1 === "預售"){
            buildingType2 = buildingType2_1;
        }
        else if (this.props.buildingType1 === "土地"){
            buildingType2 = buildingType2_3;
        }
        if (this.props.buildingType2 === "住宅"){
            buildingType3 = buildingType3_1;
        }
        else if (this.props.buildingType2 === "商用"){
            buildingType3 = buildingType3_2;
        }

        //

        if (this.props.city === "臺北市"){
            district = taipeiCity;
        }
        else if (this.props.city === "基隆市"){
            district = keelongCity;
        }
        else if (this.props.city === "新北市"){
            district = newtaipeiCity;
        }
        else if (this.props.city === "宜蘭縣"){
            district = yilanCounty;
        }
        else if (this.props.city === "新竹市"){
            district = hsinchuCity;
        }
        else if (this.props.city === "新竹縣"){
            district = hsinchuCounty;
        }
        else if (this.props.city === "桃園市"){
            district = taoyuanCity;
        }
        else if (this.props.city === "苗栗縣"){
            district = miaoliCounty;
        }
        else if (this.props.city === "臺中市"){
            district = taichungCity;
        }
        else if (this.props.city === "彰化縣"){
            district = changhuaCounty;
        }
        else if (this.props.city === "南投縣"){
            district = nantouCounty;
        }
        else if (this.props.city === "嘉義市"){
            district = chiayiCity;
        }
        else if (this.props.city === "嘉義縣"){
            district = chiayiCounty;
        }
        else if (this.props.city === "雲林縣"){
            district = yunlinCounty;
        }
        else if (this.props.city === "臺南市"){
            district = tainanCity;
        }
        else if (this.props.city === "高雄市"){
            district = kaohsiungCity;
        }
        else if (this.props.city === "澎湖縣"){
            district = wuhuCounty;
        }
        else if (this.props.city === "屏東縣"){
            district = pingtungCounty;
        }
        else if (this.props.city === "臺東縣"){
            district = taitungCounty;
        }
        else if (this.props.city === "花蓮縣"){
            district = hualianCounty;
        }
        else if (this.props.city === "金門縣"){
            district = goldengateCounty;
        }
        else if (this.props.city === "連江縣"){
            district = lianjiangCounty;
        }

        return (
        <div >
            <div className="new_item-basic">
                <GridType3
                label="物件案名"
                value={this.props.caseName}
                changeFunc={this.props.changeFunc("caseName")}
                ifRequired ={true}
                width = {200}     
                />
                 <GridType3
                label="內部編號"
                value={this.props.innerNum}
                changeFunc={this.props.changeFunc("innerNum")}
                width = {110}     
                ifRequired = {true}
                />
                
                <GridType3
                label="委託契約編號"
                value={this.props.contractNum}
                changeFunc={this.props.changeFunc("contractNum")}
                width = {110}     
                ifRequired = {true}
                />
                <GridType3
                label="委託售價"
                value={this.props.contractPrice}
                changeFunc={this.props.changeFunc("contractPrice")}
                width = {110}     
                ifRequired = {true}
                />
                <nobr className="support-font">萬</nobr>
                <GridType3
                label="降價售價"
                value={this.props.sellingPrice}
                changeFunc={this.props.changeFunc("sellingPrice")}
                width = {110}     
                ifRequired = {false}
                />
                <nobr className="support-font">萬</nobr>
                
                
                
                <GridType4
                id="物件型態"
                label="物件型態"
                helperText=""
                choices={buildingType1}
                value={this.props.buildingType}
                changeFunc={this.props.changeFunc("buildingType")}
                width = {110}
                ifRequired = {true}
                />
               
               
            </div>
            <div  className='new_item-dateselection'> 
                <GridType4
                id="使用用途"
                label="使用用途"
                helperText=""
                choices={usage}
                value={this.props.usage}
                changeFunc={this.props.changeFunc("usage")}
                width = {125}
                ifRequired = {true}
                />        
                
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        margin="normal"
                        style={{marginLeft:"30px"}}
                        id="date-picker-dialog"
                        label="委託起始日期"
                        format="MM/dd/yyyy"
                        value={this.props.caseStartDate}
                        onChange={this.props.changeFunc("caseStartDate")}
                        KeyboardButtonProps={{
                        'aria-label': 'change date',
                       
                    }}
                    />                    
                </MuiPickersUtilsProvider>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        margin="normal"
                        style={{marginLeft:"30px"}}
                        id="date-picker-dialog"
                        label="委託終止日期"
                        format="MM/dd/yyyy"
                        value={this.props.caseFinishDate}
                        onChange={this.props.changeFunc("caseFinishDate")}
                        KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />                    
               
                </MuiPickersUtilsProvider>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        margin="normal"
                        style={{marginLeft:"30px"}}
                        id="date-picker-dialog"
                        label="建築完工日"
                        format="MM/dd/yyyy"
                        value={this.props.constructFinishDate}
                        onChange={this.props.changeFunc("constructFinishDate")}
                        KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />                    
                </MuiPickersUtilsProvider>        
            </div>
            <div className='new_item-address'>  
                <GridType4
                id="城市"
                label="城市"
                helperText=""
                choices={city2}
                value={this.props.city}
                changeFunc={this.props.changeFunc("city")}
                width = {100}
                ifRequired = {true}
                />        
                <GridType4
                id="行政區"
                label="行政區"
                helperText=""
                choices={district}
                ifRequired = {true}
                value={this.props.district}
                changeFunc={this.props.changeFunc("district")}
                width = {100}
                />        
                <GridType3
                label="村里"
                value={this.props.village}
                changeFunc={this.props.changeFunc("village")}
                width = {100}     
                />
         
                <GridType3
                label=""
                value={this.props.neighbor}
                changeFunc={this.props.changeFunc("neighbor")}
                width = {50}     
                />
                <nobr className="support-font">鄰</nobr>
                <GridType3
                label="道路"
                ifRequired = {true}
                value={this.props.road}
                changeFunc={this.props.changeFunc("road")}
                width = {150}     
                />
              
                <GridType4
                label=""
                choices={sectionNum}
                cvalue={this.props.section}
                changeFunc={this.props.changeFunc("section")}
                width = {60}     
                />
                <nobr className="support-font">段</nobr>
                <GridType3
                label=""
                value={this.props.lane}
                changeFunc={this.props.changeFunc("lane")}
                width = {50}     
                />
                <nobr className="support-font">巷</nobr>
                <GridType3
                label=""
                value={this.props.alley}
                changeFunc={this.props.changeFunc("alley")}
                width = {50}     
                />
                <nobr className="support-font">弄</nobr>
               
            </div>
            <div>
                <GridType3
                label=""
                value={this.props.number1}
                ifRequired = {true}
                changeFunc={this.props.changeFunc("number1")}
                width = {60}     
                />
                <nobr className="support-font">號之</nobr>
                <GridType3
                label=""
                value={this.props.number2}
                changeFunc={this.props.changeFunc("number2")}
                width = {60}     
                />
                <GridType3
                label=""
                value={this.props.floor1}
                changeFunc={this.props.changeFunc("floor1")}
                width = {50}     
                
                /> 
                <nobr className="support-font">樓之</nobr>
                <GridType3
                label=""
                value={this.props.floor2}
                changeFunc={this.props.changeFunc("floor2")}
                width = {50}     
                />
                <nobr className="support-font">      建物總樓層 地上</nobr>
                <GridType3
                label=""
                value={this.props.allUpFloor}
                changeFunc={this.props.changeFunc("allUpFloor")}
                width = {50}     
                ifRequired = {true}
                />
                <nobr className="support-font">層</nobr>
                <nobr className="support-font"> 地下</nobr>
                <GridType3
                label=""
                value={this.props.allDownFloor}
                changeFunc={this.props.changeFunc("allDownFloor")}
                width = {50}     
                ifRequired = {true}
                />
                <nobr className="support-font">層</nobr>
                <GridType4
                id="saleStatus"
                label="出售現狀"
                helperText=""
                choices={sale_stat}
                value={this.props.saleStatus}
                changeFunc={this.props.changeFunc("saleStatus")}
                width={100}
                ifRequired = {true}
                />  
            </div>
            
                
                
         
            
            
        </div>
        );
    }
}
