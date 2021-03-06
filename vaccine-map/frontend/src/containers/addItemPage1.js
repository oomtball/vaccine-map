import React, { Component } from "react";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import {vaccine} from '../data/buildingAttribute/vaccineMenu';
import GridType1 from "../components/gridType1";
import GridType3 from "../components/gridType3";
import GridType4 from "../components/gridType4";
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
        var district = [{}];
        if (this.props.city === "?????????"){
            district = taipeiCity;
        }
        else if (this.props.city === "?????????"){
            district = keelongCity;
        }
        else if (this.props.city === "?????????"){
            district = newtaipeiCity;
        }
        else if (this.props.city === "?????????"){
            district = yilanCounty;
        }
        else if (this.props.city === "?????????"){
            district = hsinchuCity;
        }
        else if (this.props.city === "?????????"){
            district = hsinchuCounty;
        }
        else if (this.props.city === "?????????"){
            district = taoyuanCity;
        }
        else if (this.props.city === "?????????"){
            district = miaoliCounty;
        }
        else if (this.props.city === "?????????"){
            district = taichungCity;
        }
        else if (this.props.city === "?????????"){
            district = changhuaCounty;
        }
        else if (this.props.city === "?????????"){
            district = nantouCounty;
        }
        else if (this.props.city === "?????????"){
            district = chiayiCity;
        }
        else if (this.props.city === "?????????"){
            district = chiayiCounty;
        }
        else if (this.props.city === "?????????"){
            district = yunlinCounty;
        }
        else if (this.props.city === "?????????"){
            district = tainanCity;
        }
        else if (this.props.city === "?????????"){
            district = kaohsiungCity;
        }
        else if (this.props.city === "?????????"){
            district = wuhuCounty;
        }
        else if (this.props.city === "?????????"){
            district = pingtungCounty;
        }
        else if (this.props.city === "?????????"){
            district = taitungCounty;
        }
        else if (this.props.city === "?????????"){
            district = hualianCounty;
        }
        else if (this.props.city === "?????????"){
            district = goldengateCounty;
        }
        else if (this.props.city === "?????????"){
            district = lianjiangCounty;
        }

        return (
        <div >
            <div className="new_item-basic">
                <GridType3
                label="???????????????"
                value={this.props.user_name}
                changeFunc={this.props.changeFunc("user_name")}
                ifRequired ={true}
                width = {200}     
                />
                 <GridType3
                label="?????????"
                value={this.props.user_id}
                changeFunc={this.props.changeFunc("user_id")}
                width = {110}     
                ifRequired = {true}
                />
                 <GridType3
                label="??????"
                value={this.props.gender}
                changeFunc={this.props.changeFunc("gender")}
                width = {110}     
                ifRequired = {true}
                />
            </div>
            <div  className='new_item-dateselection'>       
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        margin="normal"
                        style={{marginLeft:"30px"}}
                        id="date-picker-dialog"
                        label="??????"
                        format="MM/dd/yyyy"
                        value={this.props.birthday}
                        onChange={this.props.changeFunc("birthday")}
                        KeyboardButtonProps={{
                        'aria-label': 'change date',
                       
                    }}
                    />                    
                </MuiPickersUtilsProvider>      
            </div>
            <div className='new_item-address'>  
                <GridType4
                id="??????"
                label="??????"
                helperText=""
                choices={city2}
                value={this.props.city}
                changeFunc={this.props.changeFunc("city")}
                width = {100}
                ifRequired = {true}
                />        
                <GridType4
                id="?????????"
                label="?????????"
                helperText=""
                choices={district}
                ifRequired = {true}
                value={this.props.district}
                changeFunc={this.props.changeFunc("district")}
                width = {100}
                />        
                <GridType3
                label="??????"
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
                <nobr className="support-font">???</nobr>
                <GridType3
                label="??????"
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
                <nobr className="support-font">???</nobr>
                <GridType3
                label=""
                value={this.props.lane}
                changeFunc={this.props.changeFunc("lane")}
                width = {50}     
                />
                <nobr className="support-font">???</nobr>
                <GridType3
                label=""
                value={this.props.alley}
                changeFunc={this.props.changeFunc("alley")}
                width = {50}     
                />
                <nobr className="support-font">???</nobr>
               
            </div>
            <div>
                <GridType3
                label=""
                value={this.props.number1}
                ifRequired = {true}
                changeFunc={this.props.changeFunc("number1")}
                width = {60}     
                />
                <nobr className="support-font">??????</nobr>
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
                <nobr className="support-font">??????</nobr>
                <GridType3
                label=""
                value={this.props.floor2}
                changeFunc={this.props.changeFunc("floor2")}
                width = {50}     
                />
            </div>
            <div className="new_item-basic">
                <GridType1
                id="vaccine_name"
                label="????????????"
                helperText=""
                choices={vaccine}
                value={this.props.vaccine_name}
                changeFunc={this.props.changeFunc("vaccine_name")}
                width={100}
                />
                 <GridType3
                label="????????????"
                value={this.props.vaccine_id}
                changeFunc={this.props.changeFunc("vaccine_id")}
                width = {110}     
                ifRequired = {true}
                />
                 <GridType3
                label="??????????????????"
                value={this.props.vaccine_info}
                changeFunc={this.props.changeFunc("vaccine_info")}
                width = {200}     
                ifRequired = {true}
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        margin="normal"
                        style={{marginLeft:"30px"}}
                        id="date-picker-dialog"
                        label="????????????"
                        format="MM/dd/yyyy"
                        value={this.props.vaccination_date}
                        onChange={this.props.changeFunc("vaccination_date")}
                        KeyboardButtonProps={{
                        'aria-label': 'change date',  
                        }}
                    />                    
                </MuiPickersUtilsProvider> 
            </div>
        </div>
        );
    }
}
