import React, { Component } from "react";
import GridType3 from "../components/gridType3";
import GridType4 from "../components/gridType4";
import "../styles/new_item.css";

import {agencyList} from "../data/agencyList";
import {hasOrNot} from "../data/buildingAttribute/hasOrNot";






export default class AddItemPage3 extends Component {
    render() {
        return (
        
        <div>
            <div>
                    <GridType3
                    label="權狀面積"
                    value={this.props.ownershipArea}
                    changeFunc={this.props.changeFunc('ownershipArea')}
                    width = {100}     
                    />
                    <nobr className="support-font">坪</nobr>
                    <GridType3
                    label="增建面積"
                    value={this.props.extensionArea}
                    changeFunc={this.props.changeFunc('extensionArea')}
                    width = {100}     
                    />
                    <nobr className="support-font">坪</nobr> 
                    <GridType3
                    label="公設比"
                    value={(Number(this.props.areaOfPublic)/
                        (Number(this.props.ownershipArea) - Number(this.props.pingOfParkingSpace))*100).toPrecision(4)}
                    changeFunc={this.props.changeFunc('ratioOfPublic')}
                    // changeFunc={}
                    width = {100}     
                    />
                    <nobr className="support-font">％</nobr>
                    <GridType3
                    label="主建物"
                    value={this.props.mainBuilding}
                    changeFunc={this.props.changeFunc('mainBuilding')}
                    width = {100}     
                    ifRequired = {true}
                    />
                    <nobr className="support-font">坪</nobr>
                    <GridType3
                    label="附屬建物"
                    value={this.props.subsidiaryBuilding}
                    changeFunc={this.props.changeFunc('subsidiaryBuilding')}
                    width = {100}     
                    ifRequired = {true}
                    />
                    <nobr className="support-font">坪</nobr>
                    <GridType3
                    label="公設面積"
                    value={this.props.areaOfPublic}
                    changeFunc={this.props.changeFunc('areaOfPublic')}
                    width = {100}     
                    ifRequired = {true}
                    />
                    <nobr className="support-font">坪</nobr>
                </div>   
                <div> 
                    <GridType4
                    id="車位"
                    label="車位"
                    helperText=""
                    choices={hasOrNot}
                    value={this.props.parkingSpace}
                    changeFunc={this.props.changeFunc('parkingSpace')}
                    changeFunc2={this.props.changeFunc('boolParkingSpace')}
                    boolParkingSpace = {this.props.boolParkingSpace}
                    checkBool = {"boolParkingSpace"}
                    width = {75}
                    />
                    <GridType3
                    label="車位坪數"
                    helperText="坪"
                    value={this.props.pingOfParkingSpace}
                    changeFunc={this.props.changeFunc('pingOfParkingSpace')}
                    boolDisabled = {this.props.boolParkingSpace}
                    width = {100}     
                    />
                    <nobr className="support-font">坪</nobr>
                    <GridType3
                    label="車位總數"
                    value={this.props.quantityOfParkingSpace}
                    changeFunc={this.props.changeFunc('quantityOfParkingSpace')}
                    boolDisabled = {this.props.boolParkingSpace}
                    width = {100}     
                    />
                    <nobr className="support-font">個</nobr>
                    <GridType3
                    label="車位編號"
                    value={this.props.numberOfParkingSpace}
                    changeFunc={this.props.changeFunc('numberOfParkingSpace')}
                    boolDisabled = {this.props.boolParkingSpace}
                    width = {125}     
                    />
                    <GridType3
                    label="車位價格"
                    value={this.props.priceOfParkingSpace}
                    changeFunc={this.props.changeFunc('priceOfParkingSpace')}
                    boolDisabled = {this.props.boolParkingSpace}
                    width = {100}     
                    />
                    <nobr className="support-font">萬</nobr>
                </div>
                <div>
                    <GridType3
                    label="深度"
                    value={this.props.depth}
                    changeFunc={this.props.changeFunc('depth')}
                    width = {100}     
                    />
                    <nobr className="support-font">米</nobr>
                    <GridType3
                    label="面寬"
                    value={this.props.faceWidth}
                    changeFunc={this.props.changeFunc('faceWidth')}
                    width = {100}     
                    />
                    <nobr className="support-font">米</nobr>
                    <GridType3
                    label="挑高"
                    value={this.props.highCeiling}
                    changeFunc={this.props.changeFunc('highCeiling')}
                    width = {100}     
                    />
                    <nobr className="support-font">米</nobr>
                    <GridType3
                    label="樑下"
                    value={this.props.highBeam}
                    changeFunc={this.props.changeFunc('highBeam')}
                    width = {100}     
                    />
                    <nobr className="support-font">米</nobr>                    
                </div>    
                <div>    
                    <GridType4
                    id="貨梯"
                    label="貨梯"
                    
                    choices={hasOrNot}
                    value={this.props.cargoElevator}
                    changeFunc={this.props.changeFunc('cargoElevator')}
                    changeFunc2={this.props.changeFunc('boolCargoElevator')}
                    boolCargoElevator = {this.props.boolCargoElevator}
                    checkBool = {"boolCargoElevator"}
                    width = {75}
                    />
                    <GridType3
                    label="貨梯"
                    value={this.props.tonsOfCargoElevator}
                    changeFunc={this.props.changeFunc('tonsOfCargoElevator')}
                    boolDisabled = {this.props.boolCargoElevator}
                    width = {75}     
                    />
                    <nobr className="support-font">噸</nobr>                    
                    <GridType4
                    id="天車"
                    label="天車"
                    choices={hasOrNot}
                    value={this.props.crane}
                    changeFunc={this.props.changeFunc('crane')}
                    changeFunc2={this.props.changeFunc('boolCrane')}
                    boolCrane = {this.props.boolCrane}
                    checkBool = {"boolCrane"}
                    width = {75}
                    />
                    <GridType3
                    label="天車"
                    helperText="噸"
                    value={this.props.tonsOfCrane}
                    changeFunc={this.props.changeFunc('tonsOfCrane')}
                    boolDisabled = {this.props.boolCrane}
                    width = {75}     
                    />
                    <nobr className="support-font">噸</nobr>                                        
                    <GridType4
                    id="大電"
                    label="大電"
                    choices={hasOrNot}
                    value={this.props.bigElec}
                    changeFunc={this.props.changeFunc('bigElec')}
                    changeFunc2={this.props.changeFunc('boolBigElec')}
                    boolBigElec = {this.props.boolBigElec}
                    checkBool = {"boolBigElec"}
                    width = {75}
                    />
                    <GridType3
                    label="大電"
                    value={this.props.hpOfBigElec}
                    changeFunc={this.props.changeFunc('hpOfBigElec')}
                    boolDisabled = {this.props.boolBigElec}
                    width = {75}     
                    
                    />
                    <nobr className="support-font">馬力</nobr>                                        
                    <GridType4
                    id="地下室"
                    label="地下室"
                    
                    choices={hasOrNot}
                    value={this.props.basement}
                    changeFunc={this.props.changeFunc('basement')}
                    width = {100}
                    />                    
                </div>
                
                
                
                
                
                <div>
                    <GridType4
                    id="經紀人"
                    label="經紀人1"
                    choices={agencyList}
                    value={this.props.agency1}
                    changeFunc={this.props.changeFunc('agency1')}
                    width = {125}
                    />
                    <GridType4
                    id="經紀人"
                    label="經紀人2"
                    choices={agencyList}
                    value={this.props.agency2}
                    changeFunc={this.props.changeFunc('agency2')}
                    width = {125}
                    />
                    <GridType4
                    id="經紀人"
                    label="經紀人3"
                   
                    choices={agencyList}
                    value={this.props.agency3}
                    changeFunc={this.props.changeFunc('agency3')}
                    
                    width = {125}
                    />
                    <GridType4
                    id="經紀人"
                    label="經紀人4"
                    
                    choices={agencyList}
                    value={this.props.agency4}
                    changeFunc={this.props.changeFunc('agency4')}
                    
                    width = {125}
                    />
                    <GridType4
                    id="經紀人"
                    label="經紀人5"
                    choices={agencyList}
                    value={this.props.agency5}
                    changeFunc={this.props.changeFunc('agency5')}
                    width = {125}
                    />
                    <GridType4
                    id="經紀人"
                    label="經紀人6"
                    choices={agencyList}
                    value={this.props.agency6}
                    changeFunc={this.props.changeFunc('agency6')}
                    
                    width = {125}
                    />
    
                </div>
        </div>
        );
    }
}
