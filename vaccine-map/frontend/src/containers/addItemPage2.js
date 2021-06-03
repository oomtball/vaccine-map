import React, { Component } from "react";
import GridType3 from "../components/gridType3";
import GridType4 from "../components/gridType4";
import GridType5 from "../components/gridType5";
import {mrtArea} from '../data/MRT/mrtArea';
import {mrtTaipei} from '../data/MRT/mrtTaipei';
import {mrtTaichung} from '../data/MRT/mrtTaichung';
import {mrtKaohsiung} from '../data/MRT/mrtKaohsiung';
import {mrtTaoyuan} from '../data/MRT/mrtTaoyuan';
import {mrtWenhu} from '../data/MRT/mrtWenhu';
import {mrtShinyi} from '../data/MRT/mrtShinyi';
import {mrtNewbeitou} from '../data/MRT/mrtNewbeitou';
import {mrtLittlebeetan} from '../data/MRT/mrtLittlebeetan';
import {mrtBannan} from '../data/MRT/mrtBannan';
import {mrtSongshan} from '../data/MRT/mrtSongshan';
import {mrtShinlu} from '../data/MRT/mrtShinlu';
import {mrtAirport} from '../data/MRT/mrtAirport';
import {kaoOrange} from '../data/MRT/kaoOrange';
import {kaoRed} from '../data/MRT/kaoRed';
import {typeOfRoad} from '../data/typeOfRoad';
import {trMainRoad} from '../data/TaiwanRail/trMainRoad';
import {trWestMainRoad} from '../data/TaiwanRail/trWestMainRoad';
import {trEastMainRoad} from '../data/TaiwanRail/trEastMainRoad';
import {trOtherRoad} from '../data/TaiwanRail/trOtherRoad';
import {trNorthLine} from '../data/TaiwanRail/trNorthLine';
import {trMountainLine} from '../data/TaiwanRail/trMountainLine';
import {trBeachLine} from '../data/TaiwanRail/trBeachLine';
import {trSouthLine} from '../data/TaiwanRail/trSouthLine';
import {trYilan} from '../data/TaiwanRail/trYilan';
import {trHuadong} from '../data/TaiwanRail/trHuadong';
import { trPingtung } from "../data/TaiwanRail/trPingtung";
import {trSouthLinkLine} from "../data/TaiwanRail/trSouthLinkLine";
import {trPingsi} from "../data/TaiwanRail/trPingsi";
import {trNeiwan} from "../data/TaiwanRail/trNeiwan";
import {trJiji} from "../data/TaiwanRail/trJiji";
import {trChengzhui} from "../data/TaiwanRail/trChengzhui";
import {trShalun} from "../data/TaiwanRail/trShalun";
import { trLioujia } from "../data/TaiwanRail/trLioujia";





export default class AddItemPage2 extends Component {
    render() {
        var mrtRoute1 = [{}];
        var mrtRoute2 = [{}];
        var trLine = [{}];
        var trStation = [{}];
        
        if (this.props.mrtArea === '大台北地區'){
            mrtRoute1 = mrtTaipei;
            if (this.props.mrtRoute1 === 'BR文湖線')
                mrtRoute2 = mrtWenhu;
            else if (this.props.mrtRoute1 === 'R淡水信義線')
                mrtRoute2 = mrtShinyi;
            else if (this.props.mrtRoute1 === '新北投支線')
                mrtRoute2 = mrtNewbeitou;
            else if (this.props.mrtRoute1 === '小碧潭支線')
                mrtRoute2 = mrtLittlebeetan;
            else if (this.props.mrtRoute1 === 'BL板南線')
                mrtRoute2 = mrtBannan;
            else if (this.props.mrtRoute1 === 'G松山新店線')
                mrtRoute2 = mrtSongshan;
            else if (this.props.mrtRoute1 === 'O中和新蘆線')
                mrtRoute2 = mrtShinlu;
        }
        else if (this.props.mrtArea === '大台中地區'){
            mrtRoute1 = mrtTaichung;
        }
        else if (this.props.mrtArea === '大高雄地區'){
            mrtRoute1 = mrtKaohsiung;
            if (this.props.mrtRoute1 === '橘線')
                mrtRoute2 = kaoOrange;
            else if (this.props.mrtRoute1 === '紅線')
                mrtRoute2 = kaoRed;
        }
        else if (this.props.mrtArea === '桃園地區'){
            mrtRoute1 = mrtTaoyuan;
            if (this.props.mrtRoute1 === '機場線')
                mrtRoute2 = mrtAirport;
        }
        
        
        if (this.props.trMainRoad === '西部幹線'){
            trLine = trWestMainRoad;
            if(this.props.trLine ==='北段')    
                trStation = trNorthLine;
            else if(this.props.trLine ==='山線')    
                trStation = trMountainLine;
            else if(this.props.trLine ==='海線')    
                trStation = trBeachLine;
            else if(this.props.trLine ==='南段')    
                trStation = trSouthLine;
       
        }
        else if(this.props.trMainRoad === "東部幹線"){
            trLine = trEastMainRoad;
            if(this.props.trLine ==='宜蘭線')    
                trStation = trYilan;
            else if(this.props.trLine === '花東線')
                trStation = trHuadong;

        }
        else if(this.props.trMainRoad === "其他路線"){
            trLine = trOtherRoad;
            if(this.props.trLine ==='屏東線')
                trStation = trPingtung;
            else if(this.props.trLine ==='南迴線')
                trStation = trSouthLinkLine;
            else if(this.props.trLine ==='平溪線')
                trStation = trPingsi;
            else if(this.props.trLine ==='內灣線')
                trStation = trNeiwan;
            else if(this.props.trLine ==='集集線')
                trStation = trJiji;
            else if(this.props.trLine ==='成追線')
                trStation = trChengzhui;
            else if(this.props.trLine ==='沙崙線')
                trStation = trShalun;
            else if(this.props.trLine ==='六家線')
                trStation = trLioujia;
        
        
        }   
        
    
        
        
        
        
        
        return (
        <div>
            <div>
                    <GridType4
                    id="捷運路線1"
                    label="捷運路線"
                    helperText=""
                    choices={mrtArea}
                    value={this.props.mrtArea}
                    changeFunc={this.props.changeFunc('mrtArea')}
                    width = {150}
                    />            
                    <GridType4
                    id="捷運路線2"
                    label="捷運路線"
                    helperText=""
                    choices={mrtRoute1}
                    value={this.props.mrtRoute1}
                    changeFunc={this.props.changeFunc('mrtRoute1')}
                    width = {150}
                    />           
                    <GridType4
                    id="捷運路線3"
                    label="捷運路線"
                    helperText=""
                    choices={mrtRoute2}
                    value={this.props.mrtRoute2}
                    changeFunc={this.props.changeFunc('mrtRoute2')}
                    width = {150}
                    />           
            </div>
            <div>       
                    <GridType4
                    id="台鐵1"
                    label="台鐵路線"
                    helperText=""
                    choices={trMainRoad}
                    value={this.props.trMainRoad}
                    changeFunc={this.props.changeFunc('trMainRoad')}
                    width = {150}
                    />           
                    <GridType4
                    id="台鐵2"
                    label="台鐵路線"
                    helperText=""
                    choices={trLine}
                    value={this.props.trLine}
                    changeFunc={this.props.changeFunc('trLine')}
                    width = {150}
                    />           
                    <GridType4
                    id="台鐵3"
                    label="台鐵路線"
                    helperText=""
                    choices={trStation}
                    value={this.props.trStation}
                    changeFunc={this.props.changeFunc('trStation')}
                    width = {150}
                    />           
                    <GridType3
                    label="面臨路寬"
                    value={this.props.frontRoadWidth}
                    changeFunc={this.props.changeFunc('frontRoadWidth')}
                    width = {250}     
                    />
                    <GridType4
                    id="面臨路型"
                    label="面臨路型"
                    helperText=""
                    choices={typeOfRoad}
                    value={this.props.typeOfRoad}
                    changeFunc={this.props.changeFunc('typeOfRoad')}
                    width = {100}
                    />           
                </div>
                <div>
                    <GridType3
                    id="備註"
                    label="備註"
                    helperText=""
                  
                    value={this.props.remark}
                    changeFunc={this.props.changeFunc('remark')}
                    width = {"90%"}
                    />        

                </div>
                
                
                
                <div className = "special-mention">
                    <GridType5
                    label="特點說明"
                    value={this.props.feature}
                    changeFunc={this.props.changeFunc('feature')}
                    width = {"90%"}     
                    ifRequired = {true}
                    />
                </div>
        </div>
        );
    }
}
