import React, { Component } from "react";
import GridType3 from "../components/gridType3";
import GridType4 from "../components/gridType4";
import {facing} from '../data/buildingAttribute/facing';
import {lighting} from '../data/buildingAttribute/lighting';
import {sideRoom} from '../data/sideRoom';
import {darkRoom} from '../data/buildingAttribute/darkRoom';
import {mainMaterial} from '../data/buildingAttribute/mainMaterial';
import {compartmentMaterial} from '../data/buildingAttribute/compartmentMaterial';
import {outsideWall} from '../data/buildingAttribute/outsideWall';
import {status} from '../data/status';
import {securityGuard} from '../data/securityGuard';
import {manageFee} from '../data/buildingAttribute/manageFee';
import {feeFrequency} from '../data/buildingAttribute/feeFrequency' ;


import "../styles/new_item.css";



export default class AddItemPage3 extends Component {
    render() {
        return (
        <div>
            <div>
                    <GridType3
                    id="num_room1"
                    label=""
                    value={this.props.room1}
                    changeFunc={this.props.changeFunc('room1')}
                    ifRequired = {true}
                    width = {50}     
                    />
                    <nobr className="support-font">+</nobr>
                    <GridType3
                    id="num_room2"
                    label=""
                    ifRequired = {false}
                    value={this.props.room2}
                    changeFunc={this.props.changeFunc('room2')}
                    width = {50}     
                    />
                    <nobr className="support-font">房</nobr>
                    <GridType3
                    id="num_living_room"
                    label=""
                    value={this.props.livingroom}
                    changeFunc={this.props.changeFunc('livingroom')}
                    ifRequired = {true}
                    width = {50}     
                    />
                    <nobr className="support-font">廳</nobr>
                    <GridType3
                    id="num_bathroom"
                    label=""
                    value={this.props.bathroom}
                    changeFunc={this.props.changeFunc('bathroom')}
                    ifRequired = {true}
                    width = {50}     
                    />
                    <nobr className="support-font">衛</nobr>
                    <GridType3
                    label="其他格局"
                    value={this.props.otherPattern}
                    changeFunc={this.props.changeFunc('otherPattern')}
                    
                    width = {150}     
                    />
                    <GridType4
                    id="主要坐向"
                    label="主要坐向"
                    helperText=""
                    choices={facing}
                    value={this.props.facing}
                    changeFunc={this.props.changeFunc('facing')}
                    
                    width = {140}
                    />           
                    <GridType3
                    label="土地持份"
                    value = {this.props.landHoldings}
                    changeFunc={this.props.changeFunc('landHoldings')}
                    width = {80}
                    />
                    <GridType3
                    label="土地面積"
                    value = {this.props.landArea}
                    changeFunc={this.props.changeFunc('landArea')}
                    width = {80}
                    />
                    <nobr className="support-font">坪</nobr>





                </div>              
                <div >
                    <GridType4
                    id="採光"
                    label="採光"
                    helperText=""
                    choices={lighting}
                    value={this.props.lighting}
                    changeFunc={this.props.changeFunc('lighting')}
                    
                    width = {75}
                    />           
                    <GridType4
                    id="邊間"
                    label="邊間"
                    helperText=""
                    choices={sideRoom}
                    value={this.props.sideRoom}
                    changeFunc={this.props.changeFunc('sideRoom')}
                    
                    width = {75}
                    />             
                    <GridType4
                    id="暗房"
                    label="暗房"
                    helperText=""
                    choices={darkRoom}
                    value={this.props.darkRoom}
                    changeFunc={this.props.changeFunc('darkRoom')}
                    
                    width = {75}
                    />           
                    
                    <GridType4
                    id="主要建材"
                    label="主要建材"
                    helperText=""
                    choices={mainMaterial}
                    value={this.props.mainMaterial}
                    changeFunc={this.props.changeFunc('mainMaterial')}
                    ifRequired = {true}
                    width = {200}
                    />        
                    <GridType4
                    id="隔間材料"
                    label="隔間材料"
                    helperText=""
                    choices={compartmentMaterial}
                    value={this.props.compartmentMaterial}
                    changeFunc={this.props.changeFunc('compartmentMaterial')}
                    
                    width = {200}
                    />  
                    <GridType4
                    id="外牆"
                    label="外牆"
                    helperText=""
                    choices={outsideWall}
                    value={this.props.outsideWall}
                    changeFunc={this.props.changeFunc('outsideWall')}
                    
                    width = {200}
                    />        

                   
                </div>
                <div>
                    <GridType4
                    id="使用現況"
                    label="使用現況"
                    helperText=""
                    choices={status}
                    value={this.props.status}
                    changeFunc={this.props.changeFunc('status')}
                    
                    width = {125}
                    />
                    <GridType4
                    id="管理員/警衛"
                    label="管理員/警衛"
                    helperText=""
                    choices={securityGuard}
                    value={this.props.securityGuard}
                    changeFunc={this.props.changeFunc('securityGuard')}
                    
                    width = {125}
                    />
                    
                    
                    
                    <GridType4
                    id="房屋管理費"
                    label="房屋管理費"
                    changeFunc={this.props.changeFunc('manageFee')}
                    changeFunc2={this.props.changeFunc('boolManageFee')}
                    changeFunc3={this.props.changeFunc('amountOfManageFee')}
                    choices={manageFee}
                    value={this.props.manageFee}
                    boolManageFee = {this.props.boolManageFee}
                    checkBool = {"boolManageFee"}
                    width = {125}
                    />
                    
                    <GridType3
                    label=""
                    changeFunc={this.props.changeFunc('amountOfManageFee')}
                    value={this.props.amountOfManageFee}
                    boolDisabled = {this.props.boolManageFee}
                    />
                    <nobr className="support-font">元</nobr>
                    <GridType4
                    id="頻率"
                    label="頻率"
                    choices={feeFrequency}
                    changeFunc={this.props.changeFunc('feeFrequency')}
                    value={this.props.feeFrequency}
                    
                    width = {75}
                    />
                </div>
                <div>
                    <GridType3
                    label="學校"
                    value={this.props.elementary}
                    changeFunc={this.props.changeFunc('elementary')}
                    width = {175}     
                    
                    />
                    <nobr className="support-font">國小</nobr>

                    <GridType3
                    label="學校"
                    value={this.props.junior}
                    changeFunc={this.props.changeFunc('junior')}
                    width = {175}     
                    />
                    <nobr className="support-font">國中</nobr>
                    <GridType3
                    label="公園"
                    value={this.props.park}
                    changeFunc={this.props.changeFunc('park')}
                    width = {225}     
                    />
                    <GridType3
                    label="市場"
                    value={this.props.market}
                    changeFunc={this.props.changeFunc('market')}
                    width = {225}     
                    />
                </div>
              
        </div>
        );
    }
}
