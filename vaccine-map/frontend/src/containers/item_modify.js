import React, { useEffect } from "react";

import '../styles/new_item.css'
import 'date-fns';


import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {CustomTabs} from '../components/CustomTabs';
import {CustomTab} from '../components/CustomTab';
import AddItemPage1 from './addItemPage1';
import AddItemPage2 from './addItemPage2';
import AddItemPage3 from './addItemPage3';
import AddItemPage4 from './addItemPage4';

import UploadIcon from '@material-ui/icons/CloudUpload';
import OverflowScrolling from 'react-overflow-scrolling';
import {BootstrapButton} from './BootstrapButton';


// const contract_state = [
//     {},
//     {
//         value: '銷售中',
//         label: '銷售中',
//     },
//     {
//         value: '終止',
//         label: '終止',
//     },
//     {
//         value: '逾期',
//         label: '逾期',
//     },
//     {
//         value: '成交',
//         label: '成交',
//     }
// ]
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
		
		{...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
  
  export default function ScrollableTabsButtonAuto(props) { 
    const [value, setValue] = React.useState(0);
	const [caseNamez, setCaseName] = React.useState(props.location.caseName);
	const [innerNumz,setInnerNum] = React.useState(props.location.innerNum);
	const [contractNumz, setContractNum] = React.useState(props.location.contractNum);
	const [contractPricez, setContractPrice] = React.useState(props.location.contractPrice);
	const [sellingPricez, setSellingPrice] = React.useState("");
	const [buildingTypez, setBuildingType] = React.useState(props.location.buildingType);
	const [usagez, setUsage] = React.useState(props.location.usage);
	const [caseStartDatez, setCaseStartDate] = React.useState(new Date(props.location.caseStartDate));
	const [caseFinishDatez, setCaseFinishDate] = React.useState(new Date(props.location.caseFinishDate));
	const [constructFinishDatez, setConstructFinishDate] = React.useState(new Date(props.location.constructFinishDate));
	const [cityz, setCity] = React.useState(props.location.city);
	const [districtz, setDistrict] = React.useState(props.location.district);
	const [villagez, setVillage] = React.useState(props.location.village);
	const [neighborz, setNeighbor] = React.useState(props.location.neighbor);
	const [roadz, setRoad] = React.useState(props.location.road);
	const [sectionz, setSection] = React.useState(props.location.section);
	const [lanez, setLane] = React.useState(props.location.lane);
	const [alleyz, setAlley] = React.useState(props.location.alley);
	const [number1z, setNumber1] = React.useState(props.location.number1);
	const [number2z, setNumber2] = React.useState(props.location.number2);
	const [floor1z, setFloor1] = React.useState(props.location.floor1);
	const [floor2z, setFloor2] = React.useState(props.location.floor2);
	const [allUpFloorz, setAllUpFloor] = React.useState(props.location.allUpFloor);
	const [allDownFloorz, setAllDownFloor] = React.useState(props.location.allDownFloor);
	const [saleStatusz,setSaleStatus] = React.useState("");

	const [mrtAreaz, setMrtArea] = React.useState(props.location.mrtArea);
	const [mrtRoute1z, setMrtRoute1] = React.useState(props.location.mrtRoute1);
	const [mrtRoute2z, setMrtRoute2] = React.useState(props.location.mrtRoute2);
	const [trMainRoadz, setTrMainRoad] = React.useState(props.location.trMainRoad);
	const [trLinez, setTrLine] = React.useState(props.location.trLine);
	const [trStationz, setTrStation] = React.useState(props.location.trStation);
	const [frontRoadWidthz, setFrontRoadWidth] = React.useState(props.location.frontRoadWidth);
	const [typeOfRoadz, setTypeOfRoad] = React.useState(props.location.typeOfRoad);
	const [featurez, setFeature] = React.useState(props.location.feature);
	const [remarkz, setRemark] = React.useState(props.location.remark);
	
	const [room1z, setRoom1] = React.useState(props.location.room1);
	const [room2z, setRoom2] = React.useState(props.location.room2);
	const [livingroomz, setLivingroom] = React.useState(props.location.livingroom);
	const [bathroomz, setBathroom] = React.useState(props.location.bathroom);
	const [otherPatternz, setOtherPattern] = React.useState(props.location.otherPattern);
	const [facingz, setFacing] = React.useState(props.location.facing);
	const [landHoldingsz,setLandHoldings] = React.useState(props.location.landHoldings)
	const [landAreaz,setLandArea] = React.useState(props.location.landArea)
	const [lightingz, setLighting] = React.useState(props.location.lighting);
	const [sideRoomz, setSideRoom] = React.useState(props.location.sideRoom);
	const [darkRoomz, setDarkRoom] = React.useState(props.location.darkRoom);
	const [mainMaterialz, setMainMaterial] = React.useState(props.location.mainMaterial);
	const [compartmentMaterialz, setCompartmentMaterial] = React.useState(props.location.compartmentMaterial);
	const [outsideWallz, setOutsideWall] = React.useState(props.location.outsideWall);
	const [statusz, setStatus] = React.useState(props.location.status);
	const [securityGuardz, setSecurityGuard] = React.useState(props.location.securityGuard);
	const [manageFeez, setManageFee] = React.useState(props.location.manageFee);
	const [amountOfManageFeez, setAmountOfManageFee] = React.useState(props.location.amountOfManageFee);
	const [feeFrequencyz, setFeeFrequency] = React.useState(props.location.feeFrequency);
	const [elementaryz, setElementary] = React.useState(props.location.elementary);
	const [juniorz, setJunior] = React.useState(props.location.junior);
	const [parkz, setPark] = React.useState(props.location.park);
	const [marketz, setMarket] = React.useState(props.location.market);

	const [ownershipAreaz, setOwnershipArea] = React.useState(props.location.ownershipArea);
	const [extensionAreaz, setExtensionArea] = React.useState(props.location.extensionArea);
	const [ratioOfPublicz, setRatioOfPublic] = React.useState(props.location.ratioOfPublic);
	const [mainBuildingz, setMainBuilding] = React.useState(props.location.mainBuilding);
	const [subsidiaryBuildingz, setSubsidiaryBuilding] = React.useState(props.location.subsidiaryBuilding);
	const [areaOfPublicz, setAreaOfPublic] = React.useState(props.location.areaOfPublic);
	const [parkingSpacez, setParkingSpace] = React.useState(props.location.parkingSpace);
	const [pingOfParkingSpacez, setPingOfParkingSpace] = React.useState(props.location.pingOfParkingSpace);
	const [quantityOfParkingSpacez, setQuantityOfParkingSpace] = React.useState(props.location.quantityOfParkingSpace);
	const [numberOfParkingSpacez, setNumberOfParkingSpace] = React.useState(props.location.numberOfParkingSpace);
	const [priceOfParkingSpacez, setPriceOfParkingSpace] = React.useState(props.location.priceOfParkingSpace);
	const [depthz, setDepth] = React.useState(props.location.depth);
	const [faceWidthz, setFaceWidth] = React.useState(props.location.faceWidth);
	const [highCeilingz, setHighCeiling] = React.useState(props.location.highCeiling);
	const [highBeamz, setHighBeam] = React.useState(props.location.highBeam);
	const [cargoElevatorz, setCargoElevator] = React.useState(props.location.cargoElevator);
	const [tonsOfCargoElevatorz, setTonsOfCargoElevator] = React.useState(props.location.tonsOfCargoElevator);
	const [cranez, setCrane] = React.useState(props.location.crane);
	const [tonsOfCranez, setTonsOfCrane] = React.useState(props.location.tonsOfCrane)
	const [bigElecz, setBigElec] = React.useState(props.location.bigElec);
	const [hpOfBigElecz, setHpOfBigElec] = React.useState(props.location.hpOfBigElec);
	const [basementz,setBasement] = React.useState(props.location.basement);
	const [agency1z, setAgency1] = React.useState(props.location.agency1);
	const [agency2z, setAgency2] = React.useState(props.location.agency2);
	const [agency3z, setAgency3] = React.useState(props.location.agency3);
	const [agency4z, setAgency4] = React.useState(props.location.agency4);
	const [agency5z, setAgency5] = React.useState(props.location.agency5);
	const [agency6z, setAgency6] = React.useState(props.location.agency6);	
	
	const [boolManageFeez, setBoolManageFee] = React.useState((props.location.manageFee === ""));
	const [boolParkingSpacez, setBoolParkingSpace] = React.useState((props.location.parkingSpace === ""));
	const [boolCargoElevatorz, setBoolCargoElevator] = React.useState((props.location.cargoElevator === ""));
	const [boolCranez, setBoolCrane] = React.useState((props.location.crane === ""));
	const [boolBigElecz, setBoolBigelec] = React.useState((props.location.bigElec === ""));
	
	const [ifDoneCaseNamez, setIfDoneCaseName] = React.useState(true);

	var pattern_pic_ref = React.createRef();
	var house_pic_ref = React.createRef();
	const [pattern_pic, setPattern_pic] = React.useState("");
	const [house_pics, setHouse_pics] = React.useState("");
	const [pattern_pic_name, setPattern_pic_name] = React.useState([]);
	const [house_pics_names, setHouse_pics_names] = React.useState([]);
	const [pattern_pic_change, setPattenn_pic_change] = React.useState(false);
	const [house_pics_change, setHouse_pics_change] = React.useState(false);
	const [tempPattern_pic_id, setTempPattern_pic_id] = React.useState("");
	//pictures
	let getPatternFromDb = async () => {
		let url = 'http://localhost:3002/api/getPattern/files/' + contractNumz;
		await fetch(url)
		.then(res => { return res.json() })
		.then(originData => {
			if(originData.success) {
				if(originData.data) {
					//originData.data.reverse();
					console.log(originData.data)
					setPattern_pic(originData.data);
					setPattern_pic_name(originData.data.filename)
				}
				else {
				  alert('Fail.');
				}   
			}
			else
				alert('Fail.');
		})
		.catch((err) => console.error(err));

	}
	let getHousePicsFromDB = async () => {
		let url2 = 'http://localhost:3002/api/getHousePics/files/'+ contractNumz;
		await fetch(url2)
		.then(res => { return res.json() })
		.then(originData => {
			if (originData.data !== undefined){
				setHouse_pics(originData.data);
				let their_name = [];
				for (let i = 0; i < originData.data.length; i++){
					their_name.push(originData.data[i].filename)
				}
				setHouse_pics_names(their_name);
			}
			else (alert("沒有這筆資料"))
		})
		.catch((err) => console.error(err));
	}
	useEffect(() => {getPatternFromDb(); getHousePicsFromDB();}, []);
	var localUpload = e => {
		setTempPattern_pic_id(pattern_pic._id);
        if(e.target.files.length === 0)
            setPattern_pic(null);
        else{
			setPattern_pic(e.target.files);
			setPattern_pic_name(e.target.files[0].name);
		}
		setPattenn_pic_change(true);
	}
	var localUpload2 = e => {
        if(e.target.files.length === 0)
            setHouse_pics(null);
        else{
			var their_name = []
			setHouse_pics(e.target.files);
			for (var i = 0; i < e.target.files.length; i++){
				their_name.push(e.target.files[i].name);
			}
			setHouse_pics_names(their_name);
		}
		setHouse_pics_change(true);
	}
	function handleChange(event, newValue) {
      setValue(newValue);
    }
    const edit = key => e => {
		if (key === "caseName"){
			setCaseName(e);
		}
		else if (key === "innerNum"){
			setInnerNum(e);
		}
		else if (key === "contractNum"){
			setContractNum(e);
		}
		else if (key === "contractPrice"){
			setContractPrice(e);
		}
		else if (key === "sellingPrice"){
			setSellingPrice(e);
		}
		else if (key === "buildingType"){
			setBuildingType(e);
		}
		else if (key === "usage"){
			setUsage(e);
		}
		else if (key === "caseStartDate"){
			setCaseStartDate(e);
		}
		else if (key === "caseFinishDate"){
			setCaseFinishDate(e);
		}
		else if (key === "constructFinishDate"){
			setConstructFinishDate(e);
		}
		else if (key === "city"){
			setCity(e);
		}
		else if (key === "district"){
			setDistrict(e);
		}
		else if (key === "village"){
			setVillage(e);
		}
		else if (key === "neighbor"){
			setNeighbor(e);
		}
		else if (key === "road"){
			setRoad(e);
		}
		else if (key === "section"){
			setSection(e);
		}
		else if (key === "lane"){
			setLane(e);
		}
		else if (key === "alley"){
			setAlley(e);
		}
		else if (key === "number1"){
			setNumber1(e);
		}
		else if (key === "number2"){
			setNumber2(e);
		}
		else if (key === "floor1"){
			setFloor1(e);
		}
		else if (key === "floor2"){
			setFloor2(e);
		}
		else if (key === "allUpFloor"){
			setAllUpFloor(e);
		}
		else if (key === "allDownFloor"){
			setAllDownFloor(e);
		}
		else if (key === "mrtArea"){
			setMrtArea(e);
		}
		else if (key === "mrtRoute1"){
			setMrtRoute1(e);
		}
		else if (key === "mrtRoute2"){
			setMrtRoute2(e);
		}
		else if (key ==="trMainRoad"){
			setTrMainRoad(e);
		}
		else if (key ==="trLine"){
			setTrLine(e)
		}
		else if (key ==="trStation"){
			setTrStation(e)
		}
		
		else if (key === "frontRoadWidth"){
			setFrontRoadWidth(e);
		}
		else if (key === "typeOfRoad"){
			setTypeOfRoad(e);
		}
		else if (key === "remark"){
			setRemark(e);
		}
		else if (key === "feature"){
			setFeature(e);
		}		
		else if (key === "room1"){
			setRoom1(e);
		}
		else if (key === "room2"){
			setRoom2(e);
		}
		else if (key === "livingroom"){
			setLivingroom(e);
		}
		else if (key === "bathroom"){
			setBathroom(e);
		}
		else if (key === "otherPattern"){
			setOtherPattern(e);
		}
		else if (key === "facing"){
			setFacing(e);
		}
		else if (key === "lighting"){
			setLighting(e);
		}
		else if (key === "landHoldings"){
			setLandHoldings(e);
		}
		else if (key === "landArea"){
			setLandArea(e);
		}
		else if (key === "sideRoom"){
			setSideRoom(e);
		}
		else if (key === "darkRoom"){
			setDarkRoom(e);
		}
		else if (key === "mainMaterial"){
			setMainMaterial(e);
		}
		else if (key === "compartmentMaterial"){
			setCompartmentMaterial(e);
		}
		else if (key === "outsideWall"){
			setOutsideWall(e);
		}
		else if (key === "status"){
			setStatus(e);
		}
		else if (key === "securityGuard"){
			setSecurityGuard(e);
		}
		else if (key === "manageFee"){
			setManageFee(e);
		}
		else if (key === "boolManageFee"){
			setBoolManageFee(e)
		}
		else if (key === "amounOfManageFee"){
			setAmountOfManageFee(e);
		}
		else if (key === "feeFrequency"){
			setFeeFrequency(e);
		}
		else if (key === "elementary"){
			setElementary(e);
		}
		else if (key === "junior"){
			setJunior(e);
		}
		else if (key === "park"){
			setPark(e);
		}
		else if (key === "market"){
			setMarket(e);
		}
		else if (key === "ownershipArea"){
			setOwnershipArea(e);
		}
		else if (key === "extensionArea"){
			setExtensionArea(e);
		}
		else if (key === "ratioOfPublic"){
			setRatioOfPublic(e);
		}
		else if (key === "mainBuilding"){
			setMainBuilding(e);
		}
		else if (key === "subsidiaryBuilding"){
			setSubsidiaryBuilding(e);
		}		
		else if (key === "areaOfPublic"){
			setAreaOfPublic(e);
		}
		else if (key === "parkingSpace"){
			setParkingSpace(e);
		}
		else if (key === "boolParkingSpace"){
			setBoolParkingSpace(e);
		}
		else if (key === "pingOfParkingSpace"){
			setPingOfParkingSpace(e);
		}
		
		else if (key === "quantityOfParkingSpace"){
			setQuantityOfParkingSpace(e);
		}
		
		else if (key === "numberOfParkingSpace"){
			setNumberOfParkingSpace(e);
		}
		
		else if (key === "priceOfParkingSpace"){
			setPriceOfParkingSpace(e);
		}
		else if (key === "depth"){
			setDepth(e);
		}	
		else if (key === "faceWidth"){
			setFaceWidth(e);
		}
		else if (key === "highCeiling"){
			setHighCeiling(e);
		}
		else if (key === "highBeam"){
			setHighBeam(e);
		}
		else if (key === "cargoElevator"){
			setCargoElevator(e);
		}
		else if (key === "tonsOfCargoElevator"){
			setTonsOfCargoElevator(e);
		}
		else if (key === "boolCargoElevator"){
			setBoolCargoElevator(e)
		}
		else if (key === "crane"){
			setCrane(e);
		}
		else if (key === "tonsOfCrane"){
			setTonsOfCrane(e);
		}
		else if (key === "boolCrane"){
			setBoolCrane(e)
		}
		else if (key === "bigElec"){
			setBigElec(e);
		}
		else if (key === "hpOfBigElec"){
			setHpOfBigElec(e);
		}
		else if (key === "boolBigElec"){
			setBoolBigelec(e)
		}
		else if (key === "basement"){
			setBasement(e);
		}
		else if (key === "agency1"){
			setAgency1(e);
		}
		else if (key === "agency2"){
			setAgency2(e);
		}
		else if (key === "agency3"){
			setAgency3(e);
		}
		else if (key === "agency4"){
			setAgency4(e);
		}
		else if (key === "agency5"){
			setAgency5(e);
		}
		else if (key === "agency6"){
			setAgency6(e);
			console.log(pattern_pic)
		}
		else if (key ==="ifDoneCaseName"){
			setIfDoneCaseName(e);
		}
		else if (key ==="saleStatus"){
			setSaleStatus(e);
		}
	}
	let address = () => {
		var villageCheck = () => {if(villagez !== ""){return (villagez)}}
		var neighborCheck = () => {if(neighborz !== ""){return (neighborz+"鄰")}}
		var sectionCheck = () => {if(sectionz !== ""){return (sectionz+"段")}}
		var laneCheck = () => {if(lanez !== ""){return (lanez+"巷")}}
		var alleyCheck = () => {if(alleyz !== ""){return (alleyz+"弄")}}
		var numberCheck = () => {if(number1z !== ""){
			if (number2z !== ""){return(number1z+"號之"+number2z)}else{return(number1z+"號")}
		}}
		var floorCheck = () => {if(floor1z !== ""){
			if (floor2z !== ""){return(floor1z+"樓之"+floor2z)}else{return(floor1z+"樓")}
		}}
		if (cityz !== " " && districtz !== " " && roadz !== "" && number1z !== ""){
			return(<t>{cityz}{districtz}{villageCheck()}&nbsp;{neighborCheck()}&nbsp;
			{roadz}&nbsp;{sectionCheck()}{laneCheck()}{alleyCheck()}<div>{numberCheck()}</div>
			{floorCheck()}</t>)
		}
	}
	let contractPriceUnit = () =>{
		if(contractPricez !== "")
			return contractPricez + "萬"
		else
			return ""
	
	}
	let calculateRatioOfPublic = () =>{
		var ans = Number(areaOfPublicz)/(Number(ownershipAreaz)-Number(pingOfParkingSpacez))*100
		if (ans > 100){
			return ans.toPrecision(5)
		}
		else{
			return ans.toPrecision(4)
		}
	}
	let calculateHouseAge = () => {
		let today = new Date();
		return  today.getFullYear() - constructFinishDatez.getFullYear();
	}
	let calculatePricePerPing = () => {
		if (sellingPricez !== ""){
			return (sellingPricez / ownershipAreaz).toPrecision(5);
		}
		else{
			return (contractPricez / ownershipAreaz).toPrecision(5);
		}
	}
	let update = async () => {
		let data = { contractNum: contractNumz, update: { caseName:caseNamez, innerNum:innerNumz, contractNum:contractNumz, contractPrice:contractPricez, 
			sellingPrice:sellingPricez, buildingType:buildingTypez, usage:usagez, caseStartDate:caseStartDatez,
			caseFinishDate:caseFinishDatez, constructFinishDate:constructFinishDatez, city:cityz, district:districtz,
			village:villagez, neighbor:neighborz, road:roadz, section:sectionz, lane:lanez,
			alley:alleyz, number1:number1z, number2:number2z, floor1:floor1z, floor2:floor2z, allUpFloor:allUpFloorz, 
			allDownFloor:allDownFloorz, mrtArea:mrtAreaz, mrtRoute1:mrtRoute1z, mrtRoute2:mrtRoute2z,
			frontRoadWidth: frontRoadWidthz, typeOfRoad:typeOfRoadz, remark:remarkz, feature:featurez, room1:room1z, room2:room2z, 
			livingroom:livingroomz, bathroom:bathroomz, otherPattern:otherPatternz, facing:facingz, lighting:lightingz, 
			landHoldings:landHoldingsz, landArea:landAreaz,sideRoom:sideRoomz,
			darkRoom:darkRoomz, mainMaterial:mainMaterialz, compartmentMaterial:compartmentMaterialz, outsideWall:outsideWallz, 
			status:statusz, securityGuard:securityGuardz, manageFee:manageFeez, amountOfManageFee:amountOfManageFeez,
			feeFrequency:feeFrequencyz, elementary:elementaryz, junior:juniorz, park:parkz, market:marketz, trMainRoad:trMainRoadz, 
			trLine:trLinez, trStation:trStationz, ownershipArea:ownershipAreaz, extensionArea:extensionAreaz,
			ratioOfPublic:calculateRatioOfPublic(), mainBuilding:mainBuildingz, subsidiaryBuilding:subsidiaryBuildingz, areaOfPublic:areaOfPublicz, 
			parkingSpace:parkingSpacez, pingOfParkingSpace:pingOfParkingSpacez, quantityOfParkingSpace:quantityOfParkingSpacez,
			numberOfParkingSpace:numberOfParkingSpacez, priceOfParkingSpace:priceOfParkingSpacez, depth:depthz, faceWidth:faceWidthz, 
			highCeiling:highCeilingz, highBeam:highBeamz, cargoElevator:cargoElevatorz, tonsOfCargoElevator:tonsOfCargoElevatorz,
			crane:cranez, tonsOfCrane:tonsOfCranez, bigElec:bigElecz, hpOfBigElec:hpOfBigElecz, basement:basementz, agency1:agency1z, 
			agency2:agency2z, agency3:agency3z, agency4:agency4z, agency5:agency5z, agency6:agency6z, house_pics_names:house_pics_names } };
        await fetch('http://localhost:3002/api/updateObject', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => { return res.json() })
        .then(res => {
            if(res.success){
				alert("update successfully!")
			}
            else {
                alert('Fail.');
            }
        })
        .catch((err) => {
            console.error(err);
            alert('Fail.');
		});
		if (pattern_pic_change === true){
			console.log(tempPattern_pic_id)
			let url = 'http://localhost:3002/api/deletePattern_pic/' + contractNumz + "/" + tempPattern_pic_id;
			await fetch(url, {method:"DELETE"})
        	.then(res => { return res.json() })
        	.then(res => {
				if(res.success){
					alert("update pattern successfully!")
				}
				else {
					alert('Fail to update pattern.');
				}
			})
			const file1 = pattern_pic;
			if (file1 !== []){
				const formData_pattern = new FormData();
				formData_pattern.append('img', file1[0]);
				let uploadUrl = 'http://localhost:3002/api/upload_imgs/'+file1[0].name+'/pattern/'+contractNumz
				await fetch(uploadUrl, {
					method: 'POST',
					body: formData_pattern,
				}).then(res => {
					if(res.success){
						console.log("完成更新格局圖片！");
					}
				})
			}
		}
		if (house_pics_change === true){
			let url = 'http://localhost:3002/api/deleteHouse_pics/' + contractNumz + "/";
			await fetch(url, {method:"DELETE"})
        	.then(res => { return res.json() })
        	.then(res => {
				if(res.success){
					alert("delete house pictures successfully!")
				}
				else {
					alert('Fail to delete house pictures.');
				}
			})
			const file2 = house_pics;
			if (file2 !== []){
				let formData_house = "";
				for (let i=0; i<file2.length; i++){
					console.log("jjj");
					formData_house = new FormData();
					formData_house.append('img', file2[i])
					let uploadUrl = 'http://localhost:3002/api/upload_imgs/'+file2[i].name+'/house/'+contractNumz
					await fetch(uploadUrl, {
						method: 'POST',
						body: formData_house,
					}).then(res => {
						if(res.success){
							console.log("完成新增房屋圖片！");
						}
				})
				}
			}
		}
		props.history.push('/home');
        // this.props.history.push('/profile');
    }
	let patternSummary = () => {
		var roomCheck = () => {if (room1z !== ""){
			if (room2z !== ""){return(room1z+"+"+room2z+"房")}else{return(room1z+"房");};
		}};
		var livingroomCheck = () => {if (livingroomz !== ""){return(livingroomz+"廳");}};
		var bathroomCheck = () => {if (bathroomz !== ""){return(bathroomz+"衛");}};
	 	return(<t>{roomCheck()}{livingroomCheck()}{bathroomCheck()}</t>);
	}
	let startDateSummary = () => {
		return(caseStartDatez.getFullYear()+"/"+(caseStartDatez.getUTCMonth()+1)+"/"+caseStartDatez.getDate()); 
	}
	let finishDateSummary = () => {
		return(caseFinishDatez.getFullYear()+"/"+(caseFinishDatez.getUTCMonth()+1)+"/"+caseFinishDatez.getDate()); 
	}
    return (
      <div className='new_item-root'>
		<div className='new_item-bgcolor'></div>  
			<div><OverflowScrolling className='overflow-scrolling-inNewItem'>
            <AppBar  position="static" color="default">
            <CustomTabs
                value={value}
				onChange={handleChange}
				style={{marginTop: "12px",}}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                <CustomTab label="銷售物件" {...a11yProps(0)} />
                <CustomTab label="物件說明" {...a11yProps(1)} />
                <CustomTab label="建物說明" {...a11yProps(2)} />
                <CustomTab label="登記資料" {...a11yProps(3)} />
                <CustomTab label="圖片上傳" {...a11yProps(4)} />
                <CustomTab label="儲存確認" {...a11yProps(5)} />
                
            </CustomTabs>
            </AppBar>
            <TabPanel value={value} index={0}>
			  <AddItemPage1 changeFunc = {edit} caseName = {caseNamez} innerNum = {innerNumz} contractNum = {contractNumz} 
			  contractPrice = {contractPricez} sellingPrice = {sellingPricez}
			  buildingType = {buildingTypez} usage = {usagez} caseStartDate = {caseStartDatez}
			  caseFinishDate = {caseFinishDatez} constructFinishDate = {constructFinishDatez} city = {cityz} district = {districtz}
			  village = {villagez}  neighbor = {neighborz} road = {roadz}
			  section = {sectionz} lane = {lanez} alley = {alleyz} number1 = {number1z} number2 = {number2z} floor1 = {floor1z}
			  floor2 = {floor2z} allUpFloor = {allUpFloorz} allDownFloor = {allDownFloorz}
			  ifDoneCaseName = {ifDoneCaseNamez} saleStatus={saleStatusz}
			  />
            </TabPanel>
            <TabPanel value={value} index={1}>
				<AddItemPage2 changeFunc = {edit} mrtArea = {mrtAreaz} mrtRoute1 = {mrtRoute1z} mrtRoute2 = {mrtRoute2z} 
				trMainRoad = {trMainRoadz} trLine = {trLinez} trStation = {trStationz}
				frontRoadWidth = {frontRoadWidthz} typeOfRoad = {typeOfRoadz} feature = {featurez} remark={remarkz}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <AddItemPage3 changeFunc = {edit} room1 = {room1z} room2 = {room2z} livingroom = {livingroomz} bathroom = {bathroomz}
				otherPattern = {otherPatternz} facing = {facingz} landHoldings = {landHoldingsz} landArea = {landAreaz}
				lighting = {lightingz} sideRoom = {sideRoomz} darkRoom = {darkRoomz}
				mainMaterial = {mainMaterialz} compartmentMaterial = {compartmentMaterialz} outsideWall = {outsideWallz}
				status = {statusz} securityGuard = {securityGuardz} manageFee = {manageFeez} amountOfManageFee = {amountOfManageFeez}
				boolManageFee = {boolManageFeez}
				feeFrequency = {feeFrequencyz}
				elementary = {elementaryz} junior = {juniorz} park = {parkz}
				market = {marketz}/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <AddItemPage4 changeFunc = {edit} ownershipArea={ownershipAreaz} extensionArea = {extensionAreaz} ratioOfPublic = {ratioOfPublicz}
				mainBuilding = {mainBuildingz} subsidiaryBuilding ={subsidiaryBuildingz} areaOfPublic = {areaOfPublicz}
				parkingSpace = {parkingSpacez} pingOfParkingSpace = {pingOfParkingSpacez} boolParkingSpace = {boolParkingSpacez}
				quantityOfParkingSpace = {quantityOfParkingSpacez} 
				numberOfParkingSpace = {numberOfParkingSpacez} 
				priceOfParkingSpace = {priceOfParkingSpacez}  depth = {depthz}
				faceWidth = {faceWidthz} highCeiling = {highCeilingz} highBeam = {highBeamz} cargoElevator = {cargoElevatorz}
				tonsOfCargoElevator = {tonsOfCargoElevatorz} boolCargoElevator = {boolCargoElevatorz} crane = {cranez} tonsOfCrane = {tonsOfCranez}
				boolCrane = {boolCranez} bigElec = {bigElecz} hpOfBigElec={hpOfBigElecz} boolBigElec = {boolBigElecz} basement={basementz} 
				agency1 = {agency1z} agency2 = {agency2z} agency3 = {agency3z}
				agency4 = {agency4z} agency5 = {agency5z} agency6 = {agency6z}
				
				/>
            </TabPanel>
            <TabPanel value={value} index={4}>
			<div className="clear"></div>
            <div>
				<button type="file" className="upload-button" style={{marginLeft:"17%"}} onClick={e => pattern_pic_ref.click()}>
					<p style={{fontSize:"20px"}}>點此上傳格局圖(最多一張)</p>
                    <UploadIcon style={{ width: '60%', minHeight: '50%', maxHeight: '50%' }}/>
					<input ref={input => pattern_pic_ref = input} style={{ visibility: 'hidden'}} onChange={localUpload}
					type="file" name="file" />
					<p style={{fontSize:"15px", backgroundColor:"black"}}>{pattern_pic_name}</p>
                </button>
                <button type="file" className="upload-button" style={{marginLeft:"5%"}} onClick={e => house_pic_ref.click()}>
					<p style={{fontSize:"20px"}}>點此上傳實景圖(最多六張)</p>
                    <UploadIcon style={{ width: '60%', minHeight: '50%', maxHeight: '50%' }}/>
					<input ref={input => house_pic_ref = input} style={{ visibility: 'hidden'}} onChange={localUpload2}
					type="file" name="file" multiple />
					{house_pics_names.map(a => (<div style={{fontSize:"15px", backgroundColor:"black"}}>{a}</div>))}
                </button>	
            </div>
			<div className="clear"></div>
            </TabPanel>
            <TabPanel value={value} index={5}>
		
				<table className = "new_item-confirm-table">
    				<tr>
        				<td  className = "new_item-confirm-title">
           					 <h1 className ="new_item-confirm-title-font">銷售物件</h1>
        				</td>
						<td  className = "new_item-confirm-title">
           					 <h1 className ="new_item-confirm-title-font">物件說明</h1>
        				</td>
						<td  className = "new_item-confirm-title">
           					 <h1 className ="new_item-confirm-title-font">建物說明</h1>
        				</td>
						<td  className = "new_item-confirm-title">
           					 <h1 className ="new_item-confirm-title-font">登記資料</h1>
        				</td>
					
					</tr>

    				<tr>
        				<td className = "new_item-td">
							物件案名：{caseNamez}<br></br>
							契約編號：{contractNumz}<br></br>
							委託售價：{contractPriceUnit()}<br></br>
							委託起始日期：{startDateSummary()}<br></br>
							委託終止日期：{finishDateSummary()}<br></br>
							屋齡：{calculateHouseAge()}年<br></br>
							每坪售價：{calculatePricePerPing()}萬<br></br>
							地址：<br></br>
							{address()}<br></br>
						</td>
       					<td className = "new_item-td">
            				捷運站：{mrtRoute2z}<br></br>
							台鐵：{trStationz}<br></br>
							面臨路寬：{frontRoadWidthz}<br></br>
							面鄰路型：{typeOfRoadz}
						</td>
						<td className = "new_item-td">
							格局 : {patternSummary()} <br></br>
							主要坐向：{facingz}<br></br>
							主要建材：{mainMaterialz}<br></br>
							使用現況：{statusz}<br></br>
							警衛或管理員：{securityGuardz}
						</td>	
						<td className = "new_item-td">
							權狀面積：{ownershipAreaz}坪<br></br>
							增建面積：{extensionAreaz}坪<br></br>
							公設比：{calculateRatioOfPublic()}%<br></br>
							主建物：{mainBuildingz}坪<br></br>
							附屬建物：{subsidiaryBuildingz}坪<br></br>
							公設面積：{areaOfPublicz}坪<br></br>
							車位：{parkingSpacez}<br></br>
							車位總數：{quantityOfParkingSpacez}<br></br>
							車位價格：{priceOfParkingSpacez}萬<br></br>
							經紀人：{agency1z}{agency2z}{agency3z}{agency4z}{agency5z}{agency6z}
							
						</td>
					
					
					
					
					</tr>
				</table>
				<BootstrapButton style={{width:"15%",marginLeft:"42.5%"}} onClick={update}>確認並儲存</BootstrapButton>
		   
	
		   
		   
		    </TabPanel>
			</OverflowScrolling></div>
        <div className="new_item-bgcolor2"></div>
        <div className='clear'></div>
      </div>
    );
  }